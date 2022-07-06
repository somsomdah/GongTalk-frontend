import { _query } from "./_query";
import { getExpoPushTokenAsync } from "expo-notifications";
import { printResponse, printError } from "./_query";
import axios from 'axios'

export const sendNotification = async ({ title, body }) => {

    try {
        const response = await axios(
            {
                method: 'POST',
                url: 'https://exp.host/--/api/v2/push/send',
                data: {
                    to: (await getExpoPushTokenAsync()).data,
                    title: title,
                    body: body,
                    sound: "default"
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Host': 'exp.host',
                    'Accept-Encoding': ['gzip', 'deflate']
                }

            }
        )

        printResponse(response)
        return response.data

    } catch (error) {
        printError(error)
    }
}