import { useState, useContext, useEffect } from "react";
import { Input, Title, Recommend, Added, Container, UpperContainer, LowerContainer } from "../AddKeyword";
import { NextButton, ReturnButton, ButtonContainer } from "./Start";
import { SemiHeadline1, SmallBody1 } from "../../components/_common/Typography";
import AlertModal from "../../components/_common/AlertModal";
import OnboardingContext from "../../contexts/Onboarding";
import { Dimensions, ScrollView, KeyboardAvoidingView } from "react-native";
import { useQuery } from "react-query";
import { getRecommendedKeywords } from "../../api/keywords";


const AddKeyword = ({ navigation }) => {

    const { setKeywordList } = useContext(OnboardingContext)


    const [myKeywords, setMyKeywords] = useState([])
    const [alertModalVisible, setAlertModalVisible] = useState(false);

    const _addKeyword = (keywordContent) => {
        const includes = myKeywords.find(myKeyword => myKeyword.content === keywordContent)
        if (includes) {
            setAlertModalVisible(true)
            return
        }

        setMyKeywords((prevKeywords) => [...prevKeywords, {
            id: keywordContent,
            content: keywordContent
        }])

        setKeywordList((prevKeywords) => [...prevKeywords, { content: keywordContent }])

    };

    const nextButtonDisabled = myKeywords.length > 0 ? false : true
    const height = Dimensions.get('window').height

    return (
        <KeyboardAvoidingView style={{ height: height }} >
            <Container>

                <UpperContainer style={{ paddingTop: 40 }}>

                    <SemiHeadline1>{'관심있는 키워드를 추가하세요.'}</SemiHeadline1>
                    <SmallBody1 style={{ marginBottom: 25 }}>
                        {'추가한 키워드와 관련있는 모든 공지사항을 모아 확인할 수 있어요. 해당 키워드로 알림이 갑니다. 최소 1개 이상 선택해주세요. '}
                    </SmallBody1>

                    <Title value={'키워드 입력하기'} />
                    <Input
                        addKeyword={_addKeyword}
                    />
                    <Title value={'추천 키워드'} />
                    <Recommend
                        addKeyword={_addKeyword}
                    />
                </UpperContainer>
                <LowerContainer>
                    <Title value={'내 키워드'} />
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Added
                            keywordList={myKeywords}
                        />
                    </ScrollView>
                </LowerContainer>


                <ButtonContainer>
                    <ReturnButton value={'이전'} onPress={() => navigation.navigate('addBoard')} />
                    <NextButton value={'다음'} onPress={() => navigation.navigate('complete')} disabled={nextButtonDisabled} />
                </ButtonContainer>

                <AlertModal
                    isVisible={alertModalVisible}
                    setIsVisible={setAlertModalVisible}
                    value={'동일한 키워드를 여러번 추가할 수 없습니다.'}
                />

            </Container>
        </KeyboardAvoidingView>
    )

}

export default AddKeyword;