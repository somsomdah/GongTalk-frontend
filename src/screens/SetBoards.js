import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { color } from '../themes/colors';


const Container = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false
})`
    background-color: ${color.white};
    flex: 1;
`;

const InnerContainer = styled.View`
    flex-direction: column;
    padding: 10px 0px;
    align-items: stretch;
`;

const ItemText = styled.Text`
    font-size: 16px;
    line-height: 24px;
    color: ${color.black};
`

const ItemBox = styled.View`
    padding: 16px 24px
    flex-direction: row;
    align-items: center;
`;

const Item = ({ children }) => {
    return (
        <ItemBox>
            <Pressable hitSlop={20}>
                <ItemText>{children}</ItemText>
            </Pressable>
        </ItemBox>
    );
};


const SetBoards = () => {
    return (
        <Container>
            <InnerContainer>
                <Item>이화여자대학교 컴퓨터공학과</Item>
                <Item>서강대학교 컴퓨터공학과</Item>
                <Item>연세대학교 컴퓨터공학과</Item>
                <Item>이화여자대학교 엘텍공과대학</Item>
            </InnerContainer>
        </Container>

    )
}

export default SetBoards;