import styled from 'styled-components/native';
import { color } from '../../common/colors';
import { image } from '../../common/images';
import { Pressable } from 'react-native';
import { useRef, useState } from 'react';
import { SemiHeadline3 } from '../_common/Typography';


const Container = styled.View`
    height: 54px;
    border-radius: 12px;
    flex-direction: row;
    align-items: center;
    border: 1px solid ${({ focused }) => focused ? color.primary : color.gray3};
    padding: 16px;
    margin: 26px 24px 10px 24px;
`;

const ReturnImage = styled.Image.attrs({
    source: image.common.return.black
})`
    margin-right: 24px;
    height: 20px;
    width: 20px;
`;

const Input = styled.Pressable`
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const DeleteImage = styled.Image.attrs(
    { source: image.common.delete }
)`
    width: 18px;
    height: 18px;
    margin-left: 12px;
`;


const InputBoxButton = ({ navigation, value, searchType, searchValue }) => {


    return (

        <Container >

            <Pressable onPress={() => navigation.pop(2)}>
                <ReturnImage />
            </Pressable>

            <Input onPress={() => navigation.navigate('search', { type: searchType, value: searchValue, searchValue: value })}>
                <SemiHeadline3>{value}</SemiHeadline3>
            </Input>

            <Pressable onPress={() => navigation.navigate('search', { type: searchType, value: searchValue, searchValue: '' })}>
                <DeleteImage />
            </Pressable>

        </Container>
    )
}

export default InputBoxButton;