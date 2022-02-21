import { NavigationHelpersContext } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Pressable } from 'react-native';
import styled from 'styled-components/native';
import { color } from '../common/colors'
import { image } from '../common/images';
import Header from '../components/postList/Header';
import Item from '../components/postList/Item';
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



const PostList = ({ route, navigation }) => {

    const { headerValue } = route.params;

    const [items, setItems] = useState(postList)

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
            <Header value={headerValue} navigation={navigation} />
            <ItemContainer>
                <FlatList showsVerticalScrollIndicator={false}
                    data={items}
                    renderItem={({ item }) => (
                        <Pressable hitSlop={20} onPress={() => navigation.navigate('postDetail', {headerValue: headerValue, post: item})}>
                            <Item key={item.id} post={item} toggleStar={_toggleStar} />
                        </Pressable>
                    )}
                />
            </ItemContainer>
        </Container>
    )
}

export default PostList;