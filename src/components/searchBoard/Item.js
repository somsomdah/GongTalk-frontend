import styled from 'styled-components/native';
import { color } from '../../common/colors';
import { image } from '../../common/images';
import { Pressable } from 'react-native';
import { useRef, useState } from 'react';
import {SemiHeadline2} from '../_common/Typography'


const ItemBox = styled.Pressable`
    padding: 16px 24px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
`

const Item = (value, navigation) => {
    return(
        <ItemBox onPress={() => navigation.goBack()}>
            <SemiHeadline2>{value}</SemiHeadline2>
        </ItemBox>
    )
}


export default Item;
