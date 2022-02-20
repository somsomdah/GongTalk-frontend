import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SetBoards from "../screens/SetBoards";
import SetKeywords from "../screens/SetKeywords";
import TobBar from '../components/board/TobBar'


const Tab = createMaterialTopTabNavigator();

const BoardTopTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName='setBoard'
            tabBarPosition='top'
            tabBar={(props) => {
                return (<TobBar {...props} />);
            }}
        >
            <Tab.Screen name='setBoards' component={SetBoards} />
            <Tab.Screen name='setKeywords' component={SetKeywords} />
        </Tab.Navigator>
    );
};

export default BoardTopTabNavigator;