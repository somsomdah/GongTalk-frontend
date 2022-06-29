import { _query } from 'api/_query'

export const getCommonKeywordSubscribes = async () => {
    const response = await _query({
        method: 'GET',
        url: 'user/subscribes',
        params: {
            type: "KEYWORD_COMMON",
        }
    })

    return response.data
}

export const getBoardKeywordSubscribes = async (boardId) => {
    const response = await _query({
        method: 'GET',
        url: 'user/subscribes',
        params: {
            type: "KEYWORD_BOARD",
            boardId: boardId
        }
    })

    return response.data
}

export const getBoardSubscribes = async (boardId) => {
    const response = await _query({
        method: 'GET',
        url: 'user/subscribes',
        params: {
            type: "BOARD",
            boardId: boardId,
        }
    })

    return response.data
}