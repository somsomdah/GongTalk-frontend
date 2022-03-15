import axios from 'axios'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import ENV_VARS from 'env'

const baseUrl = `${ENV_VARS.apiUrl}/api/`

const _get = async (url, params, authToken) => {
    const { data, status } = await axios.get(`${baseUrl}/${url}`, {
        params: { params },
        headers: authToken && { 'Authorization': `Bearer ${authToken}` }
    });

    return { body: data, statusCode: status }
};

const _post = async (url, body, authToken) => {
    const { data, status } = await axios.post(`${baseUrl}/${url}`, body, {
        headers: authToken && { 'Authorization': `Bearer ${authToken}` },
    })

    return { body: data, statusCode: status }
};

const _patch = async (url, body, authToken) => {
    const { data, status } = await axios.patch(`${baseUrl}/${url}`, body, {
        headers: authToken && { 'Authorization': `Bearer ${authToken}` },
    })

    return { body: data, statusCode: status }
};

const _delete = async (url, authToken) => {
    const { data, status } = await axios.delete(`${baseUrl}/${url}`, {
        headers: authToken && { 'Authorization': `Bearer ${authToken}` },
    })

    return { body: data, statusCode: status }
}


// ================================================================================================================== //

const queryClient = useQueryClient()

const Exception = (method, error, url) => {
    console.log('==========================================');
    console.log(`[API] (${method}) ${url}`)
    console.log(`[ERROR] ${error.message}`);
    console.log('==========================================');
}

const GET = (keyList, url, params, authToken, options) => {
    const { data, error, status } = useQuery(keyList, _get(url, params, authToken), options)

    if (status === 'error') {
        throw new Exception('GET', error.message, url)
    } else {
        console.log('==========================================')
        console.log(`[API] (GET) ${url}`)
        console.log(`[RESPONSE] ${data}`);
        console.log('==========================================')
    }

    return data;
};

const POST = (invalidateKey, url, body, authToken) => {
    const { data, error, status } = useMutation(_post(url, body, authToken),
        {
            onSuccess: () => invalidateKey ? queryClient.invalidateQueries(invalidateKey) : null
        })

    if (status === 'error') {
        throw new Exception('POST', error.message, url)
    } else {
        console.log('==========================================')
        console.log(`[API] (POST) ${url}`)
        console.log(`[RESPONSE] ${data}`);
        console.log('==========================================')
    }

    return data;
};

const PATCH = (invalidateKey, url, body, authToken) => {
    const { data, error, status } = useMutation(_patch(url, body, authToken),
        {
            onSuccess: () => invalidateKey ? queryClient.invalidateQueries(invalidateKey) : null
        });

    if (status === 'error') {
        throw new Exception('POST', error.message, url)
    } else {
        console.log('==========================================')
        console.log(`[API] (PATCH) ${url}`)
        console.log(`[RESPONSE] ${data}`);
        console.log('==========================================')
    }

    return data;
};

const DELETE = (invalidateKey, url, authToken) => {
    const { data, error, status } = useMutation(_delete(url, authToken), {
        onSuccess: () => invalidateKey ? queryClient.invalidateQueries(invalidateKey) : null
    });

    if (status === 'error') {
        throw new Exception('POST', error.message, url)
    } else {
        console.log('==========================================')
        console.log(`[API] (DELETE) ${url}`)
        console.log(`[RESPONSE] ${data}`);
        console.log('==========================================')
    }

    return data;
};

export {
    GET, POST, PATCH, DELETE
}