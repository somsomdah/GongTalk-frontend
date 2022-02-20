import React, { useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { color } from '../common/colors'
import { image } from '../common/images';
import Header from '../components/postDetail/Header';


const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    background-color: ${color.white};
`;


const PostDetail = ({ route, navigation }) => {

    const { post, headerValue } = route.params;

    return (
        <Container>
            <Header value={headerValue} navigation={navigation} />
        </Container>
    )
}

export default PostDetail;