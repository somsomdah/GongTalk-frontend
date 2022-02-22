import { ScrollView } from "react-native";
import styled from "styled-components/native";
import Header from '../components/settings/Header';
import AlarmSettings from '../components/settings/AlarmSettings'
import Etc from "../components/settings/Etc";
import { color } from "../common/colors";


const Container = styled.View`
    background-color: ${color.white};
    flex: 1;
    align-items: stretch;
`;

const BodyContainer = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { paddingBottom: 30 },
})``;


const Settings = ({navigation}) => {
    return(
        <Container>
            <Header value={'설정'} />
            <AlarmSettings />
            <Etc navigation={navigation}/>
        </Container>
    );
}

export default Settings;