import styled from 'styled-components/native';
import { color } from '../../common/colors';
import { image } from '../../common/images';
import { Pressable } from 'react-native';
import { useRef, useState } from 'react';
import { ButtonMedium } from '../_common/Typography';

const Chip = styled.View`
    padding: 6.5px 14px;
    border-radius: 12px;
    border: 1px solid ${color.black};
    margin-right: 8px;
    margin-bottom: 10px;
`;

const Container = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 12px;
`;


const Recommend = ({keywordList,  myKeywordList, setMyKeywordList}) => {
    const _addKeyword = (keyword) => {
        const includes = myKeywordList.find(myKeyword => myKeyword.id === keyword.id)
        if (includes){
            return
        }
        setMyKeywordList([...myKeywordList, keyword])
    };
    return (
        <Container>
            {Object.values(keywordList).map(keyword =>
            <Pressable key={keyword.id} onPress={() => _addKeyword(keyword)}>
                <Chip >
                    <ButtonMedium >
                        {keyword.content}
                    </ButtonMedium>
                </Chip>
            </Pressable>

            )}
        </Container>
    );
}

export default Recommend