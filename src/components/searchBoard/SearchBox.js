import styled from 'styled-components/native';
import { color } from '../../common/colors';
import { image } from '../../common/images';
import { Pressable } from 'react-native';
import { useState, useMemo } from 'react';


const Container = styled.View`
    height: 54px;
    border-radius: 12px;
    align-items: center;
    flex-direction: row;
    border: 1px solid ${({ focused }) => focused ? color.primary : color.gray3};
    padding: 16px;
`;

const ReturnImage = styled.Image.attrs(({ focused }) => ({
    source: image.common.return[focused ? 'primary' : 'black']
}))`
    margin-right: 24px;
    margin-bottom: 18px;
    margin-top: 18px;   
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

const SearchBox = ({ navigation, onChangeText, setInputValue, inputValue}) => {

    const [focus, setFocus] = useState(false);


    return (

        <Container focused={focus} >
            <Pressable onPress={() => navigation.goBack()}>
                <ReturnImage focused={focus} />
            </Pressable>

            <Input
                placeholder={'전공/기관 검색하기'}
                onFocus={() => setFocus(true)}
                onChangeText={setInputValue}
                value={inputValue}
                onSubmitEditing={() => setFocus(false)}
                returnKeyType={'search'}
                autoFocus={false}
            />
            <DeleteButton pressDelete={() => setInputValue('')} />
        </Container>
    )
}

export default SearchBox;