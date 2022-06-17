import styled from 'styled-components/native';
import { SemiHeadline2 } from '../_common/Typography'
import { color } from '../../common/colors';
import { TouchableHighlight } from 'react-native';
import { useMutation, useQueryClient } from 'react-query'
import { createUserBoard } from '../../api/user';

const ItemBox = styled.View`
    padding: 12px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
`

const Item = ({ board, navigation }) => {

    const queryClient = useQueryClient()

    const createUserBoardMutation = useMutation((boardId) => createUserBoard(boardId),
        {
            onSuccess: () =>
                queryClient.invalidateQueries('user_boards')
        }
    )

    const _onPress = () => {
        createUserBoardMutation.mutate(board.id)
        navigation.goBack()
    };

    return (
        <TouchableHighlight
            activeOpacity={1}
            underlayColor={color.primaryLight}
            onPress={_onPress}>
            < ItemBox >
                <SemiHeadline2>{board.name}</SemiHeadline2>
            </ItemBox>
        </TouchableHighlight >

    );
};


export default Item;
