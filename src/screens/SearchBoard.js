import Item from '../components/searchBoard/Item';
import SearchBox from '../components/searchBoard/SearchBox';
import styled from 'styled-components/native';
import { color } from '../common/colors';
import { FlatList } from 'react-native';
import { useState, useMemo } from 'react';


const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    background-color: ${color.white};
    padding: 24px 20px;
`;

const boardData = [
    { id: 1, name: '홈', school: { id: 1, name: '이화여자대학교' } },
    { id: 2, name: '컴퓨터공학전공', school: { id: 1, name: '이화여자대학교' } },
    { id: 4, name: '조형예술대학', school: { id: 1, name: '이화여자대학교' } },
    { id: 7, name: '중어중문학과', school: { id: 2, name: '서강대학교' } },
    { id: 8, name: '경영학과', school: { id: 2, name: '서강대학교' } },
];

const SearchBoard = ({ navigation, route }) => {

    const { school } = route.params;

    const [inputValue, setInputValue] = useState('');
    const allBoards = boardData.filter(board => board.school.id === school.id)
    const matchedBoardList = useMemo(() => allBoards.filter(board => board.name.includes(inputValue)), [inputValue]);

    return (
            <Container>
                <SearchBox
                    navigation={navigation}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={matchedBoardList}
                    style={{ paddingVertical: 16 }}
                    renderItem={({ item }) =>
                        <Item
                            key={item.id}
                            board={item}
                            navigation={navigation}
                        />
                    }
                />
            </Container>
    );
}

export default SearchBoard;