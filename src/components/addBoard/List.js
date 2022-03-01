import styled from "styled-components/native";
import { image } from "../../common/images";
import { color } from "../../common/colors";
import { SemiHeadline3, SemiHeadline4 } from "../_common/Typography";
import { Pressable, ScrollView } from "react-native";
import { useContext } from "react";
import OnboardingContext from "../../contexts/Onboarding";

const Container = styled.View`
    padding: 24px;
    flex-direction: column;
    align-items: stretch;
    flex: 1;
    flex-direction: column;
`

const TitleBox = styled.View`
    margin-bottom: 8px;
    flex-direction: row;
    justify-content: flex-start;
`

const ItemBox = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background-color: ${color.primaryLight};
    border-radius: 16px;
    margin-top: 8px;
`;

const ItemCancelImage = styled.Image.attrs({
    source: image.common.cancel.black
})`
    height: 16px;
    width: 16px;
`;


const Item = ({ value, onCancel }) => {
    return (
        <ItemBox>
            <SemiHeadline3 style={{ color: color.black }} >{value}</SemiHeadline3>
            <Pressable onPress={onCancel} hitSlop={10}>
                <ItemCancelImage />
            </Pressable>
        </ItemBox>
    );

};


const List = () => {

    const { boardList, setBoardList } = useContext(OnboardingContext);

    return (
        <Container>
            <TitleBox >
                <SemiHeadline4>추가 목록</SemiHeadline4>
            </TitleBox>
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                {Object.values(boardList).map(board => {
                    const boardId = board.id;
                    const boardFullName = `${board.school.name} ${board.name}`;
                    return (
                        <Item
                            key={boardId}
                            value={boardFullName}
                            onCancel={() => setBoardList(boardList.filter(board => board.id !== boardId))}
                        />
                    );

                })}
            </ScrollView>
        </Container>

    )
}

export default List;