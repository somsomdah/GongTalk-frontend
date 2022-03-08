import React from 'react';
import styled from 'styled-components/native';
import { color } from '../../common/colors'
import WebView from 'react-native-webview';
import ENV_VARS from 'env';

const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    background-color: ${color.white};
`;


const Page = () => {
    const { noticeUrl } = ENV_VARS.notion;
    return (
        <Container>
            <WebView source={{ uri: noticeUrl}} />
        </Container>
    )
}

export default Page;