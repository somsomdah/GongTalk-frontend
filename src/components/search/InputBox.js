import styled from 'styled-components/native';
import { color } from '../../themes/colors';
import { Text, View } from 'react-native';
import { image } from '../../themes/images';
import { Pressable } from 'react-native';


const Container = styled.View`
    height: 54px;
    border-radius: 12px;
    align-items: center;
    flex-direction: row;
    border: 1px solid ${color.gray3};
    padding: 16px;
`

const Icon = styled.Image.attrs({ source: image.common.search.black })`
    margin-right: 24px;
    margin-bottom: 18px;
    margin-top: 18px;   
    height: 20px;
    width: 20px;
`;

const Input = styled.TextInput.attrs({placeholder: '키워드 입력하기', placeholderTextColor: color.gray6})`
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

const DeleteButton = () => {
    return (
        <Pressable>
            <DeleteIcon source={image.common.delete} />
        </Pressable>
    );
};

const InputBox = () => {
    return (
        <Container>
            <Icon /><Input /><DeleteButton />
        </Container>
    )
}

export default InputBox;