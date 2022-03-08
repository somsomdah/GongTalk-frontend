import { Pressable } from "react-native";
import styled from "styled-components/native";
import { color } from "../../common/colors";
import { image } from "../../common/images";
import { SemiHeadline2, SemiHeadline4 } from "../_common/Typography";

const Container = styled.View`
    padding: 20px 24px 28px 20px;
    flex-direction: column;
    align-items: stretch;
`;

const TitleBox = styled.View`
    padding-bottom: 16px;
    flex-direction: row;
    justify-content: flex-start;
`

const ItemBox = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 12px 0px;
    justify-content: space-between;
`;

const NextImage = styled.Image.attrs({
    source: image.common.next
})`
    height: 16px;
    width: 16px;
`;

const Item = ({ value, onNextPress }) => {

    return (
        <Pressable onPress={onNextPress}>
            <ItemBox>
                <SemiHeadline2 >{value}</SemiHeadline2>
                <NextImage />
            </ItemBox>
        </Pressable>


    );
}

const Etc = ({ navigation }) => {
    return (
        <Container>
            <TitleBox>
                <SemiHeadline4>기타</SemiHeadline4>
            </TitleBox>
            <Item value={'공지사항'} onNextPress={() => navigation.navigate('notice')} />
            <Item value={'팀소개'}  onNextPress={() => navigation.navigate('teamInfo')}/>
            <Item value={'오픈소스'} />
        </Container>
    );
}


export default Etc;