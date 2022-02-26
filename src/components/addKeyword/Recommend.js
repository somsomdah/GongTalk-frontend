import styled from 'styled-components/native';
import { color } from '../../common/colors';
import { TouchableOpacity } from 'react-native';
import { ButtonMedium } from '../_common/Typography';
import Toast from 'react-native-root-toast';

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


const Recommend = ({ keywordList, myKeywordList, setMyKeywordList }) => {
    const _addKeyword = (keyword) => {
        const includes = myKeywordList.find(myKeyword => myKeyword.id === keyword.id)
        if (includes) {
            Toast.show('동일한 키워드를 여러번 추가할 수 없습니다.', {
                duration: Toast.durations.SHORT,
                position: Toast.positions.BOTTOM,
                backgroundColor: color.gray1,
                containerStyle: { borderRadius: 12, paddingHorizontal: 12},
                textColor: color.black,
                textStyle: {fontFamily: 'pretendard-light', fontSize: 14},
                shadow: false
            });
            return
        }
        setMyKeywordList([...myKeywordList, keyword])
    };
    return (
        <Container>
            {Object.values(keywordList).map(keyword =>
                <TouchableOpacity key={keyword.id} onPress={() => _addKeyword(keyword)} >
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