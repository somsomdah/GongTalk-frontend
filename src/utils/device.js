import * as SecureStore from 'expo-secure-store';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export const getUniqueId = async () => {
    let deviceUUID = await SecureStore.getItemAsync('deviceUUID');
    if (!deviceUUID) {
        deviceUUID = uuidv4();
        await SecureStore.setItemAsync('deviceUUID', deviceUUID);
    }

    return deviceUUID;
}

