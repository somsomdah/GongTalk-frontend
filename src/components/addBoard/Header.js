import { Pressable } from "react-native";
import styled from "styled-components/native";
import { color } from '../../common/colors'
import { image } from "../../common/images";

// https://github.com/styled-components/styled-components/issues/709

const Container = styled.View`
    /* shadow-color: #000;
    shadow-offset: {width: 0px, height: 2px};
    shadow-opacity: 0.8;
    shadow-radius: 2px; */
    elevation: 2;
    height: 56px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${color.white};
`


const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    color: ${color.black};
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

    <Pressable hitSlop={50} onPress={() => navigation.goBack()}>
        
            <ReturnButtonIcon source={image.common.return} />
        
    </Pressable>

);


const Header = ({ navigation }) => (
    <Container>
        <ReturnButtonIconBox><ReturnButton navigation={navigation} /></ReturnButtonIconBox>
        {/* <TitleBox> */}
        <Title>
            게시판 추가하기
        </Title>
        {/* </TitleBox> */}
    </Container>
)

export default Header;