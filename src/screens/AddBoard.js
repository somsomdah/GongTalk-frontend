import styled from "styled-components/native";
import Header from "../components/addBoard/Header";
import { color } from "../common/colors";
import Select from "../components/addBoard/Select";
import List from "../components/addBoard/List";
import SelectModal from "../components/addBoard/SelectModal";
import { useState } from "react";
import AlertModal from "../components/_common/AlertModal";

const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    background-color: ${color.white};
`;



const AddBoard = ({ navigation }) => {

    const [selectedSchool, setSelectedSchool] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [alertModalVisible, setAlertModalVisible] = useState(false);

    const _select = school => {
        setSelectedSchool(school);
        setModalVisible(false);
    }

    return (
        <Container>
            <Header navigation={navigation} />

            <Select
                onDropdownPress={() => setModalVisible(true)}
                selectedSchool={selectedSchool}
                navigation={navigation}
                setAlertModalVisible={setAlertModalVisible}
            />

            <List />

            <SelectModal
                isVisible={modalVisible}
                setIsVisible={setModalVisible}
                selectedSchool={selectedSchool}
                select={_select}
            />

            <AlertModal
                isVisible={alertModalVisible}
                setIsVisible={setAlertModalVisible}
                value={'학교를 먼저 선택해주세요.'} />

        </Container>
    );

}

export default AddBoard;
export { Header, Select, List, SelectModal, Container };