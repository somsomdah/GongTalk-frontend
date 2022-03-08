import styled from 'styled-components/native';
import { color } from '../common/colors'
import { image } from '../common/images';
import Page from '../components/notice/Page';
import Header from '../components/notice/Header';

const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    background-color: ${color.white};
`;

const Notice = ({navigation }) => {

    return (
        <Container>
            <Header value={'공지사항'} navigation={navigation} />
            <Page />
        </Container>
    )
}

export default Notice;