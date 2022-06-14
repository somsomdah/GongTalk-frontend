import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/native';
import { color } from '../common/colors';
import InputBox from '../components/search/InputBox'
import KeywordBox from '../components/search/KeywordBox';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Container = styled.View`
    background-color: ${color.white};
    padding: 26px 24px;
    flex: 1;
    align-items: stretch;
`;

const Search = ({ navigation, route }) => {


    const { type, value, searchValue } = route.params;
    const [inputValue, setInputValue] = useState(searchValue);

    const [recentSearchKeywords, setRecentSearchKeywords] = useState([]);

    useEffect(async () => {
        const recentKeywordsFromStorage = await AsyncStorage.getItem('recentSearchValues') || '[]';
        const recentKeywords = JSON.parse(recentKeywordsFromStorage);
        setRecentSearchKeywords(recentKeywords.map((keyword, idx) => ({ id: idx, content: keyword })));
    }, [inputValue])


    const recommendedSearchKeywords = [
        { id: 1, content: '인턴' },
        { id: 2, content: '채용' },
        { id: 3, content: '취업' },
        { id: 4, content: '봉사' },
        { id: 5, content: '공모전' },
        { id: 6, content: '대외활동' },
        { id: 7, content: '장학' },
        { id: 8, content: '해외' },
    ];

    const _search = async (value) => {
        const newValue = value || inputValue;
        setInputValue(newValue);
        const unique = recentSearchKeywords.map(keyword => keyword.content).filter(word => word !== newValue);
        await AsyncStorage.setItem('recentSearchValues', JSON.stringify([newValue, ...unique.slice(0, 9)]));
        navigation.navigate('searchList', { type: type, value: value, searchValue: newValue });
    }

    return (
        <Container>
            <InputBox
                placeholder={'키워드 검색하기'}
                navigation={navigation}
                onSearchButtonPress={() => _search()}
                inputValue={inputValue}
                setInputValue={setInputValue}
            />
            <KeywordBox
                title={'최근 검색어'}
                keywordList={recentSearchKeywords}
                search={_search}
            />
            <KeywordBox
                title='추천 검색어'
                keywordList={recommendedSearchKeywords}
                search={_search}
            />

        </Container>
    );
}

export default Search;