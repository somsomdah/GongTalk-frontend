import styled from "styled-components/native";
import { image } from "../../common/images";
import { color } from "../../common/colors";
import { Pressable } from 'react-native';
import { SemiHeadline3, SemiHeadline4 } from "../_common/Typography";

const Container = styled.View`
    border-bottom-color: ${color.gray2};
    border-bottom-width: 0.5px;
    align-items: stretch;
    flex-direction: column;
    padding: 20px 24px 42px 24px;;
`;

const TitleBox = styled.View`
    margin-bottom: 8px;
    flex-direction: row;
    justify-content: flex-start;
`

const Title = ({ children }) => {
    return (
        <TitleBox>
            <SemiHeadline4>{children}</SemiHeadline4>
        </TitleBox>
    );
}

const DropDownIcon = styled.Image`
    height: 18px;
    width: 18px;
`;

const DropdownBox = styled.View`
    border-radius: 12px;
    align-items: center;
    flex-direction: row;
    border: 1px solid ${color.gray3};
    padding: 16px;
    margin-bottom: 28px;
    justify-content: space-between;
`;

const SearchBox = styled.View`
    border-radius: 12px;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    border: 1px solid ${color.gray3};
    padding: 16px;
`;



const Select = ({ onDropdownPress, selectedSchool, navigation, setAlertModalVisible, boardList, setBoardList }) => {


    const _onPress = () => {

        if (!selectedSchool) {
            setAlertModalVisible(true);
        } else{
            navigation.navigate('searchBoard', { school: selectedSchool, selectedBoardList: boardList, setSelectedBoardList: setBoardList })
        }
    };

    return (
        <Container>
            <Title>학교 선택하기</Title>
            <Pressable onPress={onDropdownPress}>
                <DropdownBox >
                    <SemiHeadline3 style={{color: selectedSchool ? color.black : color.gray6}}>
                        {selectedSchool?.name || '학교 선택하기'}
                    </SemiHeadline3>
                    <DropDownIcon source={image.common.dropdown.primary} />
                </DropdownBox>
            </Pressable>

            <Title>전공/기관 선택하기</Title>
            <Pressable onPress={_onPress} >
                <SearchBox >
                    <SemiHeadline3 style={{ color: color.gray6 }}>전공/기관 검색하기</SemiHeadline3>
                </SearchBox>
            </Pressable>
            
        </Container>
    );
}


export default Select;