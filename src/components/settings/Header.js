import styled from "styled-components/native";
import { color } from "../../common/colors";
import { SemiHeadline2_1 } from "../Typography";

const Container = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 24px;
    elevation: 1;
    background-color: ${color.white};
    height: 56px;
`;

const Header = () => {
    return (
        <Container>
            <SemiHeadline2_1 style={{color: color.primary}}>설정</SemiHeadline2_1>
        </Container>
    );
};

export default Header;