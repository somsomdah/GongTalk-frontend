import { _query } from 'api/_query'

export const getSettings = async () => {

    const response = await _query({
        method: 'GET',
        url: 'user/setting',
    });

    return response.data;
}