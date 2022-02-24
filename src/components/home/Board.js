import React, { useState } from 'react';
import { Pressable } from 'react-native';
import styled from "styled-components/native";
import { color } from '../../common/colors';
import { image } from "../../common/images";
import { SemiHeadline3, SemiHeadline4, SemiHeadline5, SemiHeadline2_1 } from '../_common/Typography';
import { postList } from '../../common/data';

const Container = styled.View`
    margin-bottom: 32px;
    flex-direction: column;
    align-items: stretch;
`;

const TitleContainer = styled.View`
    padding-bottom: 16px;
    justify-content: flex-start;
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
    width: 4px;
    height: 8px;
    margin-left: 4px;
    border-left-color: ${color.gray3};
    border-left-width: 1px;
`;

const Item = ({ post }) => {

    const [starred, setStarred] = useState(false);
    toggleStar = () => setStarred(!starred)

    return (
        <ItemBox>
            <TopBox>
                <SemiHeadline5>{post.writer}</SemiHeadline5>
                <ItemInfoDivider />
                <SemiHeadline5 style={{ color: color.gray5 }}>{post.date}</SemiHeadline5>
                <StarButtonBox><StarButton onPress={toggleStar} starred={starred} /></StarButtonBox>
            </TopBox>
            <ItemTitleBox>
                <SemiHeadline3 ellipsizeMode='tail' numberOfLines={2}>{post.title}</SemiHeadline3>
            </ItemTitleBox>
            <TagBox>
                {Object.values(post.tags).map(tag => (
                    <SemiHeadline4 key={tag.id} style={{ color: color.primary }}>{`#${tag.content} `}</SemiHeadline4>
                ))}
            </TagBox>
        </ItemBox>
    );
}


const Board = () => {

    const [items, setItems] = useState(postList);

    return (
        <Container>
            <TitleContainer>
                <SemiHeadline2_1>이화여대 컴퓨터공학과</SemiHeadline2_1>
            </TitleContainer>

            <ContentContainer>
                {Object.values(items).map((item, idx) =>
                    idx < 3 &&
                    <Item
                        key={item.id}
                        post={item}
                    />
                )}
            </ContentContainer>
        </Container >

    );
};

export default Board;