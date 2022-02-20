import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Alarms from "../screens/Alarms";
import Scraps from "../screens/Scraps";
import TobBar from '../components/alarm/TobBar'


const Tab = createMaterialTopTabNavigator();

const AlarmTopTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName='alarms'
            tabBarPosition='top'
            tabBar={(props) => {
                return (<TobBar {...props} />);
            }}
        >
            <Tab.Screen name='alarms' component={Alarms} />
            <Tab.Screen name='scraps' component={Scraps} />
        </Tab.Navigator>
    );
};

export default AlarmTopTabNavigator;