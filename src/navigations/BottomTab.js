import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import styled from 'styled-components/native';
import { image } from '../common/images';
import BoardTopTabNavigator from './BoardTopTab';
import AlarmTopTabNavigator from './AlarmTopTab';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = ({ navigation }) => {
    return (
        <BottomTab.Navigator
            initialRouteName='home'
            screenOptions={({ route }) => ({
                tabBarIcon: (props) => {
                    return <BottomIcon type={route.name} focused={props.focused} />
                },
                tabBarShowLabel: false,
                tabBarStyle: {
                    paddingHorizontal: 35,
                    height: 56,
                    elevation: 1,
                },
                headerShown: false,
            }

            )}

        >

            <BottomTab.Screen name='home' component={Home} />
            <BottomTab.Screen name='board' component={BoardTopTabNavigator} />
            <BottomTab.Screen name='alarm' component={AlarmTopTabNavigator} />
            <BottomTab.Screen name='settings' component={Settings} />

        </BottomTab.Navigator>
    );
};


const BottomIcon = styled.Image.attrs(({ type, focused }) =>
    ({ source: image.bottom[focused ? 'focused' : 'unfocused'][type] }))`
    width: 24px;
    height: 24px;
`;

export default BottomTabNavigation;