import styled from "styled-components/native";
import { color } from "../../common/colors";
import { image } from "../../common/images";
import { SemiHeadline2_1, SemiHeadline4 } from "../_common/Typography";
import { Pressable, Linking, } from "react-native";
import Modal from 'react-native-modal';
import * as Clipboard from 'expo-clipboard';



const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    elevation: 1;
    background-color: ${color.white};
`;

const ButtonIcon = styled.Image`
    width: 20px;
    height: 20px;
`;

const ReturnButton = ({ navigation }) => (

    <Pressable hitSlop={10} onPress={() => navigation.goBack()}>
        <ButtonIcon source={image.common.return.black} />
    </Pressable>

);

const PopOverBox = styled.View`
    position: absolute; 
    top: 16px; 
    right: 20px; 
    background-color: ${color.white};
    border-radius: 16px;
    flex-direction: column;
    border: 1px solid ${color.gray3};
`

const PopOverDivider = styled.View`
    height: 1px;
    border-bottom-color: ${color.gray3};
    border-bottom-width: 1px;
    align-self: stretch;
`

const PopOverIcon = styled.Image`
    width: 16px;
    height: 16px;
`

const PopOver = ({ isVisible, setIsVisible, post }) => {
    const _style = {
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center'
    }

    const _textStyle = {
        marginLeft: 5
    }

    const clipBoardString =
        `[${post.board.school.name} ${post.board.name}]\n` +
        `${post.title} \n` +
        `---------- \n ` +
        `${post.url}`


    const copyToClipboard = () => {
        Clipboard.setString(clipBoardString);
        setIsVisible(false);
    }

    const openBrowser = () => {
        Linking.openURL(post.url)
        setIsVisible(false);
    }

    return (
        <Modal
            backdropOpacity={0.1}
            isVisible={isVisible}
            onBackButtonPress={() => setIsVisible(false)}
            onBackdropPress={() => setIsVisible(false)}
            animationInTiming={1}
            animationOutTiming={1}
        >
            <PopOverBox>
                <Pressable style={_style} onPress={copyToClipboard} android_ripple={{ color: 'black' }}>
                    <PopOverIcon source={image.common.share} />
                    <SemiHeadline4 style={_textStyle}>
                        {'공유하기'}
                    </SemiHeadline4>
                </Pressable>
                <PopOverDivider />
                <Pressable style={_style} onPress={openBrowser}>
                    <PopOverIcon source={image.common.link} />
                    <SemiHeadline4 style={_textStyle}>
                        {'웹으로 이동하기'}
                    </SemiHeadline4>
                </Pressable>
            </PopOverBox>
        </Modal>

    );
}


const MoreButton = ({ setModalVisible }) => {

    return (
        <Pressable onPress={() => setModalVisible(true)}>
            <ButtonIcon source={image.common.more} />
        </Pressable>

    );

}


const Header = ({ value, navigation, setModalVisible }) => {
    return (
        <Container>
            <ReturnButton navigation={navigation} />
            <SemiHeadline2_1>{value}</SemiHeadline2_1>
            <MoreButton setModalVisible={setModalVisible} />
        </Container>
    );
};

export default Header;
export { PopOver }