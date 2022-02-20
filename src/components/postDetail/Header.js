import styled from "styled-components/native";
import { color } from "../../common/colors";
import { image } from "../../common/images";
import { SemiHeadline2_1, SemiHeadline4 } from "../_common/Typography";
import { Image, Pressable } from "react-native";
import { Tooltip } from 'react-native-elements';

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
        <ButtonIcon source={image.common.return} />
    </Pressable>

);

const PopOverBox = styled.View`
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

const PopOverIcon = styled.View`
    width: 16px;
    height: 16px;
`

const PopOver = () => {
    _style = {
        padding: 14
    }

    return (
        <PopOverBox>
            <Pressable style={_style}>
                <PopOverIcon source={image.common.share} />
                <SemiHeadline4>
                    {'공유하기'}
                </SemiHeadline4>
            </Pressable>
            <PopOverDivider />
            <Pressable style={_style}>
                <PopOverIcon source={image.common.link} />
                <SemiHeadline4>
                    {'웹으로 이동하기'}
                </SemiHeadline4>
            </Pressable>
        </PopOverBox>
    );
}



const MoreButton = () => {
    return (
        <Tooltip popover={<PopOver />} withPointer={false}>
            <ButtonIcon source={image.common.more} />
        </Tooltip>
    );

}


const Header = ({ value, navigation }) => {
    return (
        <Container>
            <ReturnButton navigation={navigation} />
            <SemiHeadline2_1>{value}</SemiHeadline2_1>
            <MoreButton />
        </Container>
    );
};

export default Header;