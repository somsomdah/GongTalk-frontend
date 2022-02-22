import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { color } from '../../common/colors'
import { image } from "../../common/images";
import { SemiHeadline2_1 } from "../_common/Typography";

const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    align-items: stretch;
    background-color: ${color.white};
    padding: 40px;
`;

const TextBox = styled.View`
    background-color: ${color.white};
    flex-direction: column;
    align-items: stretch;
`;

const Line = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const Symbol = styled.Image.attrs({
    source: image.symbol.letter.vertical
})`
    width: 80px;
    height: 140px;
`

const Content = () => {
    const _style = { color: color.primary };
    return (
        <Container>
            <Symbol />
            <TextBox>
                <Line>
                    <SemiHeadline2_1 style={_style}>{'Prod. Dev. '}</SemiHeadline2_1><SemiHeadline2_1>{'장다솜'}</SemiHeadline2_1>
                </Line>
                <Line>
                    <SemiHeadline2_1 style={_style}>{'UX. BX. '}</SemiHeadline2_1><SemiHeadline2_1>{'오채윤'}</SemiHeadline2_1>
                </Line>
                <Line>
                    <SemiHeadline2_1 style={_style}>{'Contact. '}</SemiHeadline2_1><SemiHeadline2_1>{'gongtalk.contact@gmail.com'}</SemiHeadline2_1>
                </Line>
            </TextBox>
        </Container>
    )
}

export default Content;