import styled from "styled-components/native";
import { color } from "../../common/colors";
import { image } from "../../common/images";
import { Headline4, SemiHeadline1 } from "../../components/_common/Typography";
import { Pressable, View } from "react-native";
import { ReturnButton, NextButton, ButtonContainer } from "./Start";

const Container = styled.View`
    flex: 1;
    background-color: ${color.white};
    align-items: center;
`;

const Space = styled.View`
    flex: 1;
`
const CheckImage = styled.Image.attrs({
    source: image.common.roundCheck.primary
})`
    width: 52px;
    height: 52px;
`

const Complete = ({navigation}) => {

    return (
        <Container>
            <Space />
            <CheckImage />
            <View style={{margin: 24}}>
            <Headline4 style={{color: color.primary}}>{'모든 설정을 완료했어요!'}</Headline4>
            </View>
            <SemiHeadline1 style={{color: color.gray6}}>
                {'이제 공똑 서비스를 시작해볼까요?'}
            </SemiHeadline1>
            <Space />
            <ButtonContainer>
                <ReturnButton value={'이전'} onPress={() => navigation.navigate('onboarding-addKeyword')} />
                <NextButton value={'시작하기'} onPress={() => navigation.navigate('app')} />
            </ButtonContainer>
        </Container>
    );
}

export default Complete;