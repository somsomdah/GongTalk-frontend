import styled from "styled-components/native";
import { color } from "../../common/colors";
import { image } from "../../common/images";
import { SemiHeadline2, SemiHeadline1 } from "../../components/_common/Typography";
import { Pressable, View } from "react-native";
import { useEffect } from "react";
import { login } from 'api/_query'


const Container = styled.View`
    flex: 1;
    background-color: ${color.white};
    align-items: stretch;
`;

const Box = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    padding: 0px 50px;
`;

const SymbolImage = styled.Image.attrs({
    source: image.symbol.letter.vertical
})`
    margin-top: 120px;
    width: 80px;
    height: 140px;
`;

const TextBox = styled.View`
    margin-top: 20px;
    flex-direction: column;
    justify-content: flex-start;
`;

const WelcomeText = () => {
    const _textStyle = { color: color.primary }

    return (
        <TextBox >
            <SemiHeadline2 style={_textStyle}>{'학교의'}</SemiHeadline2>
            <SemiHeadline2 style={_textStyle}>{'모든 공지사항을'}</SemiHeadline2>
            <SemiHeadline2 style={_textStyle}>{'똑똑!'}</SemiHeadline2>
        </TextBox>

    );
};


const NextImage = styled.Image.attrs(({ disabled }) => ({
    source: image.common.proceed[disabled ? 'gray' : 'primary']
}))`
    width: 20px;
    height: 20px;
    margin-left: 8px;
`;

const NextButtonBox = styled.View`
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
`;

const NextButton = ({ onPress, value, disabled }) => {

    const _textStyle = {
        color: disabled ? color.gray3 : color.primary
    }


    return (

        <Pressable onPress={disabled ? () => { } : onPress} hitSlop={10}>
            <NextButtonBox>
                <SemiHeadline1 style={_textStyle}>{value}</SemiHeadline1>
                <NextImage disabled={disabled} />
            </NextButtonBox>
        </Pressable>


    );
};


const ReturnImage = styled.Image.attrs({
    source: image.common.return.primary
})`
    width: 20px;
    height: 20px;
    margin-right: 8px;
`;

const ReturnButtonBox = styled.View`
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
`;

const ReturnButton = ({ onPress, value }) => {

    const _textStyle = {
        color: color.primary
    }

    return (
        <Pressable onPress={onPress} hitSlop={10}>
            <ReturnButtonBox>
                <ReturnImage />
                <SemiHeadline1 style={_textStyle}>{value}</SemiHeadline1>
            </ReturnButtonBox>
        </Pressable>
    );
};

const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 28px 40px 28px;
    align-self: stretch;
    flex-shrink: 1;
`;


const Start = ({ navigation }) => {

    return (
        <Container>
            <Box><SymbolImage /></Box>
            <Box><WelcomeText /></Box>
            <View style={{ flexGrow: 1 }} />
            <ButtonContainer>
                <View />
                <NextButton onPress={() => navigation.navigate('addBoard')} value={'다음'} />
            </ButtonContainer>
        </Container>
    )
};

export default Start;
export { NextButton, ReturnButton, ButtonContainer };