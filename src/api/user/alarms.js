import { _query } from 'api/_query'

export const getAlarms = async (page = null, size = null) => {
    const response = await _query({
        method: 'GET',
        url: `user/alarms`,
        params: {
            page: page,
            size: size
        }
    })

    return response.data
}
