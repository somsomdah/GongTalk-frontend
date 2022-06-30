import styled from "styled-components/native";
import { color } from "../../common/colors";
import { image } from "../../common/images";
import { SemiHeadline3 } from "../_common/Typography";
import Modal from 'react-native-modal';
import { Pressable } from "react-native";
import { useState } from "react";
import { QueryClient, useMutation, useQuery, useQueryClient } from "react-query";
import { createBoardSubscribe, deleteBoardSubscribe } from "api/user/subscribes/delete";



const Container = styled.View`
    position: absolute; 
    left: 32px; 
    right: 32px; 
    top: 220px;
    background-color: ${color.white};
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    padding: 8px 0px;
    border-radius: 12px;
`;

const RadioButtonImage = styled.Image.attrs(({ checked }) => ({
    source: checked ? image.common.radio.primary : image.common.radio.gray
}))`
    width : 16px;
    height: 16px;
`;

const ItemBox = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
`;



const AlarmTypeModal = ({ modalVisible, setModalVisible, boardId, isBoardSubscribe, setIsBoardSubscribe }) => {

    const queryClient = useQueryClient()

    const createBoardSubscribeMutation = useMutation(() => createBoardSubscribe(boardId), {
        onSuccess: () => queryClient.invalidateQueries(["subscribes", "keyword_board", boardId])
    }
    )

    const deleteBoardSubscribeMutation = useMutation(() => deleteBoardSubscribe(boardId), {
        onSuccess: () => queryClient.invalidateQueries(["subscribes", "keyword_board", boardId])
    })

    const setBoardAlarm = (boardId, _isBoardSubscribe) => {
        setIsBoardSubscribe(_isBoardSubscribe)
        if (_isBoardSubscribe) {
            createBoardSubscribeMutation.mutate(boardId)
        } else {
            deleteBoardSubscribeMutation.mutate(boardId)
        }

    }

    return (
        <Modal
            backdropOpacity={0.5}
            isVisible={modalVisible}
            onBackButtonPress={() => setModalVisible(false)}
            onBackdropPress={() => setModalVisible(false)}
        >
            <Container>
                <ItemBox>
                    <SemiHeadline3>
                        {'전체 알림 받기'}
                    </SemiHeadline3>
                    <Pressable onPress={() => setBoardAlarm(boardId, true)} hitSlop={10}>
                        <RadioButtonImage checked={isBoardSubscribe} />
                    </Pressable>
                </ItemBox>
                <ItemBox>
                    <SemiHeadline3>
                        {'키워드 알림 받기'}
                    </SemiHeadline3>
                    <Pressable onPress={() => setBoardAlarm(boardId, false)} hitSlop={10}>
                        <RadioButtonImage checked={!isBoardSubscribe} />
                    </Pressable>
                </ItemBox>
            </Container>
        </Modal>

    );
}


export default AlarmTypeModal