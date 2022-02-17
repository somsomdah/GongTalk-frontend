import React from 'react';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';
import { color } from '../../themes/colors';
import { image } from '../../themes/images';
import { Platform } from 'react-native';


const Container = styled.View`
    padding: 16px 24px
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${color.white};
`;

const ItemText = styled.Text`
    font-size: 16px;
    line-height: 24px;
    color: ${color.black};
`

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
        <Container style ={isActive ? _shadow : {}}>
            <Pressable hitSlop={20}>
                <ItemText>{name}</ItemText>
            </Pressable>
            <Pressable hitSlop={50} onLongPress={onLongPress}>
                <DragIconImage />
            </Pressable>
        </Container>
    );
};

export default Item;