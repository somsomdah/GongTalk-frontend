import styled from "styled-components/native";
import { color } from "../../common/colors";
import { image } from "../../common/images";
import { SemiHeadline2, Headline4 } from "../../components/_common/Typography";
import { Pressable, View } from "react-native";

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


const NextImage = styled.Image.attrs({
    source: image.common.proceed.primary
})`
    width: 24px;
    height: 24px;
    margin-left: 10px;
`;

const NextButtonBox = styled.View`
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        margin-bottom: 40px;
        padding: 0px 50px;

`;

const NextButton = ({ onPress, value }) => {

    const _textStyle = {
        color: color.primary
    }

    return (
        
        <Pressable onPress={onPress}>
            <NextButtonBox>
            <Headline4 style={_textStyle}>{value}</Headline4>
            <NextImage />
            </NextButtonBox>
        </Pressable>
        

    );
};


const Start = ({navigation}) => {
    return (
        <Container>
            <Box><SymbolImage /></Box>
            <Box><WelcomeText /></Box>
            <View style={{flexGrow: 1}}/>
            <NextButton onPress={() => navigation.navigate('onboarding-addBoard' )} value={'시작하기'}/>
        </Container>
    )
}    

export default Start;
export {NextButton};