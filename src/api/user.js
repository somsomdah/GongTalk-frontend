import { _query } from './_query'
import { getUniqueId } from 'utils/device';

export const createUser = async () => {

  const response = await _query({
    method: 'POST',
    url: 'user',
    body: { deviceNum: await getUniqueId() },
    auth: false
  });

  return response.data;
}

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
}