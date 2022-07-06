import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/home/Header';
import KeywordBox from '../components/home/KeywordBox';
import Roundup from '../components/home/Roundup'
import Board from '../components/home/Board';
import styled from 'styled-components/native';
import { color } from '../common/colors';
import { getCommonKeywordSubscribes } from 'api/user/subscribes/get';
import { getUserBoards } from 'api/user/user';
import { useQuery } from 'react-query';
import registerPushNotification from "../permissions/notification";
import * as Notifications from 'expo-notifications';
import { triggerPushNotification } from '../utils/notification';
import { getSettings } from '../api/user/settings';



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

    useEffect(registerPushNotification, []);

    useQuery('settings', getSettings, {
        onSuccess: (data) => {
            Notifications.setNotificationHandler({
                handleNotification: async () => ({
                    shouldShowAlert: data.push,
                    shouldPlaySound: data.sound,
                    shouldSetBadge: true,
                }),
            });
        }
    })


    const lastNotificationResponse =
        Notifications.useLastNotificationResponse();

    useEffect(() => {
        if (lastNotificationResponse) {
            console.log(lastNotificationResponse)
        }
    }, [lastNotificationResponse]);

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
