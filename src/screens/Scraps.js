import React, { useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { color } from '../common/colors'
import { image } from '../common/images';
import Item from '../components/alarm/ScrapItem';
import { postList } from '../common/data';
import { useQuery } from 'react-query'
import { getScraps } from 'api/user/scraps';

const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    background-color: ${color.white};
    padding: 0px 24px;
`;

const Scraps = () => {
    const [scraps, setScraps] = useState([])

    useQuery('scraps', getScraps, {
        onSuccess: (data) => {
            setScraps(data)
        }
    })

    return (
        <Container>
            <FlatList showsVerticalScrollIndicator={false}
                data={scraps}
                renderItem={({ item }) => <Item key={item.id} scrap={item} />}
            />
        </Container>
    )
}

export default Scraps;