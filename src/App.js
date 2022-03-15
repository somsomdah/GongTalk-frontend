import { NavigationContainer } from "@react-navigation/native";
import styled from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'react-native';
import { useFonts } from "expo-font";
import { useQueryClient, QueryClient, QueryClientProvider } from 'react-query';
import { color } from './common/colors';
import { font } from "./common/fonts";
import OnboardingNavigation from "./navigations/OnboardingStack";
import AppStackNavigation from './navigations/AppStack';


const App = () => {

    const [loaded, error] = useFonts(font.pretendard);
    const Stack = createStackNavigator();
    const queryClient = new QueryClient();


    return (
        loaded &&
        <QueryClientProvider client={queryClient}>
            <Container>
                <StatusBar backgroundColor={color.white} barStyle='dark-content' />
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{ headerShown: false, animationEnabled: false }}
                        initialRouteName='onboarding'
                    >
                        <Stack.Screen name={'app'} component={AppStackNavigation} />
                        <Stack.Screen name={'onboarding'} component={OnboardingNavigation} />
                    </Stack.Navigator>
                </NavigationContainer>
            </Container>
        </QueryClientProvider>

    );
};

const Container = styled.View`
    background-color: ${color.white};
    flex: 1;
`;

export default App;