import React from 'react';
import styled from 'styled-components/native';
import { color } from '../../common/colors'
import { SemiHeadline3, SemiHeadline5 } from '../Typography'


const ItemBox = styled.View`
    flex-direction: column;
    align-items: stretch;
    flex-basis: 0;
    flex-grow: 1;
    padding-top: 20px;
    padding-bottom: 14px;
    border-bottom-color: ${color.gray2};
    border-bottom-width: 0.5px;
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

        </ItemBox>
    )
}


export default Item;