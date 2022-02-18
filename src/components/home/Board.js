import React, { useState } from 'react';
import {Pressable} from 'react-native';
import styled from "styled-components/native";
import { color } from '../../common/colors';
import { image } from "../../common/images";

const Container = styled.View`
    margin-bottom: 32px;
    flex-direction: column;
    align-items: stretch;
`;

const TitleContainer = styled.View`
    padding-bottom: 16px;
    justify-content: flex-start;
`;

const Title = styled.Text`
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
`;

const ContentContainer = styled.View``;

const ItemBox = styled.View`
    border-radius: 12px;
    border: 0.5px solid ${color.gray3};
    padding: 16px;
    margin-bottom: 8px;
    flex-direction: column;
    flex: 1;
`;

const TopBox = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const Writer = styled.Text`
    font-size: 10px;
    font-weight: 400;
    color: ${color.black};
`;

const DateBox = styled.View.attrs({
    borderLeftColor: color.gray3,
    borderLeftWidth: 1,
})`
    padding-left: 8px;
    margin-left: 8px;
`;

const Date = styled.Text`
    font-size: 10px;
    font-weight: 400;
    color: ${color.gray6};
`;

const StarButtonBox = styled.View`
    flex-grow: 1;
    justify-content: flex-end;
    flex-direction: row;
`;

const Star = styled.Image`    
    height: 18px;
    width: 18px;
`;

const StarButton = ({ id, onPressOut, starred }) => {
    const _onPressOut = () => {
        onPressOut(id);
    }
    
    return (
        <Pressable onPressOut={_onPressOut} hitSlop={50}>
            <Star source={starred ? image.star.filled : image.star.unfilled} />
        </Pressable>
    )
}

const ItemTitleBox = styled.TouchableOpacity`
    flex-shrink: 1;
    margin: 6px 0px 8px 0px;
`;

const ItemTitle = styled.Text.attrs({ ellipsizeMode: 'tail', numberOfLines: 2 })`
    color: ${color.black}
    font-size: 14px;
    font-weight: 400;
    line-height: 20.8px;
`;

const TagBox = styled.View`
    justify-content: flex-start;
    flex-direction: row;
`;

const Tag = styled.Text`
    margin-right: 4px;
    color: ${color.primary};
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
`;

const Item = ({ id, writer, date, title, tagList, toggleStar, starred }) => {
    return (
        <ItemBox>
            <TopBox>
                <Writer>{writer}</Writer>
                <DateBox><Date>{date}</Date></DateBox>
                <StarButtonBox><StarButton id={id} onPressOut={toggleStar} starred={starred} /></StarButtonBox>
            </TopBox>
            <ItemTitleBox>
                <ItemTitle>{title}</ItemTitle>
            </ItemTitleBox>
            <TagBox>
                {Object.values(tagList).map(tag => (
                    <Tag key={tag.id}>{tag.content}</Tag>
                ))}
            </TagBox>
        </ItemBox>
    );
}


const Board = () => {

    const [items, setItems] = useState([
        {
            id: 1,
            writer: '산학협력관',
            date: '2022.01.04',
            title: '공지사항의 제목을 적는 구간입니다. 2줄까지 화면에 노출시킬 수 있습니다. 공지사항의 제목을 적는 구간입니다. 공지사항의 제목을 적는 구간입니다',
            tagList: [{ id: 1, content: '#인턴' }, { id: 2, content: '#학회' }, { id: 3, content: '#교내' }],
            starred: false
        },
        {
            id: 2,
            writer: '산학협력관',
            date: '2022.01.04',
            title: '공지사항의 제목을 적는 구간입니다. 2줄까지 화면에 노출시킬 수 있습니다. 공지사항의 제목을 적는 구간입니다. 공지사항의 제목을 적는 구간입니다',
            tagList: [{ id: 1, content: '#인턴' }, { id: 2, content: '#학회' }, { id: 3, content: '#교내' }],
            starred: false
        },
        {
            id: 3,
            writer: '산학협력관',
            date: '2022.01.04',
            title: '공지사항의 제목을 적는 구간입니다. 2줄까지 화면에 노출시킬 수 있습니다. 공지사항의 제목을 적는 구간입니다.',
            tagList: [{ id: 1, content: '#인턴' }, { id: 2, content: '#학회' }, { id: 3, content: '#교내' }],
            starred: false
        },
    ]);

    const _toggleStar = id => {
        const currentItems = items.map(item => {
            if (item.id === id) {
                item.starred = !item.starred
            }
            return item
        })
        setItems(currentItems);
    };

    return (
        <Container>
            <TitleContainer>
                <Title>이화여대 컴퓨터공학과</Title>
            </TitleContainer>

            <ContentContainer>
                {Object.values(items).map(item =>
                    <Item
                        key={item.id}
                        id={item.id}
                        writer={item.writer}
                        date={item.date}
                        title={item.title}
                        tagList={item.tagList}
                        starred={item.starred}
                        toggleStar={_toggleStar} />
                )}
            </ContentContainer>
        </Container >

    );
};

export default Board;