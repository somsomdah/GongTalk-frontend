import React, { useState } from 'react';
import styled from 'styled-components/native';
import { color } from '../../common/colors'
import Markdown from 'react-native-markdown-display';

const Container = styled.View`
    flex-basis: 0;
    flex-grow: 1;
    padding: 16px;
    align-items: stretch;
`;

const ScrollContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 30 },
})``;

const ContentBox = ({ notice }) => {
  const [rawMd, setRawMd] = useState('')

  fetch("https://raw.githubusercontent.com/somsomdah/test/main/Vivace%204e91a.md").then((response) => { response.text().then((raw) => { setRawMd(raw) }) })
  return (
    <Container>
      <ScrollContainer>
        <Markdown>
          {rawMd}
        </Markdown>
      </ScrollContainer>
    </Container>
  );
}

export default ContentBox;