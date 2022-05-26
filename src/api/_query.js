import axios from 'axios'
import ENV_VARS from 'env'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useQuery, useMutation } from 'react-query'
import { getUniqueId } from 'utils/device';



const baseUrl = `${ENV_VARS.apiUrl}`

const _query = async ({ method, url, params = null, body = null, auth = true, urlBase = true }) => {

    const urlWithBase = urlBase ? `${baseUrl}/${url}` : url;

    try {

        const response = await axios(
            {
                method: method,
                url: urlWithBase,
                params: params,
                data: body,
                headers: Object.assign({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',

                }, auth && { 'Authorization': `Bearer ${await AsyncStorage.getItem('accessToken')}` }),

            }
        )

        printResponse(method, urlWithBase, response)

        return response

    } catch (error) {

        printError(method, urlWithBase, error)

        if (auth && error.response?.status == HTTP_STATUS.UNAUTHORIZED) {
            await issueAuthToken();
            const response = await axios(
                {
                    method: method,
                    url: urlWithBase,
                    params: params,
                    data: body,
                    headers: Object.assign({
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${await AsyncStorage.getItem('accessToken')}`
                    }),

                }
            )
            return response;

        } else {
            throw error;
        }

    }
}



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
    console.log(`[STATUS] ${error.response?.status}`);
    console.log(`[ERROR] \n${JSON.stringify(error.response?.data || error.message, null, 4)}`);
    console.log('==========================================');
}


// ======================================================================== //

const HTTP_STATUS = {

    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,

    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,

    INTERNAL_SERVER_ERROR: 500,

}


// ======================================================================== //

const login = async () => {

    const body = { deviceNum: await getUniqueId() }

    try {
        const response = await _query({
            method: 'POST',
            url: 'auth/login',
            params: null,
            body: body,
            auth: false
        })
        const { refreshToken, accessToken } = response.data;
        await AsyncStorage.setItem('refreshToken', refreshToken);
        await AsyncStorage.setItem('accessToken', accessToken);

    } catch (error) {
        throw error
    }

}

const issueAuthToken = async () => {

    const body = { refreshToken: await AsyncStorage.getItem('refreshToken') }

    try {
        const response = await _query({
            method: 'POST',
            url: 'auth/token/issue',
            params: null,
            body: body,
            auth: false
        })
        const { accessToken } = response.data;
        await AsyncStorage.setItem('accessToken', accessToken);

    } catch (error) {
        if (error.response.status === HTTP_STATUS.UNAUTHORIZED) {
            await login()
        } else {
            throw error;
        }

    }
}



export { issueAuthToken, login, _query };