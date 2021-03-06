import { createStackNavigator } from '@react-navigation/stack';
import Search from '../screens/Search';
import BottomTabNavigation from './BottomTab';
import AddBoard from '../screens/AddBoard';
import PostList from '../screens/PostList';
import PostDetail from '../screens/PostDetail';
import SearchList from '../screens/SearchList';
import TeamInfo from '../screens/TeamInfo';
import AddKeyword from '../screens/AddKeyword';
import SearchBoard from '../screens/SearchBoard';
import Notice from '../screens/Notice';
import { UserProvider } from '../contexts/User';

const Stack = createStackNavigator();

const AppStackNavigation = () => {
    return (
        <UserProvider>
            <Stack.Navigator
                screenOptions={{ headerShown: false, animationEnabled: false }}
                initialRouteName='main'
            >
                <Stack.Screen name='main' component={BottomTabNavigation} />

                <Stack.Screen name="search" component={Search} />
                <Stack.Screen name='searchList' component={SearchList} />

                <Stack.Screen name="addBoard" component={AddBoard} />
                <Stack.Screen name='searchBoard' component={SearchBoard} />
                <Stack.Screen name='addKeyword' component={AddKeyword} />

                <Stack.Screen name='postList' component={PostList} />
                <Stack.Screen name='postDetail' component={PostDetail} />

                {/* Deprecated
            <Stack.Screen name='noticeList' component={NoticeList} />
            <Stack.Screen name='noticeDetail' component={NoticeDetail} /> */}

                <Stack.Screen name='notice' component={Notice} />
                <Stack.Screen name='teamInfo' component={TeamInfo} />

            </Stack.Navigator>
        </UserProvider>
    );
};

export default AppStackNavigation;