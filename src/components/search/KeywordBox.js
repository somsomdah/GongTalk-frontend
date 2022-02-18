import styled from 'styled-components/native';
import { color } from '../../common/colors';


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

const TitleText = styled.Text`
    color: ${color.black};
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`;

const ChipBox = styled.Pressable`
    padding: 6.5px 14px;
    margin-bottom: 10px;
    margin-right: 8px;
    border: 0.6px solid ${color.gray6};
    border-radius: 12px;
`;

const ChipText = styled.Text`
    color: ${color.black};
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`;

const Chip = ({ text }) => {
    return (
        <ChipBox>
            <ChipText>{text}</ChipText>
        </ChipBox>
    );

};


const KeywordBox = ({title, keywordList}) => {

    return(
        <Container>
            <TitleContainer>
                <TitleText>{title}</TitleText>
            </TitleContainer>
            <BodyContainer>
                {Object.values(keywordList).map(keyword => (<Chip key={keyword.id} text={keyword.content}/>))}
            </BodyContainer>
        </Container>
    );
}

export default KeywordBox;