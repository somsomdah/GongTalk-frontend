import React, { useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { color } from '../common/colors'
import { image } from '../common/images';
import Header, {PopOver} from '../components/postDetail/Header';
import TitleBox from '../components/postDetail/TitleBox';
import ContentBox from '../components/postDetail/ContentBox';


const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    background-color: ${color.white};
`;


const PostDetail = ({ route, navigation }) => {

    const { post } = route.params; 
    const headerValue =`${post.board.school.name} ${post.board.name}`

    const [modalVisible, setModalVisible] = useState(false);


    return (
        <Container>
            <Header value={''} navigation={navigation} setModalVisible={setModalVisible}/>
            <PopOver isVisible={modalVisible} setIsVisible={setModalVisible} post={post}/>
            <TitleBox post={post} />
            <ContentBox post={post}/>
        </Container>
    )
}

export default PostDetail;