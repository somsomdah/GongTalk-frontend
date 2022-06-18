import styled from "styled-components/native";
import { color } from "../common/colors";
import { useState } from "react";
import Header from "../components/addKeyword/Header";
import Input from '../components/addKeyword/Input'
import Title from '../components/addKeyword/Title'
import Recommend from '../components/addKeyword/Recommend'
import Added from "../components/addKeyword/Added";
import { ScrollView } from "react-native";
import AlertModal from "../components/_common/AlertModal";
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getBoardKeywordSubscribes, getCommonKeywordSubscribes, createBoardKeywordSubscribe, createCommonKeywordSubscribe } from "../api/user";

const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    background-color: ${color.white};
`;

const UpperContainer = styled.View`
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    padding: 20px 24px;
    border-bottom-color: ${color.gray3};
    border-bottom-width: 0.5px;
`

const LowerContainer = styled.View`
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    padding: 20px 24px;
    flex: 1;
`

const AddKeyword = ({ route, navigation }) => {

    const queryClient = useQueryClient()
    const [myKeywords, setMyKeywords] = useState([])
    const [alertModalVisible, setAlertModalVisible] = useState(false);

    const { boardId } = route.params


    const getBoardKeywordSubscribesQuery = useQuery(`keywords_board__board_${boardId}`, (boardId) => getBoardKeywordSubscribes(boardId),
        {
            enabled: Boolean(boardId),
            onSuccess: (data) => {
                setMyKeywords(data.map((subscribe) => subscribe.keyword))
            }
        }
    )

    const getCommonKeywordSubscribesQuery = useQuery(`keywords_common`, getCommonKeywordSubscribes,
        {
            enabled: !Boolean(boardId),
            onSuccess: (data) => {
                setMyKeywords(data.map((subscribe) => subscribe.keyword))
            }
        }
    )


    const createBoardKeywordSubscribeMutation = useMutation(
        (boardId, keywordContent) => {
            createBoardKeywordSubscribe(boardId, keywordContent)
        },
        {
            onSuccess: (data) => {
                console.log(22222, data)
                queryClient.invalidateQueries(`keywords_board__board_${boardId}`)
                getBoardKeywordSubscribesQuery.refetch()
            }
        }
    )

    const createCommonKeywordSubscribeMutation = useMutation(
        (keywordContent) => {
            createCommonKeywordSubscribe(keywordContent)
        },
        {
            onSuccess: (data) => {
                console.log(11111, data)
                queryClient.invalidateQueries('keywords_common')
                getCommonKeywordSubscribesQuery.refetch()
            }
        }
    )


    const _addKeyword = (keyword) => {
        const includes = myKeywords.find(myKeyword => myKeyword.content === keyword.content)
        if (includes) {
            setAlertModalVisible(true)
            return
        }
        if (boardId)
            createBoardKeywordSubscribeMutation.mutate(boardId, keyword.content)
        else
            createCommonKeywordSubscribeMutation.mutate(keyword.content)

    };


    return (
        <Container>
            <Header navigation={navigation} value={'키워드 설정'} />
            <UpperContainer>
                <Title value={'키워드 입력하기'} />
                <Input
                    addKeyword={_addKeyword}
                />
                <Title value={'추천 키워드'} />
                <Recommend
                    addKeyword={_addKeyword}
                />
            </UpperContainer>
            <LowerContainer>
                <Title value={'내 키워드'} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Added
                        keywordList={myKeywords}
                        // setKeywordList={setMyKeywords}
                        boardId={boardId}
                    />
                </ScrollView>
            </LowerContainer>


            <AlertModal
                isVisible={alertModalVisible}
                setIsVisible={setAlertModalVisible}
                value={'동일한 키워드를 여러번 추가할 수 없습니다.'}
            />


        </Container>
    );

}

export default AddKeyword;

export { Header, Input, Title, Recommend, Added, Container, UpperContainer, LowerContainer }