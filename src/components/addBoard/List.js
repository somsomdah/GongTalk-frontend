import styled from "styled-components/native";
import { image } from "../../common/images";
import { color } from "../../common/colors";
import { ButtonLargeW, SemiHeadline2 } from "../_common/Typography";
import { View, Pressable } from "react-native";
import { useState } from "react";

const Container = styled.View`
    padding: 24px;
    flex-direction: column;
    align-items: stretch;
    flex: 1;
`

const TitleBox = styled.View`
    margin-bottom: 8px;
    flex-direction: row;
    justify-content: flex-start;
`

const TitleText = styled.Text`
    font-size: 12px;
    color: ${color.black};
    line-height: 20px;
`;


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
    source: image.common.cancel
})`
    height: 16px;
    width: 16px;
`;


const Item = ({ value, onCancel }) => {
    return (
        <ItemBox>
            <SemiHeadline2 style={{ color: color.black }}>{value}</SemiHeadline2>
            <Pressable onPress={onCancel}>
                <ItemCancelImage />
            </Pressable>
        </ItemBox>
    );

};

const CompleteButton = styled.View`
    margin: 0px 24px 24px 24px;
    padding: 15px;
    justify-content: center;
    align-items: center;
    background-color: ${color.primary};
    border-radius: 8px;
    
`;

const CompleteButtonPressable = () => {
    return (
        <Pressable>
            <CompleteButton>
                <ButtonLargeW>
                    완료하기
                </ButtonLargeW>
            </CompleteButton>
        </Pressable>
    );
};


const List = ({ boardList, setBoardList }) => {

    const _onBoardCancel = (boardId) => {
        const newBoardList = boardList.filter(board => board.id !== boardId);
        setBoardList(newBoardList);
    }

    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <Container>
                <TitleBox >
                    <TitleText>추가 목록</TitleText>
                </TitleBox>
                {Object.values(boardList).map(board => {
                    const boardFullName = `${board.school.name} ${board.name}`;
                    return (<Item key={board.id} value={boardFullName} onCancel={() => _onBoardCancel(board.id)} />);

                })}
            </Container>
            <CompleteButtonPressable />
        </View>


    )
}

export default List;