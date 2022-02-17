import styled from 'styled-components/native';
import { color } from '../../themes/colors';
import { image } from '../../themes/images';
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

const Icon = styled.Image.attrs(({ focused }) => ({
    source: image.common.search[focused ? 'primary' : 'black']
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
        <Pressable onPress={pressDelete} hitSlop={50}>
            <DeleteIcon source={image.common.delete} />
        </Pressable>
    );
};

const InputBox = ({placeholder}) => {
    const [focus, setFocus] = useState(false);
    const [input, setInput] = useState('')
    const refInput = useRef(null);

    return (
        <Container focused={focus}>
            <Icon focused={focus} />
            <Input
            placeholder={placeholder}
                onFocus={() => setFocus(true)}
                onChangeText={(newInput) => setInput(newInput)}
                value={input}
                ref={refInput}
                onBlur={() => refInput.current.blur()} 
            />
            <DeleteButton pressDelete={() => setInput('')} />
        </Container>
    )
}

export default InputBox;
export {Container as PrimaryColorBox};