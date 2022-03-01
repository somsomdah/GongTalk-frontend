import React, { useState } from 'react';
import styled from 'styled-components/native';
import Item from '../components/board/KeywordItem';
import { SemiHeadline3, SmallBody1 } from '../components/_common/Typography';
import { color } from '../common/colors';
import { FlatList } from 'react-native';
import { image } from '../common/images';
import AlarmTypeModal from '../components/board/AlarmTypeModal';

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

const subscribeDataList = [
    {
        id: 1, type: 'BOARD', board: { id: 1, name: '컴퓨터공학과', school: { id: 1, name: '이화여자대학교', image: image.school.ewha } }, keywords: [
            { id: 1, content: '부트캠프' },
            { id: 2, content: '창업' },
            { id: 3, content: '취업' },
            { id: 4, content: '인턴' },
            { id: 5, content: '해외' },
        ]
    },
    {
        id: 2, type: 'BKEYWORD', board: { id: 11, name: '컴퓨터공학과', school: { id: 2, name: '서강대학교', image: image.school.seogang } }, keywords: [
            { id: 11, content: '세미나' },
            { id: 12, content: '교육' },
            { id: 13, content: '해커톤' },
        ]
    },
    {
        id: 3, type: 'CKEYWORD', keywords: [
            { id: 14, content: '대회' },
            { id: 15, content: '수강' },
        ]
    },
    {
        id: 4, type: 'BKEYWORD', board: { id: 11, name: '컴퓨터공학과', school: { id: 2, name: '서강대학교', image: image.school.seogang } }, keywords: [
            { id: 11, content: '세미나' },
            { id: 12, content: '교육' },
            { id: 13, content: '해커톤' },
        ]
    },
    {
        id: 5, type: 'CKEYWORD', keywords: [
            { id: 14, content: '대회' },
            { id: 15, content: '수강' },
        ]
    },
    {
        id: 6, type: 'BKEYWORD', board: { id: 11, name: '컴퓨터공학과', school: { id: 2, name: '서강대학교', image: image.school.seogang } }, keywords: [
            { id: 11, content: '세미나' },
            { id: 12, content: '교육' },
            { id: 13, content: '해커톤' },
        ]
    },
    {
        id: 7, type: 'CKEYWORD', keywords: [
            { id: 14, content: '대회' },
            { id: 15, content: '수강' },
        ]
    }

];

const SetKeywords = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Container>

            <UpperContainer>
                <SemiHeadline3>
                    {'전체 키워드 알림'}
                </SemiHeadline3>
                <SmallBody1>
                    {'전체 키워드를 수정, 저장합니다.'}
                </SmallBody1>
                <Space />

                <Item subscribe={subscribeDataList.filter(subscribe => subscribe.type === 'CKEYWORD')[0]} navigation={navigation} />
            </UpperContainer>

            <LowerContainer>
                <SemiHeadline3>
                    {'게시판 키워드 알림'}
                </SemiHeadline3>
                <SmallBody1>
                    {'게시판과 각 게시판에 설정된 키워드의 알림을 설정합니다. (전체 알림을 받지 않더라도 설정한 키워드의 알림은 받습니다.) '}
                </SmallBody1>
                <Space />

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={subscribeDataList.filter(subscribe => subscribe.type !== 'CKEYWORD')}
                    renderItem={({ item }) =>
                        <Item
                            key={item.id}
                            subscribe={item}
                            navigation={navigation}
                            setModalVisible={setModalVisible}
                        />}
                />
            </LowerContainer>

            <AlarmTypeModal visible={modalVisible} setVisible={setModalVisible} />

        </Container>
    )
}

export default SetKeywords;