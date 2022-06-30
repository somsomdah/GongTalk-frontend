import React from 'react';
import { Pressable, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { color } from '../../common/colors'
import { SemiHeadline3, SmallBody1, SemiHeadline5 } from '../_common/Typography'
import { useQueryClient, useMutation } from 'react-query';


const ItemBox = styled.View`
    background-color: ${color.white};
    align-items: center;
    flex-direction: row;
    padding:16px 14px;
    border-bottom-color: ${color.gray2};
    border-bottom-width: 0.5px;

`;

const ItemImage = styled.Image`
    width: 32px;
    height: 32px;
`;

const ItemTextContainer = styled.View`
    flex-direction: column;
    align-items: stretch;
    padding-left: 16px;
    flex-basis: 0;
    flex-grow: 1;
`;

const ItemInfoContainer = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const ItemInfoDivider = styled.View`
    width: 6px;
    height: 8px;
    margin-left: 6px;
    border-left-color: ${color.gray3};
    border-left-width: 1px;
`;

const Item = ({ alarm, navigation }) => {
    const post = alarm.post

    // const queryClient = useQueryClient()

    // const setAlarmReadMutation = useMutation(setAlarmRead, {
    //     onSuccess: () => {
    //         queryClient.invalidateQueries('alarms')
    //     }
    // })

    return (
        <ItemBox>
            <ItemImage source={{ uri: post.board.school.image }} />
            <ItemTextContainer>
                <TouchableOpacity onPress={() => {

                    navigation.navigate('postDetail', { post: post })
                }}>
                    <SemiHeadline3
                        ellipsizeMode='tail'
                        numberOfs={2}
                        style={{ marginBottom: 6 }}>{post.title}
                    </SemiHeadline3>
                    <ItemInfoContainer>
                        <SemiHeadline5>{`${post.board.school.name} ${post.board.name}`}</SemiHeadline5>
                        <ItemInfoDivider />
                        <SemiHeadline5>{post.writer}</SemiHeadline5>
                        <ItemInfoDivider />
                        <SemiHeadline5 style={{ color: color.gray5 }}>{post.date}</SemiHeadline5>
                    </ItemInfoContainer>
                </TouchableOpacity>
            </ItemTextContainer>
        </ItemBox>
    )
}


export default Item;