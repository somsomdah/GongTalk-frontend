import { NavigationContainer } from "@react-navigation/native";
import styled from "styled-components/native";
import OuterStackNavigation from "./navigations/OuterStack";
import { StatusBar } from 'react-native';
import { useFonts } from "expo-font";
import { color } from './common/colors';
import { font } from "./common/fonts";
import { RootSiblingParent } from 'react-native-root-siblings';


const App = () => {
    const [loaded, error] = useFonts(font.pretendard);

    return (
        loaded &&
        <RootSiblingParent>
            <Container>
                <StatusBar backgroundColor={color.white} barStyle='dark-content' />
                <NavigationContainer>
                    <OuterStackNavigation />
                </NavigationContainer>
            </Container>
        </RootSiblingParent>
    );
};

const Container = styled.View`
    background-color: ${color.white};
    flex: 1;
`;

export default App;