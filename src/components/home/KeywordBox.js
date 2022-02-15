
import styled from "styled-components/native";
import { color } from '../../themes/colors';


const Text = styled.Text`
    color: ${color.white};
    font-size: 14px;
`
const Chip = styled.TouchableOpacity`
    padding: 7px 14px;
    margin-right: 8px;
    border-radius: 12px;
    background-color: ${color.primary};
`;

const Container = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: { paddingHorizontal: 23 },
    showsHorizontalScrollIndicator: false
})`
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 12px;
`;

const KeywordBox = ({ keywordList }) => {
    return (
        <Container>
            {Object.values(keywordList).map(keyword => (
                <Chip key={keyword}>
                    <Text>{keyword}</Text>
                </Chip>
            ))}
        </Container>
    );
};

export default KeywordBox;