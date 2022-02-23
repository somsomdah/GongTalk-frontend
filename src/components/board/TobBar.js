import styled from 'styled-components/native';
import { color } from '../../common/colors'
import { image } from '../../common/images';
import { Pressable } from 'react-native';
import { SemiHeadline2_1 } from '../_common/Typography';


const Container = styled.View.attrs({
    // borderBottomColor: color.gray2,
    // borderBottomWidth: 1
})`
    background-color: ${color.white};
    
    justify-content: flex-start;
    align-items: center;
    padding-top: 18px;
    padding-right: 24px;
    padding-left: 24px;
    flex-direction: row;
    elevation: 1;
`;

const TitleBox = styled.View.attrs(({ focused }) => ({
    borderBottomColor: focused ? color.primary : color.gray3,
    borderBottomWidth: focused? 3 : 0
}))`
    height: 38px;
    padding-bottom: 16px;
    margin-right: 24px;
`;


const Title = ({ focused, onPress, children }) => {
    return (
        <Pressable onPress={onPress} hitSlop={20}>
            <TitleBox focused={focused}>
                <SemiHeadline2_1 style={{color: focused ? color.primary : color.gray3}}>{children}</SemiHeadline2_1>
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

const AddButton = ({navigation}) => {
    return (
        <Pressable hitSlop={20} onPress={() => navigation.navigate('addBoard') }>
            <AddIcon source={image.common.add} />
        </Pressable>
    );
};


const TobBar = ({ navigation, state }) => {
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
                <AddButtonBox ><AddButton navigation={navigation}/></AddButtonBox>
            }
        </Container>
    );

};

export default TobBar;