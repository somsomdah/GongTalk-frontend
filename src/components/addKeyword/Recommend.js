import styled from 'styled-components/native';
import { color } from '../../common/colors';
import { TouchableOpacity } from 'react-native';
import { ButtonMedium } from '../_common/Typography';
import { useState } from "react";
import { useQuery } from 'react-query';
import { getRecommendedKeywords } from 'api/keywords'

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


const Recommend = ({ addKeyword }) => {

    const [recommendedKeywordList, setRecommendedKeywordList] = useState([])

    useQuery('keywords_recommended', getRecommendedKeywords,
        {
            onSuccess: (data) => setRecommendedKeywordList(data)
        }
    )

    return (
        <Container>
            {Object.values(recommendedKeywordList).map(keyword =>
                <TouchableOpacity key={keyword.id} onPress={() => addKeyword(keyword.content)} >
                    <Chip >
                        <ButtonMedium >
                            {keyword.content}
                        </ButtonMedium>
                    </Chip>
                </TouchableOpacity>
            )}
        </Container>
    );
}

export default Recommend