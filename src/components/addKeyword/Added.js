import styled from 'styled-components/native';
import { color } from '../../common/colors';
import { image } from '../../common/images';
import { Pressable, TouchableOpacity } from 'react-native';
import { useRef, useState } from 'react';
import { ButtonMediumW } from '../_common/Typography';

const Chip = styled.View`
    padding: 6.5px 14px;
    border-radius: 12px;
    margin-right: 8px;
    margin-bottom: 10px;
    background-color: ${color.primary};
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Container = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 16px;
`;

const CancelImage = styled.Image`
    margin-left: 8px;
    width: 16px;
    height: 16px;
`


const  Added = ({keywordList, setKeywordList}) => {
    
    onCancelButtonPress = (keywordId) => {
        const newKeywordList = keywordList.filter(keyword => keyword.id !== keywordId);
        setKeywordList(newKeywordList);
    }

    return (
        <Container>
            {Object.values(keywordList).map(keyword =>
                <Chip key={keyword.id}>
                    <ButtonMediumW >
                        {keyword.content}
                    </ButtonMediumW>
                    <TouchableOpacity onPress={() => onCancelButtonPress(keyword.id)}>
                        <CancelImage source={image.common.cancel.white}/>
                    </TouchableOpacity>
                </Chip>
            )}
        </Container>
    );
}

export default Added