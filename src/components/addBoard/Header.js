import { Pressable } from "react-native";
import styled from "styled-components/native";
import { color } from '../../common/colors'
import { image } from "../../common/images";
import {SemiHeadline2_1} from '../_common/Typography'


const Container = styled.View`
    elevation: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${color.white};
    padding: 16px 24px;
`

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


const Header = ({ navigation }) => (
    <Container>
        <ReturnButtonIconBox><ReturnButton navigation={navigation} /></ReturnButtonIconBox>
        <SemiHeadline2_1>
            게시판 추가하기
        </SemiHeadline2_1>
    </Container>
)

export default Header;