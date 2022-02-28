import { useState, useContext } from "react";
import { Input, Title, Recommend, Added, Container, UpperContainer, LowerContainer } from "../AddKeyword";
import { NextButton, ReturnButton, ButtonContainer } from "./Start";
import { SemiHeadline1, SmallBody1 } from "../../components/_common/Typography";
import AlertModal from "../../components/_common/AlertModal";
import OnboardingContext from "../../contexts/Onboarding";

const AddKeyword = ({ navigation }) => {
    const recommendedKeywordList = [
        { id: 1, content: '장학' }, { id: 2, content: '인턴' }, { id: 3, content: '교육' },
        { id: 21, content: '세미나' }, { id: 22, content: '체험' }, { id: 23, content: '해외' },
        { id: 31, content: '취업' }, { id: 32, content: '수강' }, { id: 33, content: '졸업' }
    ]

    const {keywordList, setKeywordList} = useContext(OnboardingContext)
    const [alertModalVisible, setAlertModalVisible] = useState(false);

    const nextButtonDisabled = keywordList.length > 0 ? false : true

    return (
        <Container>
            <UpperContainer style={{ paddingTop: 40 }}>
                <SemiHeadline1>{'관심있는 키워드를 추가하세요.'}</SemiHeadline1>
                <SmallBody1 style={{ marginBottom: 25 }}>
                    {'추가한 키워드와 관련있는 모든 공지사항을 모아 확인할 수 있어요. 해당 키워드로 알림이 갑니다. 최소 1개 이상 선택해주세요. '}
                </SmallBody1>
                <Title value={'키워드 입력하기'} />
                <Input keywordList={keywordList} setKeywordList={setKeywordList} />
                <Title value={`추천 키워드`} />
                <Recommend
                    keywordList={recommendedKeywordList}
                    myKeywordList={keywordList}
                    setMyKeywordList={setKeywordList}
                    setAlertModalVisible={setAlertModalVisible}
                />
            </UpperContainer>
            <LowerContainer>
                <Title value={`내 키워드`} />
                <Added keywordList={keywordList} setKeywordList={setKeywordList} />
            </LowerContainer>
            <ButtonContainer>
                <ReturnButton value={'이전'} onPress={() => navigation.navigate('onboarding-addBoard')} />
                <NextButton value={'다음'} onPress={() => navigation.navigate('onboarding-complete')} disabled={nextButtonDisabled} />
            </ButtonContainer>

            <AlertModal
                isVisible={alertModalVisible}
                setIsVisible={setAlertModalVisible}
                value={'동일한 키워드를 여러번 추가할 수 없습니다.'}
            />

        </Container>
    )

}

export default AddKeyword;