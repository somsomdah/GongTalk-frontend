import styled from "styled-components/native";
import { color } from "../../common/colors";
import { SemiHeadline2_1 } from "../_common/Typography";

const Container = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 16px 24px;
    elevation: 1;
    background-color: ${color.white};
    
`;

const Header = ({value}) => {
    return (
        <Container>
            <SemiHeadline2_1 style={{color: color.primary}}>{value}</SemiHeadline2_1>
        </Container>
    );
};

export default Header;