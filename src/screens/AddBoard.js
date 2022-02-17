import styled from "styled-components/native";
import { Text } from "react-native";
import Header from "../components/addBoard/Header";
import { color } from "../themes/colors";
import Select from "../components/addBoard/Select";

const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    background-color: ${color.white};
`;


const AddBoard = ({navigation}) => (
    <Container>
        <Header navigation={navigation}/>
        <Select />
    </Container>
)

export default AddBoard;