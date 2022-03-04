import styled from 'styled-components/native';
import { color } from '../../common/colors';
import { image } from '../../common/images';
import { Pressable } from 'react-native';
import { useRef, useState } from 'react';


const Container = styled.View`
    height: 54px;
    border-radius: 12px;
    align-items: center;
    flex-direction: row;
    border: 1px solid ${color.primary};
    padding: 16px;
`;

const ReturnImage = styled.Image.attrs({
    source: image.common.return.primary
})`
    margin-right: 24px;
    height: 20px;
    width: 20px;
`;

const Input = styled.TextInput.attrs({
    placeholderTextColor: color.gray6,
    selectionColor: color.primary,
})`
    flex-grow: 1;
    flex-basis: 0;
    font-size: 14px;
    font-weight: 400;
    width: 100%;
    font-family: 'pretendard-medium';
`;

const DeleteIcon = styled.Image`
    width: 18px;
    height: 18px;
    margin-left: 12px;
`;

const DeleteButton = ({ pressDelete }) => {
    return (
        <Pressable onPress={pressDelete} hitSlop={10}>
            <DeleteIcon source={image.common.delete} />
        </Pressable>
    );
};

const InputBox = ({ placeholder, navigation, onSearchButtonPress, inputValue, setInputValue }) => {


    return (

        <Container >
            <Pressable onPress={() => navigation.goBack()}>
                <ReturnImage />
            </Pressable>

            <Input
                placeholder={placeholder}
                onChangeText={(newInput) => setInputValue(newInput)}
                value={inputValue}
                onSubmitEditing={onSearchButtonPress}
                returnKeyType={'search'}
                autoFocus={true}
            />
            <DeleteButton pressDelete={() => setInputValue('')} />
        </Container>
    )
}

export default InputBox;