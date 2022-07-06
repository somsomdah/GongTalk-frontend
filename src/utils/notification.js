import * as Notifications from 'expo-notifications';

export const triggerPushNotification = async ({
    title, body, data
}) => {
    const result = await Notifications.scheduleNotificationAsync({
        content: {
            sound: 'default',
            title: title,
            body: body,
            data: data,
        },
        trigger: { seconds: 2 },
    });

    return result
}