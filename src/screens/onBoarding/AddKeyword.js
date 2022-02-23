import styled from "styled-components/native";
import { color } from "../../common/colors";
import { useState } from "react";
import { Header, Input, Title, Recommend, Added } from "../AddKeyword";
import { NextButton } from "./Start";
import { SemiHeadline1, SmallBody1 } from "../../components/_common/Typography";

const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    background-color: ${color.white};
`;

const UpperContainer = styled.View`
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    padding: 20px 24px;
    border-bottom-color: ${color.gray3};
    border-bottom-width: 0.5px;
`

const LowerContainer = styled.View`
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    padding: 20px 24px;
`

const AddKeyword = ({ navigation }) => {
    const keywordList = [
        { id: 1, content: '장학' }, { id: 2, content: '인턴' }, { id: 3, content: '교육교육교육' },
        { id: 21, content: '장학' }, { id: 22, content: '인턴인턴인턴인턴' }, { id: 23, content: '교육' },
        { id: 31, content: '장학' }, { id: 32, content: '인턴' }, { id: 33, content: '교육' }
    ]

    const [myKeywords, setMyKeywords] = useState([])



    return (
        <Container>
            <Header navigation={navigation} value={'키워드 설정'} />
            <UpperContainer>
                <SemiHeadline1>{'관심있는 학교를 추가하세요.'}</SemiHeadline1>
                <SmallBody1 style={{marginBottom: 25}}>
                    {'선택한 학교의 공지사항을 모두 확인할 수 있어요. 학교, 전공 (or  기관)을 추가할 수 있습니다. 최소 1개 이상 선택해주세요.'}
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
            <NextButton value={'다음 '} onPress={() => navigation.navigate()} />
        </Container>
    );

}

export default AddKeyword;