import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Category, Alarm, Settings } from '../screens/Main';
import Home from '../screens/Home';import 
styled from 'styled-components/native';
import { image } from '../common/images';
import BoardTopTabNavigator from './BoardTopTab';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = ({navigation}) => {
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
                headerShown: false
            }

            )}

        >

            <BottomTab.Screen name='home' component={Home} />
            <BottomTab.Screen name='board' component={BoardTopTabNavigator} />
            <BottomTab.Screen name='alarm' component={Alarm} />
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