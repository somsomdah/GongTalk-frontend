import styled from "styled-components/native";
import { SemiHeadline4 } from "../_common/Typography";

const Container = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 12px;
`;

const Title = ({ value }) => {
    return (
        <Container>
            <SemiHeadline4>{value}</SemiHeadline4>
        </Container>
    );
}

export default Title;