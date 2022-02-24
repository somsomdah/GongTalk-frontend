import { useState } from "react";
import { NextButton, ReturnButton, ButtonContainer } from "./Start";
import { SemiHeadline1, SmallBody1 } from "../../components/_common/Typography";
import { Header, Select, List, SelectModal, Container } from '../AddBoard'
import styled from "styled-components/native";


const UpperContainer = styled.View`
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    padding: 40px 24px 0px 24px;
    margin-bottom: 5px;
`

const AddBoard = ({ navigation }) => {

    const schoolData = [
        { id: 1, name: '이화여자대학교' },
        { id: 2, name: '서강대학교' },
        { id: 3, name: '연세대학교' },
        { id: 4, name: '홍익대학교' },
    ];

    const boardData = [
        { id: 1, name: '홈', school: { id: 1, name: '이화여자대학교' } },
        { id: 2, name: '컴퓨터공학전공', school: { id: 1, name: '이화여자대학교' } },
        // { id: 4, name: '조형예술대학', school: { id: 1, name: '이화여자대학교' } },
        // { id: 7, name: '중어중문학과', school: { id: 2, name: '서강대학교' } },
        // { id: 8, name: '경영학과', school: { id: 2, name: '서강대학교' } },
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
            <UpperContainer>
                <SemiHeadline1>{'관심있는 학교를 추가하세요.'}</SemiHeadline1>
                <SmallBody1>
                    {'선택한 학교의 공지사항을 모두 확인할 수 있어요. 학교, 전공 (or  기관)을 추가할 수 있습니다. 최소 1개 이상 선택해주세요.'}
                </SmallBody1>
            </UpperContainer>
            <Select
                onDropdownPress={() => setModalVisible(true)}
                selectedSchool={selectedSchool} />
            <List boardList={boardList} setBoardList={setBoardList} />
            <SelectModal
                isVisible={modalVisible}
                setIsVisible={setModalVisible}
                schoolList={schoolData}
                selectedSchool={selectedSchool}
                select={_select}
            />
            <ButtonContainer>
                <ReturnButton value={'이전'} onPress={() => navigation.navigate('onboarding-start')} />
                <NextButton value={'다음'} onPress={() => navigation.navigate('onboarding-addKeyword')} />
            </ButtonContainer>
        </Container>
    )
 
}

export default AddBoard;