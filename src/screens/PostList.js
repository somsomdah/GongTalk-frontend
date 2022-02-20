import { NavigationHelpersContext } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Pressable } from 'react-native';
import styled from 'styled-components/native';
import { color } from '../common/colors'
import { image } from '../common/images';
import Header from '../components/postList/Header';
import Item from '../components/postList/Item';


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



const PostList = ({ route, navigation }) => {

    const { headerValue } = route.params;

    const [items, setItems] = useState(postList)

    const _toggleStar = id => {
        const currentItems = items.map(item => {
            if (item.id === id) {
                item.starred = !item.starred
            }
            return item
        })
        setItems(currentItems);
    };

    return (
        <Container>
            <Header value={headerValue} navigation={navigation} />
            <ItemContainer>
                <FlatList showsVerticalScrollIndicator={false}
                    data={items}
                    renderItem={({ item }) => (
                        <Pressable onPress={() => navigation.navigate('postDetail', {headerValue: headerValue})}>
                            <Item key={item.id} post={item} toggleStar={_toggleStar} starred={item.starred} />
                        </Pressable>
                    )}
                />
            </ItemContainer>
        </Container>
    )
}

export default PostList;


const postList = [
    {
        id: 1,
        writer: '산학협력관',
        date: '2022.01.04',
        title: '공지사항의 제목을 적는 구간입니다. 2줄까지 화면에 노출시킬 수 있습니다. 공지사항의 제목을 적는 구간입니다. 공지사항의 제목을 적는 구간입니다',
        tagList: [{ id: 1, content: '#인턴' }, { id: 2, content: '#학회' }, { id: 3, content: '#교내' }],
        board: { name: '컴퓨터공학과', school: { id: 1, name: '이화여자대학교', image: image.school.ewha } },
        starred: false
    },
    {
        id: 2,
        writer: '산학협력관',
        date: '2022.01.04',
        title: '공지사항의 제목을 적는 구간입니다. 2줄까지 화면에 노출시킬 수 있습니다. 공지사항의 제목을 적는 구간입니다. 공지사항의 제목을 적는 구간입니다',
        tagList: [{ id: 1, content: '#인턴' }, { id: 2, content: '#학회' }, { id: 3, content: '#교내' }],
        starred: false,
        board: { name: '컴퓨터공학과', school: { id: 1, name: '이화여자대학교', image: image.school.ewha } },
        starred: false,
    },
    {
        id: 3,
        writer: '산학협력관',
        date: '2022.01.04',
        title: '공지사항의 제목을 적는 구간입니다. 2줄까지 화면에 노출시킬 수 있습니다. 공지사항의 제목을 적는 구간입니다.',
        tagList: [{ id: 1, content: '#인턴' }, { id: 2, content: '#학회' }, { id: 3, content: '#교내' }],
        starred: false,
        board: { name: '컴퓨터공학과', school: { id: 1, name: '이화여자대학교', image: image.school.ewha } },
        starred: false,

    },

    {
        id: 4,
        title: '제목제목제목 제목제목제목 제목제목제목',
        name: '컴퓨터공학과',
        writer: '산학협력관',
        date: '2022.01.04',
        board: { name: '컴퓨터공학과', school: { id: 1, name: '이화여자대학교', image: image.school.ewha } },
        starred: false,
    },
    {
        id: 5,
        title: '제목제목제목 제목제목제목 제목제목제목 제목제목제목 제목제목제목 제목제목제목',
        writer: '산학협력관',
        date: '2022.01.04',
        board: { name: '컴퓨터공학과', school: { id: 3, name: '홍익대학교', image: image.school.hongik } },
        starred: false,
    },
    {
        id: 6,
        title: '제목제목제목 제목제목제목 제목제목제목',
        name: '컴퓨터공학과',
        writer: '산학협력관',
        date: '2022.01.04',
        board: { name: '컴퓨터공학과', school: { id: 1, name: '이화여자대학교', image: image.school.ewha } },
        starred: false,
    },
    {
        id: 7,
        title: '제목제목제목 제목제목제목 제목제목제목 제목제목제목 제목제목제목 제목제목제목',
        writer: '산학협력관',
        date: '2022.01.04',
        board: { name: '컴퓨터공학과', school: { id: 2, name: '서강대학교', image: image.school.seogang } },
        starred: false,
    },
    {
        id: 8,
        title: '제목제목제목 제목제목제목 제목제목제목 제목제목제목 제목제목제목 제목제목제목',
        name: '컴퓨터공학과',
        writer: '산학협력관',
        date: '2022.01.04',
        board: { name: '컴퓨터공학과', school: { id: 1, name: '이화여자대학교', image: image.school.ewha } }
    },
    {
        id: 9,
        title: '제목제목제목 제목제목제목 제목제목제목 제목제목제목 제목제목제목 제목제목제목',
        name: '컴퓨터공학과',
        writer: '산학협력관',
        date: '2022.01.04',
        board: { name: '컴퓨터공학과', school: { id: 1, name: '이화여자대학교', image: image.school.ewha } },
        starred: false,
    },
    {
        id: 10,
        title: '제목제목제목 제목제목제목 제목제목제목',
        name: '컴퓨터공학과',
        writer: '산학협력관',
        date: '2022.01.04',
        board: { name: '컴퓨터공학과', school: { id: 1, name: '이화여자대학교', image: image.school.ewha } },
        starred: false,
    },
    {
        id: 11,
        title: '제목제목제목 제목제목제목 제목제목제목',
        name: '컴퓨터공학과',
        writer: '산학협력관',
        date: '2022.01.04',
        board: { name: '컴퓨터공학과', school: { id: 1, name: '이화여자대학교', image: image.school.ewha } },
        starred: false,
    },
    {
        id: 12,
        title: '제목제목제목 제목제목제목 제목제목제목 제목제목제목 제목제목제목 제목제목제목',
        writer: '산학협력관',
        date: '2022.01.04',
        board: { name: '컴퓨터공학과', school: { id: 3, name: '홍익대학교', image: image.school.hongik } },
        starred: false,
    },
]