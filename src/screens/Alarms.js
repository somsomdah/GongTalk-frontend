import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { color } from '../common/colors'
import { image } from '../common/images';
import Item from '../components/alarm/AlarmItem';
import { postList } from '../common/data';
import { useQuery } from 'react-query';
import { getAlarms } from 'api/user/alarms';

const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    background-color: ${color.white};
`;

const Alarms = ({ navigation }) => {
    const [page, setPage] = useState(0)
    const pageSize = 10
    const [alarms, setAlarms] = useState([])

    // 이부분 페이지네이션

    const getAlarmsQuery = useQuery('alarms', () => getAlarms(page, pageSize), {
        onSuccess: (data) => {
            setAlarms(data)
        }
    })

    useEffect(() => getAlarmsQuery.refetch(), [])

    const getNextPage = () => {
        setPage(page + 1);
        getAlarmsQuery.refetch();
    }

    return (
        <Container>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={alarms}
                renderItem={({ item }) => <Item key={item.id} alarm={item} navigation={navigation} />}
                onEndReached={getNextPage}
            />
        </Container>
    )
}

export default Alarms;