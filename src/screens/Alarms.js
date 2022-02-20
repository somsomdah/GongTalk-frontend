import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { color } from '../common/colors'
import { image } from '../common/images';
import Item from '../components/alarm/AlarmItem';


const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    background-color: ${color.white};
`;

const postList = [
    {
        id: 1,
        title: '제목제목제목 제목제목제목 제목제목제목 제목제목제목 제목제목제목 제목제목제목',
        content: '내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다. 내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다. 내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다. 내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다.',
        writer: '산학협력관',
        date: '2022.01.04',
        board: { name: '컴퓨터공학과', school: { id: 1, name: '이화여자대학교', image: image.school.ewha } }
    },
    {
        id: 2,
        title: '제목제목제목 제목제목제목 제목제목제목 제목제목제목 제목제목제목 제목제목제목',
        content: '내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다. 내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다.',
        writer: '산학협력관',
        date: '2022.01.04',
        board: { name: '컴퓨터공학과', school: { id: 1, name: '이화여자대학교', image: image.school.ewha } }
    },
    {
        id: 3,
        title: '제목제목제목 제목제목제목 제목제목제목',
        content: '내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다. 내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다. 내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다. 내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다.',
        name: '컴퓨터공학과',
        writer: '산학협력관',
        date: '2022.01.04',
        board: { name: '컴퓨터공학과', school: { id: 1, name: '이화여자대학교', image: image.school.ewha } }
    },
    {
        id: 4,
        title: '제목제목제목 제목제목제목 제목제목제목',
        content: '내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다. 내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다. 내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다. 내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다.',
        name: '컴퓨터공학과',
        writer: '산학협력관',
        date: '2022.01.04',
        board: { name: '컴퓨터공학과', school: { id: 1, name: '이화여자대학교', image: image.school.ewha } }
    },
    {
        id: 5,
        title: '제목제목제목 제목제목제목 제목제목제목 제목제목제목 제목제목제목 제목제목제목',
        content: '내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다. 내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다.',
        writer: '산학협력관',
        date: '2022.01.04',
        board: { name: '컴퓨터공학과', school: { id: 3, name: '홍익대학교', image: image.school.hongik } }
    },
    {
        id: 6,
        title: '제목제목제목 제목제목제목 제목제목제목',
        content: '내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다. 내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다.',
        name: '컴퓨터공학과',
        writer: '산학협력관',
        date: '2022.01.04',
        board: { name: '컴퓨터공학과', school: { id: 1, name: '이화여자대학교', image: image.school.ewha } }
    },
    {
        id: 7,
        title: '제목제목제목 제목제목제목 제목제목제목 제목제목제목 제목제목제목 제목제목제목',
        content: '내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다. 내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다.',
        writer: '산학협력관',
        date: '2022.01.04',
        board: { name: '컴퓨터공학과', school: { id: 2, name: '서강대학교', image: image.school.seogang } }
    },
    {
        id: 8,
        title: '제목제목제목 제목제목제목 제목제목제목 제목제목제목 제목제목제목 제목제목제목',
        content: '내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다. 내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다.',
        name: '컴퓨터공학과',
        writer: '산학협력관',
        date: '2022.01.04',
        board: { name: '컴퓨터공학과', school: { id: 1, name: '이화여자대학교', image: image.school.ewha } }
    },
    {
        id: 9,
        title: '제목제목제목 제목제목제목 제목제목제목 제목제목제목 제목제목제목 제목제목제목',
        content: '내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다. 내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다.',
        name: '컴퓨터공학과',
        writer: '산학협력관',
        date: '2022.01.04',
        board: { name: '컴퓨터공학과', school: { id: 1, name: '이화여자대학교', image: image.school.ewha } }
    },
    {
        id: 10,
        title: '제목제목제목 제목제목제목 제목제목제목',
        content: '내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다. 내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다.',
        name: '컴퓨터공학과',
        writer: '산학협력관',
        date: '2022.01.04',
        board: { name: '컴퓨터공학과', school: { id: 1, name: '이화여자대학교', image: image.school.ewha } }
    },
    {
        id: 11,
        title: '제목제목제목 제목제목제목 제목제목제목',
        content: '내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다. 내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다.',
        name: '컴퓨터공학과',
        writer: '산학협력관',
        date: '2022.01.04',
        board: { name: '컴퓨터공학과', school: { id: 1, name: '이화여자대학교', image: image.school.ewha } }
    },
    {
        id: 12,
        title: '제목제목제목 제목제목제목 제목제목제목 제목제목제목 제목제목제목 제목제목제목',
        content: '내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다. 내용 내용내용 내용 내용냉냉냉냉냉냉 내용내용 내용입니다.',
        writer: '산학협력관',
        date: '2022.01.04',
        board: { name: '컴퓨터공학과', school: { id: 3, name: '홍익대학교', image: image.school.hongik } }
    },
]

const Alarms = () => {
    return (
        <Container>
            <FlatList showsVerticalScrollIndicator={false}
                data={postList}
                renderItem={({ item }) => <Item key={item.id} post={item} />}
            />
        </Container>
    )
}

export default Alarms;