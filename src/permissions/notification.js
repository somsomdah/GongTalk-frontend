import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { color } from '../common/colors';


const registerPushNotification = async () => {

    const { status: currentStatus } = await Notifications.getPermissionsAsync();

    if (currentStatus === 'undefined') {

        const { status: newStatus } = await Notifications.requestPermissionsAsync();

        if (newStatus !== 'granted') {
            return;
        }

    } else {
        return;
    }

    await Notifications.getExpoPushTokenAsync({ experienceId: 'gongtalk-app' });

    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.DEFAULT,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: color.primary,
        });
    }

};


export default registerPushNotification