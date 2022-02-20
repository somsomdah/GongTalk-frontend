import styled from "styled-components/native";
import { image } from "../../common/images";
import { color } from "../../common/colors";
import InputBox from "../search/InputBox";
import { Pressable } from 'react-native';
import { useState } from "react";
import { SemiHeadline3 } from "../Typography";


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

const TitleText = styled.Text`
    font-size: 12px;
    color: ${color.black};
    line-height: 20px;
`;

const Title = ({ children }) => {
    return (
        <TitleBox>
            <TitleText>{children}</TitleText>
        </TitleBox>
    );
}

const DropDownText = styled.Text`
    font-size: 14px;
    line-height: 20px;
    color: ${({selected}) => selected ? color.black : color.gray6};
`;

const DropDownIcon = styled.Image`
    height: 18px;
    width: 18px;
`;

const DropdownBox = styled.View`
    height: 54px;
    border-radius: 12px;
    align-items: center;
    flex-direction: row;
    border: 1px solid ${color.gray3};
    padding: 16px;
`;

const DropdownPressable = ({ onPress, selectedSchool }) => {
    const _style = {
        marginBottom: 28,
        justifyContent: 'space-between'
    };
    return (
        <Pressable onPress={onPress}>
            <DropdownBox style={_style} >
                <DropDownText selected={selectedSchool !== null}>
                    { selectedSchool?.name || '학교 선택하기'}
                </DropDownText>
                <DropDownIcon source={image.common.dropdown.primary} />
            </DropdownBox>
        </Pressable>
    );
};


const SearchBox = styled.View`
    height: 54px;
    border-radius: 12px;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    border: 1px solid ${({ focused }) => focused ? color.primary : color.gray3};
    padding: 16px;
`;

const SearchIcon = styled.Image`
    margin-right: 24px;
    margin-bottom: 18px;
    margin-top: 18px;   
    height: 20px;
    width: 20px;
`;

const SearchPressable = () => {
    const [focused, setFocused] = useState(false)
    const _onPressIn = () => setFocused(true);
    const _onPressOut = () => setFocused(false);

    return(
        <Pressable onPressIn={_onPressIn} onPressOut={_onPressOut}>
            <SearchBox focused={focused}>
                <SearchIcon source={image.common.search[focused ? 'primary' : 'black']}/>
                <SemiHeadline3 style={{color: color.gray6}}>전공/기관 검색하기</SemiHeadline3>
            </SearchBox>
        </Pressable>
    );
}


const Select = ({ onDropdownPress, selectedSchool }) => {

    return (
        <Container>
            <Title>학교 선택하기</Title>
            <DropdownPressable onPress={onDropdownPress} selectedSchool={selectedSchool} />
            <Title>전공/기관 선택하기</Title>
            <SearchPressable />
        </Container>
    );
}


export default Select;