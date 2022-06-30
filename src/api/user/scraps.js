import { _query } from 'api/_query'

export const getScraps = async () => {
    const response = await _query({
        method: 'GET',
        url: `user/scraps`,
    })

    return response.data
}

export const getScrapsByPostId = async (postId) => {
    const response = await _query({
        method: 'GET',
        url: `user/scraps`,
        params: {
            postId: postId
        }
    })

    return response.data
}

export const createScrap = async (postId) => {
    const response = await _query({
        method: 'POST',
        url: `user/scraps`,
        body: {
            postId: postId
        }
    })

}

export const deleteScrap = async (scrapId) => {
    const response = await _query({
        method: 'DELETE',
        url: `user/scraps/${scrapId}`,
    })

}