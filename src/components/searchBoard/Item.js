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

// 원래는 파라미터로 setBoardList 있음 : auth로 인증한 다음에 무슨 함수 쓸 지 결정하는 프로세스
const Item = ({ board, navigation}) => {

    const { setBoardList } = useContext(OnboardingContext);
    // const {auth} = useContext
    const _onPress = () => {

        // if (auth) {
        //     setBoardList(prevBoardList => ([...prevBoardList, board]))
        // } else {
            setBoardList(prevBoardList => ([...prevBoardList, board]))
        // }

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
