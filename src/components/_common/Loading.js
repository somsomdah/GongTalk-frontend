import styled from "styled-components/native";
import { color } from "../../common/colors";
import { Pressable, View } from 'react-native';
import Modal from 'react-native-modal';
import { SemiHeadline3 } from "./Typography";
import { ActivityIndicator } from "react-native";

const Container = styled.View`
    background-color: ${color.white};
    align-items: center;
    justify-content: center;
    flex: 1;
`;

const Loading = () => {
    return (
        <Container>
            <ActivityIndicator size={"large"} color={color.gray2} />
        </Container>
    )
}

export default Loading;