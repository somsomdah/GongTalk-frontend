import { _query } from "./_query";


export const getRecommendedKeywordList = async () => {
    const response = await _query({
        method: 'GET',
        url: 'keywords/recommended',
        auth: false
    })

    return response.data
}