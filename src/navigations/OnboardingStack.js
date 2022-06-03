import { createStackNavigator } from '@react-navigation/stack';
import Start from '../screens/onboarding/Start';
import OnboardingAddKeyword from '../screens/onboarding/AddKeyword';
import OnboardingAddBoard from '../screens/onboarding/AddBoard'
import OnboardingSearchBoard from '../screens/onboarding/SearchBoard';
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
                <Stack.Screen name='addBoard' component={OnboardingAddBoard} />
                <Stack.Screen name='searchBoard' component={OnboardingSearchBoard} />
                <Stack.Screen name='addKeyword' component={OnboardingAddKeyword} />
                <Stack.Screen name='complete' component={Complete} />

            </Stack.Navigator>
        </OnboardingProvider>

    );
};

export default OnboardingNavigation;