import { createStackNavigator } from '@react-navigation/stack';
import Search from '../screens/Search';
import BottomTabNavigation from './BottomTab';
import AddBoard from '../screens/AddBoard';

const Stack = createStackNavigator();

const OuterStackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='main'
        >
            <Stack.Screen name='main' component={BottomTabNavigation} />
            <Stack.Screen name="search" component={Search} />
            <Stack.Screen name="addBoard" component={AddBoard} options={{
                // headerShown: true, 
                // // headerStatusBarHeight: 56, 
                // headerStyle: {elevation: 20,
                //     shadowOpacity: 1,}
                }}/>
        </Stack.Navigator>
    );
};

export default OuterStackNavigation;