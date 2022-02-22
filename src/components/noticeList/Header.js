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

const ReturnButtonIcon = styled.Image`
    width: 20px;
    height: 20px;
`;

const ReturnButtonIconBox = styled.View`
    position: absolute;
    left: 24px;
`;

const ReturnButton = ({ navigation }) => (

    <Pressable hitSlop={10} onPress={() => navigation.goBack()}>
            <ReturnButtonIcon source={image.common.return.black} />
    </Pressable>

);

const Header = ({navigation, value}) => {
    return (
        <Container>
            <ReturnButtonIconBox><ReturnButton navigation={navigation}/></ReturnButtonIconBox>
            <SemiHeadline2_1>{value}</SemiHeadline2_1>
        </Container>
    );
};

export default Header;