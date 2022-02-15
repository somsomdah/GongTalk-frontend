import { createStackNavigator } from '@react-navigation/stack';
import Search from '../screens/Search';
import BottomTabNavigation from './BottomTab';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='main'
        >
            <Stack.Screen name='main' component={BottomTabNavigation} />
            <Stack.Screen name="search" component={Search} />
        </Stack.Navigator>
    );
};

export default StackNavigation;