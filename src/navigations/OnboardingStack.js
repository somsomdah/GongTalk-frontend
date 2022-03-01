import { createStackNavigator } from '@react-navigation/stack';
import Start from '../screens/onboarding/Start';
import OnboardingAddKeyword from '../screens/onboarding/AddKeyword';
import OnboardingAddBoard from '../screens/onboarding/AddBoard'
import Complete from '../screens/onboarding/Complete';
import SearchBoard from '../screens/SearchBoard';
import { OnboardingProvider } from '../contexts/Onboarding'

const Stack = createStackNavigator();

const OnboardingNavigation = () => {
    return (
        <OnboardingProvider>
            <Stack.Navigator
                screenOptions={{ headerShown: false, animationEnabled: false }}
                initialRouteName='onboarding-start'
            >
                <Stack.Screen name='onboarding-start' component={Start} />
                <Stack.Screen name='onboarding-addBoard' component={OnboardingAddBoard} />
                <Stack.Screen name='searchBoard' component={SearchBoard} />
                <Stack.Screen name='onboarding-addKeyword' component={OnboardingAddKeyword} />
                <Stack.Screen name='onboarding-complete' component={Complete} />

            </Stack.Navigator>
        </OnboardingProvider>

    );
};

export default OnboardingNavigation;