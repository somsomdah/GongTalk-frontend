import React from 'react';
import { Pressable, Text, View } from 'react-native';

const SetKeywords = ({navigation}) => {
    return <Pressable onPress={() => navigation.navigate('addKeyword')}><Text>addKeyword</Text></Pressable>
}

export default SetKeywords;