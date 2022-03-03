import React, { useState } from 'react';
import styled from 'styled-components/native';
import { color } from '../../common/colors'
import { image } from '../../common/images';
import { SemiHeadline3, SemiHeadline5 } from '../_common/Typography'
import { Pressable } from 'react-native';


const Container = styled.View`
    flex-direction: column;
    align-items: stretch;
    flex-shrink: 1;
    padding: 20px 24px;
    border-bottom-color: ${color.gray3};
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

const StarButton = ({ onPressOut, starred }) => {
    return (
        <Pressable onPressOut={onPressOut} hitSlop={10}>
            <Star source={starred ? image.star.filled : image.star.unfilled} />
        </Pressable>
    )
}

const TitleBox = ({ post}) => {

    const [starred, setStarred] = useState(post.starred);

    const toggleStar = () => {
        setStarred(!starred)
    };

    return (
        <Container>
            <SemiHeadline3
                style={{ marginBottom: 12 }}>{post.title}</SemiHeadline3>
            <ItemInfoContainer>
            <SemiHeadline5>{`${post.board.school.name} ${post.board.name}`}</SemiHeadline5>
                    <ItemInfoDivider />
                    <SemiHeadline5>{post.writer}</SemiHeadline5>
                    <ItemInfoDivider />
                    <SemiHeadline5 style={{ color: color.gray5 }}>{post.date}</SemiHeadline5>
                    <StarButtonBox><StarButton StarButton id={post.id} onPressOut={toggleStar} starred={starred}/></StarButtonBox>
            </ItemInfoContainer>
        </Container>
    )
}


export default TitleBox;