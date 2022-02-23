import React, { useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { color } from '../common/colors'
import { image } from '../common/images';
import Header  from '../components/noticeList/Header';
import TitleBox from '../components/noticeDetail/TitleBox';
import ContentBox from '../components/noticeDetail/ContentBox';


const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    background-color: ${color.white};
`;


const NoticeDetail = ({ route, navigation }) => {

    const { notice } = route.params;

    return (
        <Container>
            <Header value={'공지사항'} navigation={navigation}/>
            <TitleBox notice={notice} />
            <ContentBox notice={notice}/>
        </Container>
    )
}

export default NoticeDetail;