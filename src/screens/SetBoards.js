import React, { useState } from 'react';
import styled from 'styled-components/native';
import { color } from '../common/colors';
import DraggableFlatList from 'react-native-draggable-flatlist';
import Item from '../components/board/BoardItem';


const Container = styled.View`
    flex-direction: column;
    padding: 12px 0px;
    justify-content: flex-start;
    align-items: stretch;
    background-color: ${color.white};
    flex: 1;
`;

const data = [
    { id: 1, name: '이화여자대학교 컴퓨터공학과' },
    { id: 2, name: '서강대학교 컴퓨터공학과' },
    { id: 3, name: '연세대학교 컴퓨터공학과' },
    { id: 4, name: '이화여자대학교 엘텍공과대학' },
    { id: 5, name: '이화여자대학교 컴퓨터공학과' },
    { id: 6, name: '서강대학교 컴퓨터공학과' },
    { id: 7, name: '연세대학교 컴퓨터공학과' },
    { id: 8, name: '이화여자대학교 엘텍공과대학' },
    { id: 9, name: '이화여자대학교 컴퓨터공학과' },
    { id: 10, name: '서강대학교 컴퓨터공학과' },
    { id: 11, name: '연세대학교 컴퓨터공학과' },
    { id: 12, name: '이화여자대학교 엘텍공과대학' },
    { id: 13, name: '이화여자대학교 컴퓨터공학과' },
    { id: 14, name: '서강대학교 컴퓨터공학과' },
    { id: 15, name: '연세대학교 컴퓨터공학과' },
    { id: 16, name: '이화여자대학교 엘텍공과대학' },
]


const SetBoards = () => {

    const [boards, setBoards] = useState(data);

    const renderItem = ({ item, index, drag, isActive }) => {
        return (
            <Item name={item.name} onLongPress={drag} isActive={isActive} />
        );
    };

    return (
        <Container>
            <DraggableFlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={(board) => board.id}
                data={boards}
                onDragEnd={({ data }) => setBoards(data)}
                renderItem={renderItem}
                containerStyle={{ backgroundColor: color.primaryLight }}
            />
        </Container>

    )
}

export default SetBoards;