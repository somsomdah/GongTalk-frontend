import styled from 'styled-components/native';
import { color } from '../../common/colors';
import { ButtonMedium, SemiHeadline4 } from '../_common/Typography';


const Container = styled.View`
    align-items: stretch;
    flex-direction: column;
`;

const TitleContainer = styled.View`
    margin-top: 24px;
`;

const BodyContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 14px;
    padding-bottom: 8px;
`;

const ChipBox = styled.Pressable`
    padding: 6.5px 14px;
    margin-bottom: 10px;
    margin-right: 8px;
    border: 0.6px solid ${color.gray6};
    border-radius: 12px;
`;

const Chip = ({ text, onPress }) => {
    return (
        <ChipBox onPress={onPress}>
            <ButtonMedium>{text}</ButtonMedium>
        </ChipBox>
    );

};


const KeywordBox = ({ title, keywordList, search }) => {

    return (
        <Container>
            <TitleContainer>
                <SemiHeadline4>{title}</SemiHeadline4>
            </TitleContainer>
            <BodyContainer>
                {Object.values(keywordList).map(keyword => (
                    <Chip
                        key={keyword.id}
                        text={keyword.content}
                        onPress={() => { search(keyword.content) }}
                    />
                ))}
            </BodyContainer>
        </Container>
    );
}

export default KeywordBox;