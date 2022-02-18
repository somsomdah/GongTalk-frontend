import { NavigationContainer } from "@react-navigation/native";
import styled from "styled-components/native";
import OuterStackNavigation from "./navigations/OuterStack";
import { color } from './common/colors';
import { image } from './common/images';
import { font } from './common/fonts';
import { StatusBar } from 'react-native';

const App = () => {
    return (
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