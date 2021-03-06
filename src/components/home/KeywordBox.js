
import { BackgroundImage } from "react-native-elements/dist/config";
import styled from "styled-components/native";
import { color } from '../../common/colors';
import { ButtonMediumW } from "../_common/Typography";

const Chip = styled.Pressable`
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
    padding: 16px 0px 4px 24px;
`;

const KeywordBox = ({ navigation, keywordList }) => {
    return (
        <Container>
            {Object.values(keywordList).map(keyword => (
                <Chip key={keyword.id} onPress={() => navigation.navigate('postList', { headerValue: keyword.content })}>
                    <ButtonMediumW>{`#${keyword.content}`}</ButtonMediumW>
                </Chip>
            ))}
        </Container>
    );
};

export default KeywordBox;