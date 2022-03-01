import InputBoxButton from "../components/searchList/inputBoxButton";
import Item from "../components/postList/Item";
import React, { useState } from 'react';
import { FlatList, Pressable } from 'react-native';
import styled from 'styled-components/native';
import { color } from '../common/colors'
import { postList } from '../common/data';

const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    background-color: ${color.white};
`;


const ItemContainer = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    padding: 0px 24px;
`;


const SearchList = ({ route, navigation }) => {

    const { searchValue } = route.params

    return (
        <Container>
            <InputBoxButton
                navigation={navigation}
                value={searchValue}
            />
            <ItemContainer>
                <FlatList showsVerticalScrollIndicator={false}
                    data={postList}
                    renderItem={({ item }) => (
                        <Pressable hitSlop={20} onPress={() => navigation.navigate('postDetail', { post: item }
                        )}>
                            <Item key={item.id} post={item} />
                        </Pressable>
                    )}
                />
            </ItemContainer>
        </Container>
    )
}

export default SearchList;