import React, { useState } from 'react';
import Header from '../components/home/Header';
import KeywordBox from '../components/home/KeywordBox';
import Roundup from '../components/home/Roundup'
import Board from '../components/home/Board';
import styled from 'styled-components/native';
import { color } from '../common/colors';
import { getCommonKeywordSubscribes } from 'api/user/subscribes/get';
import { getUserBoards } from 'api/user/user';
import { useQuery } from 'react-query';


const Container = styled.View`
    background-color: ${color.white};
    flex: 1;
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
    const [boardList, setBoardList] = useState([])

    useQuery(['subscribes', 'keyword_common'],
        getCommonKeywordSubscribes, {
        onSuccess: (data) => {
            setKeywordList(data.map((subscribe) => subscribe.keyword))
        }
    })

    useQuery('boards_user', getUserBoards,
        {
            onSuccess: (data) => setBoardList(data)
        }
    )

    return (
        <Container>
            <Header navigation={navigation} isOnTop={isOnTop} />
            <InnerContainer onScroll={({ nativeEvent }) => { nativeEvent.contentOffset.y < 5 ? setIsOnTop(true) : setIsOnTop(false) }}>
                <KeywordBox navigation={navigation} keywordList={keywordList} />
                <BodyContainer >
                    <Roundup navigation={navigation} />
                    {
                        boardList.map((board) =>
                            <Board navigation={navigation} board={board} key={board.id} />
                        )
                    }
                </BodyContainer>
            </InnerContainer>

        </Container>
    )
};

export default Home;
