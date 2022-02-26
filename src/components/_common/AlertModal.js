import styled from "styled-components/native";
import { image } from "../../common/images";
import { color } from "../../common/colors";
import { Pressable, View } from 'react-native';
import { useState } from "react";
import Modal from 'react-native-modal';
import { SemiHeadline3 } from "./Typography";

const Container = styled.View`
    position: absolute; 
    left: 32px; 
    right: 32px; 
    top: 220px;
    background-color: ${color.white};
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    padding: 20px 24px;
    border-radius: 12px;
`;

const AlertModal = ({ isVisible, setIsVisible, value }) => {

    return (
        <Modal
            backdropOpacity={0.5}
            isVisible={isVisible}
            onBackButtonPress={() => setIsVisible(false)}
            onBackdropPress={() => setIsVisible(false)}>
            <Container>
                <View style={{marginBottom: 24}}>
                    <SemiHeadline3>
                    {value}
                    </SemiHeadline3>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end'}} >
                    <Pressable hitSlop={10} onPress={() => setIsVisible(false)}>
                    <SemiHeadline3 style={{color: color.primary}}>
                        {'확인'}
                    </SemiHeadline3>
                    </Pressable>
                </View>
            </Container>
        </Modal>
    )
}

export default AlertModal;