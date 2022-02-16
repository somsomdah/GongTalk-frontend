import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SetBoards from "../screens/SetBoards";
import SetKeywords from "../screens/SetKeywords";
import styled from 'styled-components/native';
import { color } from '../themes/colors';
import { image } from '../themes/images';
import { Pressable } from 'react-native';


const Container = styled.View.attrs({
    borderBottomColor: color.gray2,
    borderBottomWidth: 1
})`
    background-color: ${color.white};
    height: 56px;
    justify-content: flex-start;
    align-items: center;
    padding-top: 18px;
    padding-right: 24px;
    padding-left: 24px;
    flex-direction: row;
`;

const TitleBox = styled.View.attrs(({ focused }) => ({
    borderBottomColor: focused ? color.primary : color.gray3,
    borderBottomWidth: 3
}))`
    height: 38px;
    padding-bottom: 16px;
    margin-right: 24px;
`;

const TitleText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    color: ${({ focused }) => (focused ? color.primary : color.gray3)};
`;

const Title = ({ focused, onPress, children }) => {
    return (
        <Pressable onPress={onPress} hitSlop={20}>
            <TitleBox focused={focused}>
                <TitleText focused={focused}>{children}</TitleText>
            </TitleBox>
        </Pressable>
    );
};

const AddButtonBox = styled.View`
    flex-grow: 1;
    justify-content: flex-end;
    flex-direction: row;
    padding-bottom: 18px;
`;

const AddIcon = styled.Image`
    width: 20px;
    height: 20px;
`;

const AddButton = () => {
    return (
        <Pressable hitSlop={50}>
            <AddIcon source={image.common.add} />
        </Pressable>
    );
};


const TabBar = ({ navigation, state }) => {
    return (
        <Container>
            {state.routes.map((route, index) => {

                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The "merge: true" option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                return (
                    <Title key={index} focused={isFocused} onPress={onPress}>
                        {index === 0 ? '게시판' : '키워드'}
                    </Title>
                );
            })}
            {state.index === 1 ||
                <AddButtonBox><AddButton /></AddButtonBox>
            }
        </Container>
    );

};

const Tab = createMaterialTopTabNavigator();

const BoardTopTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName='setBoard'
            tabBarPosition='top'
            tabBar={(props) => {
                return (<TabBar {...props} />);
            }}
        >
            <Tab.Screen name='setBoards' component={SetBoards} />
            <Tab.Screen name='setKeywords' component={SetKeywords} />
        </Tab.Navigator>
    );
};

export default BoardTopTabNavigator;