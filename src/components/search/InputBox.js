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
    border: 1px solid ${({ focused }) => focused ? color.primary : color.gray3};
    padding: 16px;
`;

const ReturnImage = styled.Image.attrs({
    source: image.common.return
})`
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

const InputBox = ({ placeholder, navigation, onSearchButtonPress}) => {
    const [focus, setFocus] = useState(false);
    const [input, setInput] = useState('')
    // const refInput = useRef(null);

    return (
        <Container focused={focus} >
            <Pressable onPress={() => navigation.goBack()}>
                <ReturnImage focused={focus} />
            </Pressable>

            <Input
                placeholder={placeholder}
                onFocus={() => setFocus(true)}
                onChangeText={(newInput) => setInput(newInput)}
                value={input}
                // ref={refInput}
                // onBlur={() => refInput.current.blur()}
                onSubmitEditing={onSearchButtonPress}
            />
            <DeleteButton pressDelete={() => setInput('')} />
        </Container>
    )
}

export default InputBox;