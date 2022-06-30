import { _query } from 'api/_query'


export const deleteBoardSubscribe = async (boardId) => {
    const response = await _query({
        method: 'DELETE',
        url: 'user/subscribes',
        body: {
            type: 'BOARD',
            boardId: boardId,
        }
    })
}



export const deleteCommonKeywordSubscribe = async (keywordId) => {
    const response = await _query({
        method: 'DELETE',
        url: 'user/subscribes',
        body: {
            type: 'KEYWORD_COMMON',
            keywordId, keywordId
        }
    })
}

export const deleteBoardKeywordSubscribe = async (boardId, keywordId) => {
    const response = await _query({
        method: 'DELETE',
        url: 'user/subscribes',
        body: {
            type: 'KEYWORD_BOARD',
            boardId: boardId,
            keywordId, keywordId
        }
    })
}

export const deleteSubscribe = async (subscribeId) => {

    const response = await _query({
        method: 'DELETE',
        url: `user/subscribe/${subscribeId}`,
    })

}