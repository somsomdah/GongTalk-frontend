import React from 'react';
import styled from 'styled-components/native';
import { color } from '../../common/colors'
import { WebView } from 'react-native-webview';

const Container = styled.View`
    flex-basis: 0;
    flex-grow: 1;
    padding: 12px;
    align-items: stretch;
    /* background-color: ${color.gray1}; */
`;

const ContentBox = ({ notice }) => {
  return (
    <Container>
      <WebView source={{uri: notice.url}} />
    </Container>
  );
}

export default ContentBox;