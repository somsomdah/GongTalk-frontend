import { _query } from "./_query";

export const getSchoolList = async () => {

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
        auth: false
    })

    return response.data
}