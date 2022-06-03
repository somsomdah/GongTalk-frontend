import styled from 'styled-components/native';
import { SemiHeadline2 } from '../_common/Typography'
import { color } from '../../common/colors';
import { TouchableHighlight } from 'react-native';
import OnboardingContext from '../../contexts/Onboarding';
import { useContext, useEffect } from 'react';

const ItemBox = styled.View`
    padding: 12px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
`

const Item = ({board, navigation, setAlertModalVisible }) => {

    const { setBoardList, boardList } = useContext(OnboardingContext)

    const _onPress = () => {

        hasDuplicate = boardList.filter((boardInList) => (boardInList.id == board.id));
        if (hasDuplicate.length) {
            setAlertModalVisible(true)
        } else {
            setBoardList([...boardList, board])
            navigation.goBack()
        }
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
