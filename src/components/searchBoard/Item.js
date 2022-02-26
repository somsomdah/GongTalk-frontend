import styled from 'styled-components/native';
import { SemiHeadline2 } from '../_common/Typography'
import { color } from '../../common/colors';
import { TouchableHighlight } from 'react-native';


const ItemBox = styled.View`
    padding: 12px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
`

const Item = ({ value, navigation }) => {

    return (

        <TouchableHighlight
            activeOpacity={1}
            underlayColor={color.primaryLight}
            onPress={() => navigation.goBack()}>
            < ItemBox >
                <SemiHeadline2>{value}</SemiHeadline2>
            </ItemBox>
        </TouchableHighlight >


    )
}


export default Item;
