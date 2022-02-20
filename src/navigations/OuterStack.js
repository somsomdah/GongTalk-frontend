import { createStackNavigator } from '@react-navigation/stack';
import Search from '../screens/Search';
import BottomTabNavigation from './BottomTab';
import AddBoard from '../screens/AddBoard';
import NoticeList from '../screens/NoticeList';

const Stack = createStackNavigator();

const OuterStackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, animationEnabled: false}}
            initialRouteName='main'
        >
            <Stack.Screen name='main' component={BottomTabNavigation} />
            <Stack.Screen name="search" component={Search} />
            <Stack.Screen name="addBoard" component={AddBoard} />
            <Stack.Screen name='noticeList' component={NoticeList} />
            
        </Stack.Navigator>
    );
};

export default OuterStackNavigation;