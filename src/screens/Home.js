import React, { useState } from 'react';
import Header from '../components/home/Header';
import KeywordBox from '../components/home/KeywordBox';
import Roundup from '../components/home/Roundup'
import Board from '../components/home/Board';
import styled from 'styled-components/native';
import { color } from '../common/colors';
import { getCommonKeywordSubscribes } from '../api/user';
import { useQuery } from 'react-query';


const Container = styled.View`
    background-color: ${color.white};
`;

const InnerContainer = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { paddingBottom: 30 },
})``;

const BodyContainer = styled.View`
    padding: 24px 20px;
    flex: 1;
`;



const Home = ({ navigation }) => {

    const [isOnTop, setIsOnTop] = useState(true);
    const [keywordList, setKeywordList] = useState([])

    useQuery(['common_keywords', { type: "KEYWORD_COMMON" }],
        () => getCommonKeywordSubscribes(), {
        onSuccess: (data) => {
            setKeywordList(data.map((subscribe) => subscribe.keyword))
        }
    })

    return (
        <Container>
            <Header navigation={navigation} isOnTop={isOnTop} />
            <InnerContainer onScroll={({ nativeEvent }) => { nativeEvent.contentOffset.y < 5 ? setIsOnTop(true) : setIsOnTop(false) }}>
                <KeywordBox navigation={navigation} keywordList={keywordList} />
                <BodyContainer >
                    <Roundup navigation={navigation} />
                    <Board navigation={navigation} />
                </BodyContainer>
            </InnerContainer>

        </Container>
    )
};

export default Home;
