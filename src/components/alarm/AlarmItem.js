import React from 'react';
import styled from 'styled-components/native';
import { color } from '../../common/colors'
import { SemiHeadline3, SmallBody1, SemiHeadline5 } from '../_common/Typography'


const ItemBox = styled.View`
    background-color: ${color.white};
    align-items: center;
    flex-direction: row;
    padding:16px 14px;
    border-bottom-color: ${color.gray2};
    border-bottom-width: 0.5px;

`;

const ItemImage = styled.Image`
    width: 32px;
    height: 32px;
`;

const ItemTextContainer = styled.View`
    flex-direction: column;
    align-items: stretch;
    padding-left: 16px;
    flex-basis: 0;
    flex-grow: 1;
`;

const ItemInfoContainer = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const ItemInfoDivider = styled.View`
    width: 4px;
    height: 8px;
    margin-left: 4px;
    border-left-color: ${color.gray3};
    border-left-width: 1px;
`;

const Item = ({ post }) => {
    return (
        <ItemBox>
            <ItemImage source={post.board.school.image} />
            <ItemTextContainer>
                <SemiHeadline3
                    ellipsizeMode='tail'
                    numberOfLines={2}
                    style={{ marginBottom: 6 }}>{post.title}</SemiHeadline3>
                <ItemInfoContainer>
                    <SemiHeadline5>{`${post.board.school.name} ${post.board.name}`}</SemiHeadline5>
                    <ItemInfoDivider />
                    <SemiHeadline5>{post.writer}</SemiHeadline5>
                    <ItemInfoDivider />
                    <SemiHeadline5 style={{ color: color.gray5 }}>{post.date}</SemiHeadline5>
                </ItemInfoContainer>
            </ItemTextContainer>
        </ItemBox>
    )
}


export default Item;