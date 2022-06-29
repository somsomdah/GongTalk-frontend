import Item from '../components/searchBoard/Item';
import SearchBox from '../components/searchBoard/SearchBox';
import styled from 'styled-components/native';
import { color } from '../common/colors';
import { FlatList } from 'react-native';
import { useState, useMemo, useEffect } from 'react';
import * as Hangul from 'hangul-js';
import { useQuery } from 'react-query';
import { getBoardsBySchoolId } from 'api/boards';
import Loading from '../components/_common/Loading';

const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    background-color: ${color.white};
    padding: 24px 20px;
`;


const disassembleString = (string) => {
    return Hangul.disassemble(string).join();
}

const SearchBoard = ({ navigation, route }) => {

    const { school } = route.params;

    const [boardList, setBoardList] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const getBoardListQuery = useQuery(`boards__school_${school.id}`,
        () => getBoardsBySchoolId(school.id), {
        onSuccess: (data) => {
            setBoardList(data)
        }
    })

    const matchedBoardList = useMemo(() => boardList.filter(board => {
        return disassembleString(board.name).includes(disassembleString(inputValue))
    }), [boardList, inputValue]);

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
    )

}

export default SearchBoard;