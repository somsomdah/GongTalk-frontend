import styled from "styled-components/native";
import { color } from "../common/colors";
import { image } from "../common/images";
import { SemiHeadline2, Headline4 } from "../components/_common/Typography";
import { Pressable, View } from "react-native";

const Container = styled.View`
    flex: 1;
    background-color: ${color.white};
    padding: 0px 50px;
`;

const SymbolImage = styled.Image.attrs({
    source: image.symbol.letter.vertical
})`
    margin-top: 120px;
    width: 80px;
    height: 140px;
`

const WelcomeText = () => {
    const _textStyle = { color: color.primary }
    const _style = {
        marginTop: 20,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flexGrow: 1
    }
    return (
        <View style={_style}>
            <SemiHeadline2 style={_textStyle}>{'학교의'}</SemiHeadline2>
            <SemiHeadline2 style={_textStyle}>{'모든 공지사항을'}</SemiHeadline2>
            <SemiHeadline2 style={_textStyle}>{'똑똑!'}</SemiHeadline2>
        </View>

    );
}


const NextImage = styled.Image.attrs({
    source: image.common.proceed.primary
})`
    width: 24px;
    height: 24px;
`

const StartButton = ({navigation}) => {
    const _style = {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 32
    }

    const _textStyle = {
        color: color.primary
    }

    return (
        <Pressable style={_style} onPress={()=>navigation.navigate('main')}>
            <Headline4 style={_textStyle}>{'시작하기 '}</Headline4>
            <NextImage />
        </Pressable>
    );
}


const Start = ({navigation}) => {
    return (
        <Container>
            <SymbolImage />
            <WelcomeText />
            <StartButton navigation={navigation}/>
        </Container>
    )
}

export default Start;