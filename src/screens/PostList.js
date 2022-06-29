import React, { useState } from 'react';
import { FlatList, Pressable } from 'react-native';
import styled from 'styled-components/native';
import { color } from '../common/colors'
import Header from '../components/postList/Header';
import Item from '../components/postList/Item';
import { postList } from '../common/data';
import { useQuery } from 'react-query';
import { getPostsByBoardId } from 'api/posts';
import { getPosts } from 'api/user/user';

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

    const { headerValue, boardId } = route.params;
    const [items, setItems] = useState([])

    useQuery(`posts_home__board_${boardId}`, () => {
        if (boardId) {
            return getPostsByBoardId(boardId)
        } else {
            return getPosts()
        }
    }, {
        onSuccess: (data) => setItems(data)
    })

    return (
        <Container>
            <Header value={headerValue} navigation={navigation} />
            <ItemContainer>
                <FlatList showsVerticalScrollIndicator={false}
                    data={items}
                    renderItem={({ item }) => (
                        <Pressable hitSlop={20} onPress={() => navigation.navigate('postDetail', { post: item })}>
                            <Item key={item.id} post={item} />
                        </Pressable>
                    )}
                />
            </ItemContainer>
        </Container>
    )
}

export default PostList;