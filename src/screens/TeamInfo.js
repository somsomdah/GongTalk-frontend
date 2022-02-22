import { ScrollView } from "react-native";
import styled from "styled-components/native";
import Header from '../components/noticeList/Header'
import { color } from "../common/colors";
import { image } from "../common/images";
import Content from "../components/teamInfo/Content";

const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    background-color: ${color.white};
`;


const TeamInfo = ({navigation}) => {
    return (
        <Container>
            <Header navigation={navigation} value={'팀 소개'} />
            <Content />
        </Container>

    )
}

export default TeamInfo



