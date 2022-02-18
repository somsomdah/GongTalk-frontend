import styled from "styled-components/native";
import { Text } from "react-native";
import Header from "../components/addBoard/Header";
import { color } from "../common/colors";
import Select from "../components/addBoard/Select";
import SelectModal from "../components/addBoard/SelectModal";
import { useState } from "react";

const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    background-color: ${color.white};
`;



const AddBoard = ({ navigation }) => {

    const data = [
        { id: 1, name: '이화여자대학교' },
        { id: 2, name: '서강대학교' },
        { id: 3, name: '연세대학교' },
        { id: 4, name: '홍익대학교' },
    ]

    const [selectedSchool, setSelectedSchool] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const _select = school => {
        setSelectedSchool(school);
        setModalVisible(false);
    }

    return (
        <Container>
            <Header navigation={navigation} />
            <Select
                onDropdownPress={() => setModalVisible(true)}
                selectedSchool={selectedSchool} />
            <SelectModal
                isVisible={modalVisible}
                setIsVisible={setModalVisible}
                schoolList={data}
                selectedSchool={selectedSchool}
                select={_select}
            />
        </Container>
    );

}

export default AddBoard;