import { _query } from 'api/_query'


export const createBoardSubscribe = async (boardId) => {
    const response = await _query({
        method: 'POST',
        url: `user/subscribes`,
        auth: true,
        body: {
            type: 'BOARD',
            boardId: boardId
        }
    })

    return response.data
}



export const createCommonKeywordSubscribe = async (keywordContent) => {
    const response = await _query({
        method: 'POST',
        url: 'user/subscribes',
        auth: true,
        body: {
            type: 'KEYWORD_COMMON',
            keywordContent: keywordContent
        }
    })

    return response.data

}

export const createBoardKeywordSubscribe = async (boardId, keywordContent) => {

    const response = await _query({
        method: 'POST',
        url: 'user/subscribes',
        body: {
            type: 'KEYWORD_BOARD',
            boardId: boardId,
            keywordContent: keywordContent
        }
    })

    return response.data

}