import styled from "styled-components/native";
import { color } from '../../common/colors';
import { image } from "../../common/images";

const Container = styled.View`
    margin-bottom: 32px;
    flex-direction: column;
    align-items: stretch;
`;

const TitleContainer = styled.View`
    padding-bottom: 16px;
    justify-content: flex-start;
`;

const ContentContainer = styled.View``;

const Title = styled.Text`
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
`;

const ItemBox = styled.TouchableOpacity`
    border-radius: 12px;
    border: 0.5px solid ${color.gray3};
    padding: 14px 16px 11px 16px;
    margin-bottom: 8px;
    flex-direction: row;
    flex: 1;
`;

const Symbol = styled.Image`
    margin-top: 2px;
    margin-bottom: 9px;
    margin-right: 12px;
    width: 28px;
    height: 28px;
`;

const TextBox = styled.View`
    flex-direction: column;
    flex-shrink: 1;
`

const ItemTitle = styled.Text.attrs({ellipsizeMode:'tail', numberOfLines: 1})`
    font-size: 14px;
    font-weight: 400;
    line-height: 20.8px;
`;

const WriterDateBox = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-top: 4px;
`;

const Writer = styled.Text`
    font-size: 12px;
    font-weight: 400;
`;

const DateBox = styled.View.attrs({borderLeftColor: color.gray3, borderLeftWidth: 1,})`
    padding-left: 6px;
    margin-left: 6px;
`;

const Date = styled.Text`
    font-size: 12px;
    font-weight: 400;
    color: ${color.gray6};
`;


const Roundup = () => {
    return (
        <Container>
            <TitleContainer>
                <Title>모아보기</Title>
            </TitleContainer>
            <ContentContainer>
                <ItemBox>
                    <Symbol source={image.school.ewha} />
                    <TextBox>
                        <ItemTitle>[학사] [학부] 2022-1학기 한국외국어대학교 제목제목제목 2022-1학기 한국외국어대학교 제목제목제목</ItemTitle>
                        <WriterDateBox>
                            <Writer>이화여대 컴퓨터공학과</Writer>
                            <DateBox><Date>2022.01.04</Date></DateBox>
                        </WriterDateBox>
                    </TextBox>
                </ItemBox>
                <ItemBox>
                    <Symbol source={image.school.hongik} />
                    <TextBox>
                    <ItemTitle>[학사] [학부] 2022-1학기 한국외국어대학교 제목제목제목</ItemTitle>
                        <WriterDateBox>
                            <Writer>이화여대 컴퓨터공학과</Writer>
                            <DateBox><Date>2022.01.04</Date></DateBox>
                        </WriterDateBox>
                    </TextBox>
                </ItemBox>
                <ItemBox>
                    <Symbol source={image.school.seogang} />
                    <TextBox>
                    <ItemTitle>[학사] [학부] 2022-1학기 한국외국어대학교 제목제목제목</ItemTitle>
                        <WriterDateBox>
                            <Writer>이화여대 컴퓨터공학과</Writer>
                            <DateBox><Date>2022.01.04</Date></DateBox>
                        </WriterDateBox>
                    </TextBox>
                </ItemBox>
            </ContentContainer>
        </Container>
    );
};

export default Roundup;