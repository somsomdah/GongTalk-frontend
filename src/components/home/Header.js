import { Pressable } from "react-native";
import styled from "styled-components/native";
import { image } from '../../common/images';
import { color } from "../../common/colors";

const Container = styled.View`
    
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${color.white};
    elevation: ${({isOnTop}) => isOnTop ? 0 : 1};
    padding: 19px 24px;
    height: 56px;
`;

const SymbolImage = styled.Image`
    width: 44px;
    height: 20px;
    margin-left: 10px;
    /* width: 66px;
    height: 30px; */
`;

const SymbolImageBox = styled.View`
    position: absolute;
    left: 24px;
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

const SearchButtonBox = styled.View`
    position: absolute;
    right: 24px;
`;

const Header = ({navigation, isOnTop}) => {
    return (
        <Container isOnTop={isOnTop}>
            <SymbolImageBox><SymbolImage source={image.symbol.letter.horizontal}/></SymbolImageBox>
            <SearchButtonBox><SearchButton navigation={navigation} /></SearchButtonBox>
        </Container>
    );
};

export default Header