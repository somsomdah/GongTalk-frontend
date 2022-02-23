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

const DateBox = styled.View.attrs({
    borderLeftColor: color.gray3,
    borderLeftWidth: 1,
})`
    padding-left: 8px;
    margin-left: 8px;
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

const StarButton = ({ id, onPressOut, starred }) => {
    const _onPressOut = () => {
        onPressOut(id);
    }

    return (
        <Pressable onPressOut={_onPressOut} hitSlop={10}>
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

const Item = ({ post, starred, toggleStar }) => {
    return (
        <ItemBox>
            <TopBox>
                <SemiHeadline5>{post.writer}</SemiHeadline5>
                <DateBox><SemiHeadline5 style={{ color: color.gray3 }}>{post.date}</SemiHeadline5></DateBox>
                <StarButtonBox><StarButton id={post.id} onPressOut={toggleStar} starred={starred} /></StarButtonBox>
            </TopBox>
            <ItemTitleBox>
                <SemiHeadline3 ellipsizeMode='tail' numberOfLines={2}>{post.title}</SemiHeadline3>
            </ItemTitleBox>
            <TagBox>
                {Object.values(post.tags).map(tag => (
                    <SemiHeadline4 key={tag.id} style={{color: color.primary}}>{`#${tag.content} `}</SemiHeadline4>
                ))}
            </TagBox>
        </ItemBox>
    );
}


const Board = () => {

    const [items, setItems] = useState(postList);

    const _toggleStar = id => {
        const currentItems = items.map(item => {
            if (item.id === id) {
                item.starred = !item.starred
            }
            return item
        })
        setItems(currentItems);
    };

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
                        toggleStar={_toggleStar} />
                )}
            </ContentContainer>
        </Container >

    );
};

export default Board;