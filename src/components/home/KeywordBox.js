
import styled from "styled-components/native";
import { color } from '../../common/colors';


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
    contentContainerStyle: { paddingRight: 30 },
    showsHorizontalScrollIndicator: false
})`
    padding: 20px 0px 4px 24px;
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