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


const Added = ({ keywordList, boardId }) => {

    // onCancelButtonPress = (keywordContent) => {
    // 키워드 삭제하는 API 붙이기
    //     const newKeywordList = keywordList.filter(keyword => keyword.content !== keywordContent);
    // }

    return (
        <Container>
            {Object.values(keywordList).map(keyword =>
                <Chip key={keyword.content}>
                    <ButtonMediumW >
                        {keyword.content}
                    </ButtonMediumW>
                    <TouchableOpacity onPress={() => onCancelButtonPress(keyword.content)}>
                        <CancelImage source={image.common.cancel.white} />
                    </TouchableOpacity>
                </Chip>
            )}
        </Container>
    );
}

export default Added