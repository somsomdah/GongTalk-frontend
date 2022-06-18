import React, { useState } from 'react';
import { Pressable } from 'react-native';
import styled from "styled-components/native";
import { color } from '../../common/colors';
import { image } from "../../common/images";
import { SemiHeadline3, SemiHeadline4, SemiHeadline5, SemiHeadline2_1 } from '../_common/Typography';
import { useQuery } from 'react-query';
import { getPostsByBoardId } from 'api/boards';
import { dateParser } from 'utils/parser'

const Container = styled.View`
    margin-bottom: 32px;
    flex-direction: column;
    align-items: stretch;
`;

const TitleContainer = styled.View`
    margin-bottom: 16px;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
`;

const ContentContainer = styled.View``;

const ItemBox = styled.View`
    border-radius: 12px;
    border: 0.5px solid ${color.gray3};
    padding: 16px;
    margin-bottom: 8px;
    flex-direction: column;
    flex: 1;
`;

const TopBox = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
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

const ItemTitleBox = styled.TouchableOpacity`
    flex-shrink: 1;
    margin: 6px 0px 8px 0px;
`;


const TagBox = styled.View`
    justify-content: flex-start;
    flex-direction: row;
`;

const ItemInfoDivider = styled.View`
    width: 6px;
    height: 8px;
    margin-left: 6px;
    border-left-color: ${color.gray3};
    border-left-width: 1px;
`;


const MoreImage = styled.Image.attrs({ source: image.common.next })`
    width: 12px;
    height: 12px;
    margin-left: 4px;
`

const Item = ({ post, navigation }) => {

    const [starred, setStarred] = useState(false);
    toggleStar = () => setStarred(!starred)

    return (
        <ItemBox>
            <TopBox>
                <SemiHeadline5>{post.writer}</SemiHeadline5>
                <ItemInfoDivider />
                <SemiHeadline5 style={{ color: color.gray5 }}>{dateParser(post.date)}</SemiHeadline5>
                <StarButtonBox><StarButton onPress={toggleStar} starred={starred} /></StarButtonBox>
            </TopBox>
            <ItemTitleBox onPress={() => navigation.navigate('postDetail', { post: post })}>
                <SemiHeadline3 ellipsizeMode='tail' numberOfLines={2}>{post.title}</SemiHeadline3>
            </ItemTitleBox>
            {/* 
            // tag가 있을때 적용하기, 지금은 없음
            <TagBox>
                {Object.values(post.tags).map(tag => (
                    <SemiHeadline4 key={tag.id} style={{ color: color.primary }}>{`#${tag.content} `}</SemiHeadline4>
                ))}
            </TagBox> */}
        </ItemBox>
    );
}


const Board = ({ navigation, board }) => {

    const [items, setItems] = useState([]);

    useQuery(`posts__board_${board.id}`, () => getPostsByBoardId(board.id), {
        onSuccess: (data) => setItems(data)
    })

    return (
        <Container>
            <Pressable onPress={() => navigation.navigate('postList', { headerValue: `${board.school.name} ${board.name}`, boardId: board.id })} >
                <TitleContainer>
                    <SemiHeadline2_1>{`${board.school.name} ${board.name}`}</SemiHeadline2_1>
                    <MoreImage />
                </TitleContainer>
            </Pressable>

            <ContentContainer>
                {Object.values(items).map((item) =>
                    <Item
                        key={item.id}
                        post={item}
                        navigation={navigation}
                    />
                )}
            </ContentContainer>
        </Container >

    );
};

export default Board;