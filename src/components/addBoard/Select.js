import styled from "styled-components/native";
import { image } from "../../themes/images";
import { color } from "../../themes/colors";
import InputBox from "../search/InputBox";
import { PrimaryColorBox } from "../search/InputBox";
import { Pressable } from 'react-native';
import { useState } from "react";


const Container = styled.View`
    border-bottom-color: ${color.gray3}
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

const TitleText = styled.Text`
    font-size: 12px;
    color: ${color.black};
    line-height: 20px;
`;

const DropdownBox = ({ children }) => {
    const _style = {
        marginBottom: 28,
        justifyContent: 'space-between'
    };
    return (<PrimaryColorBox style={_style} >{children}</PrimaryColorBox>);
};

const DropDownText = styled.Text`
    font-size: 14px;
    line-height: 20px;
    color: ${color.black};
`;

const DropDownIcon = styled.Image`
    height: 18px;
    width: 18px;
`;

// const SelectModal = styled.Modal`
//     background-color : red;
//     opacity: 0.5;
// `;

const Select = () => {

    // const [modalVisible, setModalVisible] = useState(false);

    return (
        <Container>
            <TitleBox>
                <TitleText>
                    학교 선택하기
                </TitleText>
            </TitleBox>
            <DropdownBox>
                <DropDownText>
                    이화여자대학교
                </DropDownText>
                {/* <Pressable hitSlop={50} onPress={() => setModalVisible(true)} android_ripple={{color: 'black'}}> */}
                    <DropDownIcon source={image.common.dropdown.primary} />
                {/* </Pressable> */}
            </DropdownBox>
            <TitleBox>
                <TitleText>
                    전공/기관 선택하기
                </TitleText>
            </TitleBox>
            <InputBox placeholder={'전공/기관 검색하기'} />
            {/* <SelectModal
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(false) }}
            /> */}
        </Container>
    );
}


export default Select;