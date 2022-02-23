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
    margin-bottom: 28px;
`;

const Input = styled.TextInput.attrs({
    placeholderTextColor: color.gray6,
    selectionColor: color.primary,
})`
    flex-grow: 1;
    flex-basis: 0;
    font-family: 'pretendard-regular';
    font-size: 14px;
    line-height: 20px;
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

const InputBox = ({keywordList, setKeywordList}) => {
    
    const [focus, setFocus] = useState(false);
    const [input, setInput] = useState('');

    const _onInputDoneButtonPressed = () => {
        setKeywordList([...keywordList, {id: 1000+keywordList.length,  content: input}])
        setInput('');
    }

    return (
        <Container focused={focus} >
            <Input
                placeholder={'키워드를 입력하세요'}
                onFocus={() => setFocus(true)}
                onChangeText={(newInput) => setInput(newInput)}
                value={input}
                onSubmitEditing={_onInputDoneButtonPressed}
                returnKeyType={'done'}
            />
            <DeleteButton pressDelete={() => setInput('')} />
        </Container>
    )
}

export default InputBox;