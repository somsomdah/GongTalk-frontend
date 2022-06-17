import { _query } from "./_query";

export const getSchools = async () => {

    const response = await _query({
        method: 'GET',
        url: 'boards/schools',
        auth: false
    })

    return response.data
}

export const getBoardsBySchoolId = async (id) => {
    const response = await _query({
        method: 'GET',
        url: 'boards',
        params: {
            schoolId: id
        },
        auth: false
    })

    return response.data
}

export const getPostsByBoardId = async (id) => {
    const response = await _query({
        method: 'GET',
        url: `boards/${id}/posts`,
        params: {
            size: 3
        },
        auth: false
    })

    return response.data
}