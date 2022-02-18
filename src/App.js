import { NavigationContainer } from "@react-navigation/native";
import styled from "styled-components/native";
import OuterStackNavigation from "./navigations/OuterStack";
import { StatusBar } from 'react-native';
import { useFonts } from "expo-font";
import { color } from './common/colors';
import { font } from "./common/fonts";

const App = () => {
    const [loaded, error] = useFonts(font.pretendard);

    return (
        loaded &&
            <Container>
                <StatusBar backgroundColor={color.white} barStyle='dark-content' />
                <NavigationContainer>
                    <OuterStackNavigation />
                </NavigationContainer>
            </Container>
    );
};

const Container = styled.View`
    background-color: ${color.white};
    flex: 1;
`;

export default App;