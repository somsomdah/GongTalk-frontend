import styled from "styled-components/native";
import { color } from "../../common/colors";
import { useState } from "react";
import { Header, Input, Title, Recommend, Added, Container, UpperContainer, LowerContainer } from "../AddKeyword";
import { NextButton, ReturnButton, ButtonContainer } from "./Start";
import { SemiHeadline1, SmallBody1 } from "../../components/_common/Typography";


const AddKeyword = ({ navigation }) => {
    const keywordList = [
        { id: 1, content: '장학' }, { id: 2, content: '인턴' }, { id: 3, content: '교육교육교육' },
        { id: 21, content: '장학' }, { id: 22, content: '인턴인턴인턴인턴' }, { id: 23, content: '교육' },
        { id: 31, content: '장학' }, { id: 32, content: '인턴' }, { id: 33, content: '교육' }
    ]

    const [myKeywords, setMyKeywords] = useState([])

    return (
        <Container>
            <UpperContainer style={{paddingTop: 40}}>
                <SemiHeadline1>{'관심있는 키워드를 추가하세요.'}</SemiHeadline1>
                <SmallBody1 style={{ marginBottom: 25 }}>
                    {'추가한 키워드와 관련있는 모든 공지사항을 모아 확인할 수 있어요. 해당 키워드로 알림이 갑니다. 최소 1개 이상 선택해주세요. '}
                </SmallBody1>
                <Title value={'키워드 입력하기'} />
                <Input keywordList={myKeywords} setKeywordList={setMyKeywords} />
                <Title value={`추천 키워드`} />
                <Recommend keywordList={keywordList} myKeywordList={myKeywords} setMyKeywordList={setMyKeywords} />
            </UpperContainer>
            <LowerContainer>
                <Title value={`내 키워드`} />
                <Added keywordList={myKeywords} setKeywordList={setMyKeywords} />
            </LowerContainer>
            <ButtonContainer>
                <ReturnButton value={'이전'} onPress={() => navigation.navigate('onboarding-addBoard')} />
                <NextButton value={'다음'} onPress={() => navigation.navigate('onboarding-complete')} />
            </ButtonContainer>
        </Container>
    )
 
}

export default AddKeyword;