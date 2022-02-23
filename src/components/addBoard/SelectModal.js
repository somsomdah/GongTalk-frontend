import styled from "styled-components/native";
import { image } from "../../common/images";
import { color } from "../../common/colors";
import { Pressable } from 'react-native';
import { useState } from "react";
import Modal from 'react-native-modal';
import { SemiHeadline3 } from "../_common/Typography";


const Container = styled.View`
    position: absolute; 
    left: 30px; 
    right: 30px; 
    top: 200px;
    background-color: ${color.white};
    flex-direction: column;
    align-items: stretch;
    padding: 5px 0px;
    border-radius: 12px;
`;

const ItemBox = styled.View`
    padding: 18px 26px;
    flex-direction: row;
    align-items: center;
    justify-content: ${({ selected }) => selected ? 'space-between' : 'flex-start'};
`;

const ItemCheckIcon = styled.Image`
    width: 18px;
    height: 18px;
`;

const Item = ({ value, selected, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <ItemBox selected={selected}>
                <SemiHeadline3 style={{color: selected? color.primary : color.black}}>{value}</SemiHeadline3>
                {!selected || <ItemCheckIcon source={image.common.selected} />}
            </ItemBox>
        </Pressable>

    )
}

const SelectModal = ({ isVisible, setIsVisible, schoolList, selectedSchool, select }) => {

    return (
        <Modal
            backdropOpacity={0.5}
            isVisible={isVisible}
            onBackButtonPress={() => setIsVisible(false)}
            onBackdropPress={() => setIsVisible(false)}>
            <Container>
                {Object.values(schoolList).map(school =>
                    <Item
                        key={school.id}
                        value={school.name}
                        selected={school.id === selectedSchool?.id}
                        onPress={() => { select(school) }}
                    />)}
            </Container>
        </Modal>
    )
}

export default SelectModal;