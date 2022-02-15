import styled from 'styled-components/native';
import { color } from '../themes/colors';
import InputBox from '../components/search/InputBox'
import { TextInput } from 'react-native-gesture-handler';
import { View } from 'react-native';


const Container = styled.View`
    background-color: ${color.white};
    padding: 26px 24px;
    flex: 1;
    align-items: stretch;
`;

const Search = () => {
    return (
    <Container>
        <InputBox />        
    </Container>);
}

export default Search;