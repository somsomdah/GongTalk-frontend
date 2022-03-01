import styled from "styled-components/native";
import { color } from "../../common/colors";
import { image } from "../../common/images";
import { SemiHeadline3 } from "../_common/Typography";
import Modal from 'react-native-modal';
import { Pressable } from "react-native";
import { useState } from "react";


const Container = styled.View`
    position: absolute; 
    left: 32px; 
    right: 32px; 
    top: 220px;
    background-color: ${color.white};
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    padding: 8px 0px;
    border-radius: 12px;
`;

const RadioButtonImage = styled.Image.attrs(({checked}) => ({
    source: checked ? image.common.radio.primary : image.common.radio.gray
}))`
    width : 16px;
    height: 16px;
`;

const ItemBox = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
`;



const AlarmTypeModal = ({ visible, setVisible }) => {

    const [isBoardAlarm, setIsBoardAlarm] = useState(true);

    const _onPress = () => {
        setIsBoardAlarm(!isBoardAlarm);
    }

    return (
        <Modal
            backdropOpacity={0.5}
            isVisible={visible}
            onBackButtonPress={() => setVisible(false)}
            onBackdropPress={() => setVisible(false)}
        >
            <Container>
                <ItemBox>
                    <SemiHeadline3>
                        {'전체 알림 받기'}
                    </SemiHeadline3>
                    <Pressable onPress={_onPress} hitSlop={10}>
                        <RadioButtonImage checked={!isBoardAlarm} />
                    </Pressable>
                </ItemBox>
                <ItemBox>
                    <SemiHeadline3>
                        {'키워드 알림 받기'}
                    </SemiHeadline3>
                    <Pressable onPress={_onPress} hitSlop={10}>
                        <RadioButtonImage checked={isBoardAlarm} />
                    </Pressable>
                </ItemBox>
            </Container>
        </Modal>

    );
}


export default AlarmTypeModal