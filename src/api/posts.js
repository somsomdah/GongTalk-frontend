import { _query } from "./_query";

export const getPostsByBoardId = async (boardId) => {
    const response = await _query({
        method: 'GET',
        url: `posts`,
        params: {
            boardId: boardId
        },
        auth: false
    })

    return response.data
}

export const getPostById = async (id) => {
    const response = await _query({
        method: 'GET',
        url: `posts/${id}`,
        auth: false
    })

    return response.data
}