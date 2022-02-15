import { Pressable } from "react-native";
import styled from "styled-components/native";
import { image } from '../../themes/images'


const Icon = styled.Image`
    margin-right: 24px;
    margin-bottom: 18px;
    margin-top: 18px;   
    height: 20px;
    width: 20px;
`;

const IconBox = ({navigation}) => {
    return (
        <Pressable onPress={() => (navigation.navigate('search'))}>
            <Icon source={image.common.search.primary}/>
        </Pressable>
    );

}

const Container = styled.View`
    height: 56px;
    flex-direction: row;
    justify-content: flex-end;
`;

const SearchBox = ({navigation}) => {
    return (
        <Container>
            <IconBox navigation={navigation} />
        </Container>
    );
};

export default SearchBox