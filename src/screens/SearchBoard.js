// import InputBox from '../components/search/InputBox'
import Item from '../components/searchBoard/Item';
import SearchBox from '../components/searchBoard/SearchBox';
import styled from 'styled-components/native';
import { color } from '../../common/colors';
import { image } from '../../common/images';
import { FlatList } from 'react-native';
import { useState } from 'react';


const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    background-color: ${color.white};
`;

const boardData = []

const SearchBoard = ({ navigation }) => {
    const [inputValue, setInputValue] = useState(searchValue)
    const [boardList, setBoardList] = useState(boardData)
    return (
        <Container>
            <SearchBox
                navigation={navigation}
                inputValue={inputValue}
                setInputValue={setInputValue}
                boardList={boardList}
                setBoardList={setBoardList}
            />
            <FlatList
                data={boardList}
                renderItem={({ item }) => <Item key={item.id} value={item} navigation={navigation} />}
            />
        </Container>
    );
}

export default SearchBoard;