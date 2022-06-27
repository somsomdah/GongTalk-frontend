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

export const deleteSubscribe = async (subscribeId) => {

  const response = await _query({
    method: 'DELETE',
    url: `user/subscribe/${subscribeId}`,
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


export const getPosts = async (size) => {
  const response = await _query({
    method: 'GET',
    url: 'user/posts',
    params: {
      size: size,
    }
  })

  return response.data
}

export const getUserBoards = async () => {
  const response = await _query({
    method: 'GET',
    url: 'user/boards'
  })

  return response.data
}

export const createUserBoard = async (boardId) => {
  const response = await _query({
    method: 'POST',
    url: `user/boards/${boardId}`
  })
}

export const deleteUserBoard = async (boardId) => {
  const response = await _query({
    method: 'DELETE',
    url: `user/boards/${boardId}`
  })

  return response.data

}

export const updateUserBoardOrder = async (boardId, orderValue) => {
  const response = await _query({
    method: 'PATCH',
    url: `user/boards/${boardId}`,
    body: {
      orderValue: orderValue
    }
  })

  return response.data
}
