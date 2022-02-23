import InputBox from "../components/search/InputBox";
import Item from "../components/postList/Item";
import { NavigationHelpersContext } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Pressable } from 'react-native';
import styled from 'styled-components/native';
import { color } from '../common/colors'
import { image } from '../common/images';
import Header from '../components/postList/Header';
import { postList } from '../common/data';

const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    background-color: ${color.white};
`;

const SearchBoxContainer = styled.View`
    background-color: ${color.white};
    padding: 26px 24px 10px 24px;
    align-items: center;
`;

const ItemContainer = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    padding: 0px 24px;
`;



const SearchList = ({ route, navigation }) => {

    const { type, value, searchValue } = route.params
    const [items, setItems] = useState(postList)
    const [inputValue, setInputValue] = useState(searchValue)


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
            <SearchBoxContainer>
                <InputBox
                    navigation={navigation}
                    onSearchButtonPress={() => navigation.navigate('searchList')}
                    autoFocus={false}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                />
            </SearchBoxContainer>
            <ItemContainer>
                <FlatList showsVerticalScrollIndicator={false}
                    data={items}
                    renderItem={({ item }) => (
                        <Pressable hitSlop={20} onPress={() => navigation.navigate('postDetail',
                            {
                                post: item, headerValue: value === null ? `${item.board.school.name} ${item.board.name}` : value
                            }
                        )}>
                            <Item key={item.id} post={item} toggleStar={_toggleStar} />
                        </Pressable>
                    )}
                />
            </ItemContainer>
        </Container>
    )
}

export default SearchList;