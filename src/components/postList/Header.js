import styled from "styled-components/native";
import { color } from "../../common/colors";
import { image } from "../../common/images";
import { SemiHeadline2_1 } from "../_common/Typography";
import { Pressable } from "react-native";

const Container = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    elevation: 1;
    background-color: ${color.white};
`;

const ButtonIcon = styled.Image`
    width: 20px;
    height: 20px;
`;

const ReturnButtonBox = styled.View`
    position: absolute;
    left: 24px;
`;

const ReturnButton = ({ navigation }) => (

    <Pressable hitSlop={10} onPress={() => navigation.goBack()}>
        <ButtonIcon source={image.common.return} />
    </Pressable>

);


const SearchButtonBox = styled.View`
    position: absolute;
    right: 24px;
`;

const SearchButton = ({ navigation, type, value }) => {
    return (
        <Pressable hitSlop={10} onPress={() => navigation.navigate('search', { type: type, value: value })}>
            <ButtonIcon source={image.common.search.black} />
        </Pressable>
    );

};


const Header = ({ searchType, value, navigation }) => {
    return (
        <Container>
            <ReturnButtonBox><ReturnButton navigation={navigation} /></ReturnButtonBox>
            <SemiHeadline2_1>{value}</SemiHeadline2_1>
            <SearchButtonBox><SearchButton navigation={navigation} type={searchType} value={value}/></SearchButtonBox>
        </Container>
    );
};

export default Header;