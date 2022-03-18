import axios from 'axios'
import ENV_VARS from 'env'

const baseUrl = `${ENV_VARS.apiUrl}`

const printResponse = (method, url, response) => {
    console.log('==========================================')
    console.log(`[METHOD] ${method}`)
    console.log(`[URL] ${url}`)
    console.log(`[STATUS] ${response.status}`);
    console.log(`[RESPONSE] \n${JSON.stringify(response.data, null, 4)}`);
    console.log('==========================================');
}

const printError = (method, url, error) => {
    console.log('==========================================');
    console.log(`[METHOD] ${method}`)
    console.log(`[URL] ${url}`)
    console.log(`[STATUS] ${error.response.status}`);
    console.log(`[ERROR] \n${JSON.stringify(error.response.data, null, 4)}`);
    console.log('==========================================');
}


const _get = async (url, params, authToken) => {

    try {
        const response  = await axios.get(`${baseUrl}/${url}`, {
            params: { params },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': authToken && `Bearer ${authToken}`
            },
        })

        printResponse('GET', url, response)
        return { body: response.data, statusCode: response.status }

    } catch (error) {
        printError('GET', url, error)
        throw error;
    }

};

const _post = async (url, body, authToken) => {
    try {
        const response = await axios.post(`${baseUrl}/${url}`, body, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': authToken && `Bearer ${authToken}`
            },
        })

        printResponse('POST', url, response)
        return { body: response.data, statusCode: response.status }

    } catch (error) {
        printError('POST', url, error)
        throw error;
    }
};

const _patch = async (url, body, authToken) => {
    const { data, status } = await axios.patch(`${baseUrl}/${url}`, body, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': authToken && `Bearer ${authToken}`
        },
    })

    printResponse('PATCH', url, status, data)

    return { body: data, statusCode: status }
};

const _delete = async (url, authToken) => {
    const { data, status } = await axios.delete(`${baseUrl}/${url}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': authToken && `Bearer ${authToken}`
        },
    })

    printResponse('DELETE', url, status, data)

    return { body: data, statusCode: status }
}


// ================================================================================================================== //

// const queryClient = useQueryClient()

// const Exception = (method, error, url) => {
//     console.log('==========================================');
//     console.log(`[API] (${method}) ${url}`)
//     console.log(`[ERROR] ${error.message}`);
//     console.log('==========================================');
// }

// const GET = (keyList, url, params, authToken) => {
//     const { data, error, status } = useQuery(keyList, _get(url, params, authToken))

//     if (status === 'error') {
//         throw new Exception('GET', error.message, url)
//     } else {
//         console.log('==========================================')
//         console.log(`[API] (GET) ${url}`)
//         console.log(`[RESPONSE] ${data}`);
//         console.log('==========================================')
//     }

//     return data;
// };

// const POST = (invalidateKey, url, body, authToken) => {
//     const { data, error, status } = useMutation(_post(url, body, authToken),
//         {
//             onSuccess: () => invalidateKey ? queryClient.invalidateQueries(invalidateKey) : null
//         })

//     if (status === 'error') {
//         throw new Exception('POST', error.message, url)
//     } else {
//         console.log('==========================================')
//         console.log(`[API] (POST) ${url}`)
//         console.log(`[RESPONSE] ${data}`);
//         console.log('==========================================')
//     }

//     return data;
// };

// const PATCH = (invalidateKey, url, body, authToken) => {
//     const { data, error, status } = useMutation(_patch(url, body, authToken),
//         {
//             onSuccess: () => invalidateKey ? queryClient.invalidateQueries(invalidateKey) : null
//         });

//     if (status === 'error') {
//         throw new Exception('POST', error.message, url)
//     } else {
//         console.log('==========================================')
//         console.log(`[API] (PATCH) ${url}`)
//         console.log(`[RESPONSE] ${data}`);
//         console.log('==========================================')
//     }

//     return data;
// };

// const DELETE = (invalidateKey, url, authToken) => {
//     const { data, error, status } = useMutation(_delete(url, authToken), {
//         onSuccess: () => invalidateKey ? queryClient.invalidateQueries(invalidateKey) : null
//     });

//     if (status === 'error') {
//         throw new Exception('POST', error.message, url)
//     } else {
//         console.log('==========================================')
//         console.log(`[API] (DELETE) ${url}`)
//         console.log(`[RESPONSE] ${data}`);
//         console.log('==========================================')
//     }

//     return data;
// };

export {
    _get, _post, _patch, _delete
}