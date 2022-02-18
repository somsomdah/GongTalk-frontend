import { Pressable } from "react-native";
import styled from "styled-components/native";
import { image } from '../../common/images';
import { color } from "../../common/colors";

const Container = styled.View`
    height: 56px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${color.white};
    elevation: ${({isOnTop}) => isOnTop ? 0 : 1};
    padding: 12px 24px;
`;

const SymbolImage = styled.Image`
    width: 44px;
    height: 20px;
    margin-top: 5px;
    margin-left: 10px;
    /* width: 66px;
    height: 30px; */
`;

const SearchIcon = styled.Image`
    height: 20px;
    width: 20px;
`;

const SearchButton = ({navigation}) => {
    return (
        <Pressable onPress={() => (navigation.navigate('search'))}>
            <SearchIcon source={image.common.search.primary}/>
        </Pressable>
    );

}


const Header = ({navigation, isOnTop}) => {
    return (
        <Container isOnTop={isOnTop}>
            <SymbolImage source={image.symbol.letter.horizontal}/>
            <SearchButton navigation={navigation} />
        </Container>
    );
};

export default Header