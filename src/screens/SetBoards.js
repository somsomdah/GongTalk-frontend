import React, { useState } from 'react';
import styled from 'styled-components/native';
import { color } from '../common/colors';
import DraggableFlatList from 'react-native-draggable-flatlist';
import Item from '../components/board/BoardItem';
import { getUserBoards, updateUserBoardOrder } from 'api/user'
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useEffect } from 'react';


const Container = styled.View`
    flex-direction: column;
    padding: 12px 0px;
    justify-content: flex-start;
    align-items: stretch;
    background-color: ${color.white};
    flex: 1;
`;


const SetBoards = () => {

    const [boards, setBoards] = useState([]);
    const queryClient = useQueryClient();

    useQuery('user_boards', getUserBoards, {
        onSuccess: (data) => {
            setBoards(data)
        }
    })

    updateUserBoardOrderMutation = useMutation(() => {
        for (let i = 0; i < boards.length; i++) {
            updateUserBoardOrder(boards[i].id, i)
        }
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries('user_boards')
        }
    }
    )

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
                onDragEnd={({ data }) => {
                    setBoards(data)
                    updateUserBoardOrderMutation.mutate()
                }}
                renderItem={renderItem}
                containerStyle={{ backgroundColor: color.primaryLight }}
            />
        </Container>

    )
}

export default SetBoards;