import { createStackNavigator } from '@react-navigation/stack';
import Start from '../screens/onboarding/Start';
import AddKeyword from '../screens/onboarding/AddKeyword';
import AddBoard from '../screens/onboarding/AddBoard'
import SearchBoard from '../screens/onboarding/SearchBoard';
import Complete from '../screens/onboarding//Complete';
import { OnboardingProvider } from '../contexts/Onboarding'

const Stack = createStackNavigator();

const OnboardingNavigation = () => {
    return (
        <OnboardingProvider>
            <Stack.Navigator
                screenOptions={{ headerShown: false, animationEnabled: false }}
                initialRouteName='start'
            >
                <Stack.Screen name='start' component={Start} />
                <Stack.Screen name='addBoard' component={AddBoard} />
                <Stack.Screen name='searchBoard' component={SearchBoard} />
                <Stack.Screen name='addKeyword' component={AddKeyword} />
                <Stack.Screen name='complete' component={Complete} />

            </Stack.Navigator>
        </OnboardingProvider>

    );
};

export default OnboardingNavigation;