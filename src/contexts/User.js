import { createContext, useState } from "react";


const UserContext = createContext({
    deviceNum: '',
    refreshToken: '',
    accessToken: '',
    setDeviceNum : () => {},
    setRefreshToken : () => {},
    setAccessToken : () => {}
});

const UserProvider = ({ children }) => {
    const [deviceNum, setDeviceNum] = useState('');
    const [refreshToken, setRefreshToken] = useState('');
    const [accessToken, setAccessToken] = useState('');


    const value = {
        'deviceNum': deviceNum, 'setDeviceNum': setDeviceNum,
        'refreshToken': refreshToken, 'setRefreshToken': setRefreshToken,
        'accessToken': accessToken, 'setAccessToken': setAccessToken
    };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};

export default UserContext;
export {UserProvider};
