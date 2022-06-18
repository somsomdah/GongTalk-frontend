import Item from '../../components/searchBoard/ItemForOnboarding';
import SearchBox from '../../components/searchBoard/SearchBox';
import styled from 'styled-components/native';
import { color } from '../../common/colors';
import { FlatList } from 'react-native';
import { useState, useMemo, useEffect } from 'react';
import * as Hangul from 'hangul-js';
import { useQuery } from 'react-query';
import { getBoardsBySchoolId } from 'api/boards';
import Loading from '../../components/_common/Loading';
import AlertModal from 'components/_common/AlertModal'

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

    const { school, boardList } = route.params;

    const [boardListData, setBoardListData] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [alertModalVisible, setAlertModalVisible] = useState(false);

    const getBoardListQuery = useQuery([`boards__school_${school.id}`],
        () => getBoardsBySchoolId(school.id), {
        onSuccess: (data) => {
            setBoardListData(data)
        }
    })

    const matchedBoardList = useMemo(() => boardListData.filter(board => {
        return disassembleString(board.name).includes(disassembleString(inputValue))
    }), [boardListData, inputValue]);

    return (
        <Container>
            <SearchBox
                navigation={navigation}
                inputValue={inputValue}
                setInputValue={setInputValue}
            />
            {getBoardListQuery.isSuccess ?
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={matchedBoardList}
                    style={{ paddingVertical: 16 }}
                    renderItem={({ item }) =>
                        <Item
                            key={item.id}
                            board={item}
                            navigation={navigation}
                            setAlertModalVisible={setAlertModalVisible}
                        />
                    }
                />
                :
                <Loading />}

            <AlertModal
                isVisible={alertModalVisible}
                setIsVisible={setAlertModalVisible}
                value={'동일한 게시판을 여러 번 추가할 수 없습니다.'}
            />
        </Container>
    )

}

export default SearchBoard;