import styled from "styled-components/native";
import { color } from '../../common/colors';
import { image } from "../../common/images";
import { postList } from '../../common/data'
import { SemiHeadline2_1, SemiHeadline3, SemiHeadline4 } from "../_common/Typography";

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

const ItemBox = styled.TouchableOpacity`
    border-radius: 12px;
    border: 0.5px solid ${color.gray3};
    padding: 12px 16px;
    margin-bottom: 8px;
    flex-direction: row;
    align-items: center;
`;

const Symbol = styled.Image`
    margin-right: 12px;
    width: 28px;
    height: 28px;
`;

const TextBox = styled.View`
    flex-direction: column;
    flex-shrink: 1;
`

const WriterDateBox = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-top: 4px;
`;


const ItemInfoDivider = styled.View`
    width: 4px;
    height: 10px;
    margin-left: 4px;
    border-left-color: ${color.gray3};
    border-left-width: 1px;
`;

const Item = ({ post }) => {

    return (
        <ItemBox>
            <Symbol source={post.board.school.image} />
            <TextBox>
                <SemiHeadline3 ellipsizeMode='tail' numberOfLines={1}>{post.title}</SemiHeadline3>
                <WriterDateBox>
                    <SemiHeadline4>{`${post.board.school.name} ${post.board.name}`}</SemiHeadline4>
                    <ItemInfoDivider />
                    <SemiHeadline4 style={{ color: color.gray5 }}>{post.date}</SemiHeadline4>
                </WriterDateBox>
            </TextBox>
        </ItemBox>);
}


const Roundup = () => {
    return (
        <Container>
            <TitleContainer>
                <SemiHeadline2_1>모아보기</SemiHeadline2_1>
            </TitleContainer>
            <ContentContainer>
                {Object.values(postList).map((post, idx) => idx < 3 && <Item key={post.id} post={post} />)}
            </ContentContainer>
        </Container>
    );
};

export default Roundup;