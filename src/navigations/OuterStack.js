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
import Start from '../screens/onboarding/Start';
import OnboardingAddKeyword from '../screens/onboarding/AddKeyword';
import OnboardingAddBoard from '../screens/onboarding/AddBoard'
import Complete from '../screens/onboarding/Complete';
import SearchBoard from '../screens/SearchBoard';

const Stack = createStackNavigator();

const OuterStackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, animationEnabled: false}}
            initialRouteName='onboarding-start'
        >
            <Stack.Screen name='main' component={BottomTabNavigation} />

            <Stack.Screen name="search" component={Search} />
            <Stack.Screen name='searchList' component={SearchList} />

            <Stack.Screen name="addBoard" component={AddBoard} />
            <Stack.Screen name='searchBoard' component={SearchBoard} />
            <Stack.Screen name='addKeyword' component={AddKeyword} />

            <Stack.Screen name='postList' component={PostList} />
            <Stack.Screen name='postDetail' component={PostDetail} />

            <Stack.Screen name='noticeList' component={NoticeList} />
            <Stack.Screen name='noticeDetail' component={NoticeDetail} />
            <Stack.Screen name='teamInfo' component={TeamInfo} />

            <Stack.Screen name='onboarding-start' component={Start} />
            <Stack.Screen name='onboarding-addBoard' component={OnboardingAddBoard} />
            <Stack.Screen name='onboarding-addKeyword' component={OnboardingAddKeyword} />
            <Stack.Screen name='onboarding-complete' component={Complete} />
        </Stack.Navigator>
    );
};

export default OuterStackNavigation;