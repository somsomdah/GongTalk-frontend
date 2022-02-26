import styled from "styled-components/native";
import Header from "../components/addBoard/Header";
import { color } from "../common/colors";
import Select from "../components/addBoard/Select";
import List from "../components/addBoard/List";
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

    const schoolData = [
        { id: 1, name: '이화여자대학교' },
        { id: 2, name: '서강대학교' },
        { id: 3, name: '연세대학교' },
        { id: 4, name: '홍익대학교' },
    ];

    const boardData = [
        {id: 1, name: '홈', school: {id: 1, name: '이화여자대학교'} },
        {id: 2, name: '컴퓨터공학전공', school: {id: 1, name: '이화여자대학교'} },
        {id: 4, name: '조형예술대학', school: {id: 1, name: '이화여자대학교'} },
        {id: 7, name: '중어중문학과', school: {id: 2, name: '서강대학교'} },
        {id: 8, name: '경영학과', school: {id: 2, name: '서강대학교'} },
    ];

    const [selectedSchool, setSelectedSchool] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [boardList, setBoardList] = useState(boardData);

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
                navigation={navigation}/>
            <List boardList={boardList} setBoardList={setBoardList}/>
            <SelectModal
                isVisible={modalVisible}
                setIsVisible={setModalVisible}
                schoolList={schoolData}
                selectedSchool={selectedSchool}
                select={_select}
            />
        </Container>
    );

}

export default AddBoard;
export {Header, Select, List, SelectModal, Container};