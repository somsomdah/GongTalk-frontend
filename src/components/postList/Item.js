import React, { useState } from 'react';
import styled from 'styled-components/native';
import { color } from '../../common/colors'
import { image } from '../../common/images';
import { SemiHeadline3, SemiHeadline5 } from '../_common/Typography'
import { Pressable } from 'react-native';
import { useMutation, useQueryClient } from 'react-query';
import { createScrap, deleteScrap, getScrapsByPostId } from 'api/user/scraps';
import { useQuery } from 'react-query';



const ItemBox = styled.View`
    flex-direction: column;
    align-items: stretch;
    flex-basis: 0;
    flex-grow: 1;
    padding: 16px 0px;
    border-bottom-color: ${color.gray2};
    border-bottom-width: 0.5px;
`;

const ItemInfoContainer = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const ItemInfoDivider = styled.View`
    width: 6px;
    height: 8px;
    margin-left: 6px;
    border-left-color: ${color.gray3};
    border-left-width: 1px;
`;

const StarButtonBox = styled.View`
    flex-grow: 1;
    justify-content: flex-end;
    flex-direction: row;
`;

const Star = styled.Image`    
    height: 18px;
    width: 18px;
`;

const StarButton = ({ onPress, starred }) => {
    return (
        <Pressable onPress={onPress} hitSlop={10}>
            <Star source={starred ? image.star.filled : image.star.unfilled} />
        </Pressable>
    )
}

const Item = ({ post }) => {

    const queryClient = useQueryClient()

    const [starred, setStarred] = useState(false);
    const [scrapId, setScrapId] = useState(null)

    useQuery(["scrap", "post", post.id], () => getScrapsByPostId(post.id),
        {
            onSuccess: (data) => {
                if (data.length > 0) {
                    setStarred(true)
                    setScrapId(data[0].id)
                } else {
                    setStarred(false)
                }
            }
        }
    )

    const createScrapMutation = useMutation(() => createScrap(post.id), {
        onSuccess: () => {
            queryClient.invalidateQueries('scraps')
            queryClient.invalidateQueries(["scrap", "post", post.id])
        }
    })

    const deleteScrapMutation = useMutation(() => deleteScrap(scrapId), {
        onSuccess: () => {
            queryClient.invalidateQueries('scraps')
            queryClient.invalidateQueries(["scrap", "post", post.id])
        }
    })



    const toggleStar = () => {
        if (starred) {
            deleteScrapMutation.mutate()
        } else {
            createScrapMutation.mutate()
        }
    }

    return (
        <ItemBox>
            <SemiHeadline3
                ellipsizeMode='tail'
                numberOfLines={2}
                style={{ marginBottom: 6 }}>{post.title}
            </SemiHeadline3>
            <ItemInfoContainer>
                <SemiHeadline5>{`${post.board.school.name} ${post.board.name}`}</SemiHeadline5>
                <ItemInfoDivider />
                <SemiHeadline5>{post.writer}</SemiHeadline5>
                <ItemInfoDivider />
                <SemiHeadline5 style={{ color: color.gray5 }}>{post.date}</SemiHeadline5>
                <StarButtonBox><StarButton onPress={toggleStar} starred={starred} /></StarButtonBox>
            </ItemInfoContainer>
        </ItemBox>
    )
}


export default Item;