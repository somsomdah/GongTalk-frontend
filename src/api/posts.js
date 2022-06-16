import { _query } from "./_query";

export const getPostById = async (id) => {
    const response = await _query({
        method: 'GET',
        url: `boards/${id}/posts`,
        auth: false
    })

    return response.data
}