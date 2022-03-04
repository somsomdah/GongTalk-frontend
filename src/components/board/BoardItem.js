import React from 'react';
import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';
import { color } from '../../common/colors';
import { image } from '../../common/images';
import { Platform } from 'react-native';
import { SemiHeadline2 } from '../_common/Typography'


const Container = styled.View`
    padding: 16px 24px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${color.white};
`;

const DragIconImage = styled.Image.attrs({
    source: image.common.moveBar
})`
    width: 24px;
    height: 24px;
`;


const Item = ({ name, onLongPress, isActive }) => {

    const _shadow = {
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 8, height: 100, },
                shadowOpacity: 1, shadowRadius: 4,
            },
            android: { elevation: 2, },
        }),
    }

    return (
        <Container style={isActive ? _shadow : {}}>
            <SemiHeadline2>{name}</SemiHeadline2>
            <Pressable hitSlop={20} onLongPress={onLongPress}>
                <DragIconImage />
            </Pressable>
        </Container>
    );
};

export default Item;