import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { color } from '../common/colors'
import { image } from '../common/images';
import Header from '../components/noticeList/Header';
import Item from '../components/noticeList/Item';
import { postList } from '../common/data';


const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    background-color: ${color.white};
`;

const ItemContainer = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    padding: 0px 24px;
`;



const NoticeList = ({navigation}) => {
    return (
        <Container>
            <Header navigation={navigation}/>
            <ItemContainer>
                <FlatList showsVerticalScrollIndicator={false}
                    data={postList}
                    renderItem={({ item }) => <Item key={item.id} post={item} />}
                />
            </ItemContainer>
        </Container>
    )
}

export default NoticeList;