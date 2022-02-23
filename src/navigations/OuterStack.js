import { createStackNavigator } from '@react-navigation/stack';
import Search from '../screens/Search';
import BottomTabNavigation from './BottomTab';
import AddBoard from '../screens/AddBoard';
import NoticeList from '../screens/NoticeList';
import NoticeDetail from '../screens/NoticeDetail';
import PostList from '../screens/PostList';
import PostDetail from '../screens/PostDetail';
import SearchList from '../screens/SearchList';
import TeamInfo from '../screens/TeamInfo';
import AddKeyword from '../screens/AddKeyword';
import Start from '../screens/Start';


const Stack = createStackNavigator();

const OuterStackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, animationEnabled: false}}
            initialRouteName='start'
        >
            <Stack.Screen name='start' component={Start} />
            <Stack.Screen name='main' component={BottomTabNavigation} />
            <Stack.Screen name="search" component={Search} />
            <Stack.Screen name="addBoard" component={AddBoard} />
            <Stack.Screen name='noticeList' component={NoticeList} />
            <Stack.Screen name='noticeDetail' component={NoticeDetail} />
            <Stack.Screen name='postList' component={PostList} />
            <Stack.Screen name='postDetail' component={PostDetail} />
            <Stack.Screen name='searchList' component={SearchList} />
            <Stack.Screen name='teamInfo' component={TeamInfo} />
            <Stack.Screen name='addKeyword' component={AddKeyword} />
        </Stack.Navigator>
    );
};

export default OuterStackNavigation;