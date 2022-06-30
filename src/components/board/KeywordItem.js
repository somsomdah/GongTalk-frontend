import { Pressable } from "react-native";
import styled from "styled-components/native";
import { color } from '../../common/colors'
import { SemiHeadline3, SemiHeadline4 } from "../_common/Typography";
import { View } from "react-native";
import AlarmTypeModal from "./AlarmTypeModal";
import { useState } from "react";
import { getBoardKeywordSubscribes, getBoardSubscribes, getCommonKeywordSubscribes } from "api/user/subscribes/get";
import { useQuery } from "react-query";


const Container = styled.View` 
    background-color: ${color.white};
    padding: 16px;
    flex-direction: column;
    align-items: stretch;
    border: 0.5px solid ${color.gray3};
    border-radius: 12px;
    margin-bottom: 12px;
`;

const UpperContainer = styled.View`
    padding-bottom: 12px;
    border-bottom-color: ${color.gray3};
    border-bottom-width: 0.5px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const LowerContainer = styled.View`
    padding-top: 12px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;



const Item = ({ board, navigation }) => {

    const [modalVisible, setModalVisible] = useState(false)
    const [isBoardSubscribe, setIsBoardSubscribe] = useState(false)
    const [keywords, setKeywords] = useState([])

    const isCommonKeywordSubscribe = !Boolean(board)

    useQuery(['subscribes', 'keyword_common'], getCommonKeywordSubscribes, {
        enabled: !Boolean(board),
        onSuccess: (data) => {
            if (!Boolean(board))
                setKeywords(data.map((subscribe) => subscribe.keyword))
        }
    })

    useQuery(["subscribes", "keyword_board", board?.id],
        () => getBoardKeywordSubscribes(board?.id), {
        enabled: Boolean(board),
        onSuccess: (data) => {
            setKeywords(data.map((subscribe) => subscribe.keyword))
        }
    })

    useQuery(["subscribes", "board", board?.id],
        () => getBoardSubscribes(board?.id), {
        enabled: Boolean(board),
        onSuccess: (data) => setIsBoardSubscribe(data.length > 0)
    })

    return (
        <View>
            <Container>
                <UpperContainer>
                    <SemiHeadline3>
                        {isCommonKeywordSubscribe ? '전체 키워드' : `${board?.school?.name} ${board?.name}`}
                    </SemiHeadline3>
                    {isCommonKeywordSubscribe ?
                        <View />
                        :
                        <Pressable onPress={() => setModalVisible(true)} hitSlop={10}>
                            <SemiHeadline4>
                                {isBoardSubscribe ? '전체' : '키워드'}
                            </SemiHeadline4>
                        </Pressable>

                    }
                </UpperContainer>
                <LowerContainer>
                    <SemiHeadline4 style={{ color: isBoardSubscribe ? color.gray4 : color.primary }}>
                        {keywords.map(keyword => `${keyword?.content}, `)}
                    </SemiHeadline4>
                    <Pressable onPress={() => { isBoardSubscribe ? null : navigation.navigate('addKeyword', { boardId: board?.id }) }} hitSlop={10}>
                        <SemiHeadline4 style={{ color: isBoardSubscribe ? color.gray4 : color.black }}>
                            {'설정'}
                        </SemiHeadline4>
                    </Pressable>
                </LowerContainer>
            </Container>

            {
                isCommonKeywordSubscribe ||
                <AlarmTypeModal
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    boardId={board.id}
                    setIsBoardSubscribe={setIsBoardSubscribe}
                    isBoardSubscribe={isBoardSubscribe}
                />
            }
        </View >
    );
}


export default Item