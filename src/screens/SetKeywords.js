import React, { useState } from 'react';
import styled from 'styled-components/native';
import Item from '../components/board/KeywordItem';
import { SemiHeadline3, SmallBody1 } from '../components/_common/Typography';
import { color } from '../common/colors';
import { FlatList } from 'react-native';
import { image } from '../common/images';
import AlarmTypeModal from '../components/board/AlarmTypeModal';
import { ScrollView } from 'react-native';
import { useQuery } from 'react-query'
import { getCommonKeywordSubscribes, getBoardKeywordSubscribes, getUserBoards, getBoardSubscribes } from '../api/user';

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
    padding: 20px 24px 32px 24px;
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

const Space = styled.View`
    height: 20px;
`;


const SetKeywords = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [commonKeywords, setCommonKeywords] = useState([])
    const [boardKeywordsList, setBoardKeywordsList] = useState([])

    useQuery(['keywords_common'],
        getCommonKeywordSubscribes, {
        onSuccess: (data) => {
            setCommonKeywords(data.map((subscribe) => subscribe.keyword))
        }
    })

    useQuery(['boards_user'],
        getUserBoards,
        {
            onSuccess: async (data) => {
                const tmp = []
                for (board of data) {
                    tmp.push({
                        board: board,
                        keywords: (await getBoardKeywordSubscribes(board.id)).map((subscribe) => subscribe.keyword),
                        isBoardAlarm: Boolean(await getBoardSubscribes(board.id))
                    })
                }
                setBoardKeywordsList(tmp);
            },
        }
    )


    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                <UpperContainer>
                    <SemiHeadline3>
                        {'전체 키워드 알림'}
                    </SemiHeadline3>
                    <SmallBody1>
                        {'전체 키워드를 수정, 저장합니다.'}
                    </SmallBody1>
                    <Space />

                    {<Item
                        keywordList={commonKeywords}
                        isBoardAlarm={false}
                        navigation={navigation}
                        setModalVisible={setModalVisible}
                    />}
                </UpperContainer>

                <LowerContainer>
                    <SemiHeadline3>
                        {'게시판 키워드 알림'}
                    </SemiHeadline3>
                    <SmallBody1>
                        {'게시판과 각 게시판에 설정된 키워드의 알림을 설정합니다. (전체 알림을 받지 않더라도 설정한 키워드의 알림은 받습니다.) '}
                    </SmallBody1>
                    <Space />
                    {boardKeywordsList.map
                        (
                            (item) =>
                                <Item
                                    key={item.board.id}
                                    board={item.board}
                                    isBoardAlarm={item.isBoardAlarm}
                                    keywordList={item.keywords}
                                    setModalVisible={setModalVisible}
                                />
                        )
                    }
                </LowerContainer>

                <AlarmTypeModal visible={modalVisible} setVisible={setModalVisible} />
            </ScrollView>
        </Container>
    )
}

export default SetKeywords;