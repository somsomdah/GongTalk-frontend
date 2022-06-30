import { _query } from 'api/_query'
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
