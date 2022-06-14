import { _query } from './_query'
import { getUniqueId } from 'utils/device';

export const createUser = async () => {

  const response = await _query({
    method: 'POST',
    url: 'user',
    body: { deviceNum: await getUniqueId() },
    auth: false
  });

  console.log("dddddd")

  return response.data;
}

export const createUserBoard = async (boardId) => {
  const response = await _query({
    method: 'POST',
    url: `user/boards/${boardId}`
  })
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


export const getSubscribesCommonKeyword = async () => {
  const response = await _query({
    method: 'GET',
    url: 'user/subscribes',
    params: {
      type: "KEYWORD_COMMON",
    }
  })

  return response.data
}

export const getSubscribesBoardKeyword = async (boardId) => {
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

export const getSubscribesBoard = async (boardId) => {
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