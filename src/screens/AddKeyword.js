import styled from "styled-components/native";
import { color } from "../common/colors";
import { useState } from "react";
import Header from "../components/addKeyword/Header";
import Input from '../components/addKeyword/Input'
import Title from '../components/addKeyword/Title'
import Recommend from '../components/addKeyword/Recommend'
import Added from "../components/addKeyword/Added";
import { ScrollView } from "react-native-gesture-handler";

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
    flex: 1;
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
                <Title value={'키워드 입력하기'} />
                <Input keywordList={myKeywords} setKeywordList={setMyKeywords} />
                <Title value={`추천 키워드`} />
                <Recommend keywordList={keywordList} myKeywordList={myKeywords} setMyKeywordList={setMyKeywords} />
            </UpperContainer>
            <LowerContainer>
                <Title value={`내 키워드`} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Added keywordList={myKeywords} setKeywordList={setMyKeywords} />
                </ScrollView>
            </LowerContainer>
        </Container>
    );

}

export default AddKeyword;

export { Header, Input, Title, Recommend, Added, Container, UpperContainer, LowerContainer }