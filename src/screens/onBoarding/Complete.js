import styled from "styled-components/native";
import { color } from "../../common/colors";
import { image } from "../../common/images";
import { Headline4, SemiHeadline1 } from "../../components/_common/Typography";
import { Pressable, View } from "react-native";
import { ReturnButton, NextButton, ButtonContainer } from "./Start";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useContext } from "react";
import { useMutation } from 'react-query';
import { login } from "../../api/_query";
import { createUser } from "api/user";
import OnboardingContext from "../../contexts/Onboarding";
import UserContext from "../../contexts/User";
import { createUserBoard, createBoardSubscribe, createCommonKeywordSubscribe } from "../../api/user";


const Container = styled.View`
    flex: 1;
    background-color: ${color.white};
    align-items: center;
`;

const Space = styled.View`
    flex: 1;
`
const Illust = styled.Image.attrs({
    source: image.illust.onboarding
})`
    width: 360px;
    height: 367px;
`

const CheckImage = styled.Image.attrs({
    source: image.common.roundCheck.primary
})`
    width: 32px;
    height: 32px;
`
const Complete = ({ navigation }) => {

    const { boardList, keywordList } = useContext(OnboardingContext);

    const createSubscribeMutation = useMutation(async () => {
        for (board of boardList) {
            await createUserBoard(board.id)
            await createBoardSubscribe(board.id)
        }
        for (keyword of keywordList) {
            await createCommonKeywordSubscribe(keyword.content)
        }
    }, {
        onSuccess: () => {
            navigation.navigate('app', { screen: 'main' })
        }
    })

    const createUserMutation = useMutation(createUser);


    const onStartButtonPress = async () => {
        createUserMutation.mutate(null,
            {
                onSuccess: (data) => {
                    login().then(() => createSubscribeMutation.mutate());
                },
                onError: error => {
                },
            }
        )
    }

    return (
        <Container>
            <View style={{ alignItems: 'center' }}>
                <View style={{ height: 52 }} />
                <Illust />
                <View style={{ height: 120 }} />
                <Headline4 style={{ color: color.primary }}>{'모든 설정을 완료했어요!'}</Headline4>
                <View style={{ height: 16 }} />
                <SemiHeadline1 style={{ color: color.gray6 }}>
                    {'이제 공똑을 시작해볼까요?'}
                </SemiHeadline1>
            </View>
            <Space />
            <ButtonContainer>
                <ReturnButton value={'이전'} onPress={() => navigation.navigate('addKeyword')} />
                <NextButton value={'시작하기'} onPress={onStartButtonPress} />
            </ButtonContainer>
        </Container>
    );
}

export default Complete;