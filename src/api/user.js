import { _query } from './_query'
import { getUniqueId } from 'utils/device';

// method, url, params, body, auth=true, urlBase=true
export const createUser = async () => {

  const response = await _query({
    method: 'POST',
    url: 'user',
    body: { deviceNum: await getUniqueId() },
    auth: false
  });

  return response;
}