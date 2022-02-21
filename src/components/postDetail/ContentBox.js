import React from 'react';
import styled from 'styled-components/native';
import { color } from '../../common/colors'
import RenderHtml from 'react-native-render-html';
import { View } from 'react-native';

const Container = styled.View`
    flex-basis: 0;
    flex-grow: 1;
    padding: 20px 24px;
    align-items: stretch;
`;

const ScrollContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 30 },
})
  ``;

const FileContainer = styled.View`
  background-color: ${color.gray2};
  border-radius: 12px;
  justify-content: flex-start;
  margin-bottom: 16px;
  padding: 14px 16px;
  flex-wrap: wrap;
`;

const ContentBox = ({ post }) => {
  return (
    <Container>
      <ScrollContainer>
        {/* {post.file &&
          <FileContainer>
            <RenderHtml
              contentWidth={1}
              source={{html: post.file}}
            />
          </FileContainer>} */}
          <View>
            <RenderHtml contentWidth={1} source={{html: post.content}}/>
          </View>
      </ScrollContainer>


    </Container>
  );
}

export default ContentBox;