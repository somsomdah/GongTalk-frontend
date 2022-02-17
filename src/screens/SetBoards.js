import React, { useState } from 'react';
import styled from 'styled-components/native';
import { color } from '../themes/colors';
import DraggableFlatList from 'react-native-draggable-flatlist';
import Item from '../components/board/Item';


const Container = styled.View`
    flex-direction: column;
    padding: 10px 0px;
    align-items: stretch;
    background-color: ${color.white};
    flex: 1;
`;

const data = [
    { id: 1, name: '이화여자대학교 컴퓨터공학과' },
    { id: 2, name: '서강대학교 컴퓨터공학과' },
    { id: 3, name: '연세대학교 컴퓨터공학과' },
    { id: 4, name: '이화여자대학교 엘텍공과대학' },
]


const SetBoards = ( ) => {

    const [boards, setBoards] = useState(data);

    const renderItem = ({ item, index, drag, isActive }) => {
        return (
            <Item name={item.name} onLongPress={drag} isActive={isActive} />
        );
    };

    return (
        <Container>
            <DraggableFlatList
                keyExtractor={(board) => board.id}
                data={boards}
                onDragEnd={({ data }) => setBoards(data)}
                renderItem={renderItem} />
        </Container>

    )
}

export default SetBoards;