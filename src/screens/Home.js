import React  from 'react';
import SearchBox from '../components/home/SearchBox';
import KeywordBox from '../components/home/KeywordBox';
import Roundup from '../components/home/Roundup'
import Board from '../components/home/Board';
import styled from 'styled-components/native';
import {color} from '../common/colors';


const Container = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false
})`
    background-color: ${color.white};
    flex: 1;
`;



const Home = ({navigation}) => {
    return (
        <Container>
            <SearchBox navigation={navigation}/>
            <KeywordBox keywordList={['#인턴', '#대외활동', '#해외', '#부트캠프', '#동아리']} />
            <Roundup />
            <Board />
        </Container>
    )
};

export default Home;
