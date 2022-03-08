// https://alxmrtnz.com/thoughts/2019/03/12/environment-variables-and-workflow-in-expo.html

import Constants from 'expo-constants';
// import { Platform } from 'react-native';

// const localhost = Platform.OS === 'ios' ? 'localhost:8080' : '10.0.2.2:8080';

const ENV = {
  common: {
    notion: {
      noticeUrl: 'https://gongtalk-notice.oopy.io/',
      teamInfoUrl: 'https://gongtalk-team.oopy.io/',
      openSourceUrl: 'https://gongtalk-opensource.oopy.io/',
    }
  },

  dev: {
    apiUrl: 'http://localhost:8090/api',
    amplitudeApiKey: null,
  },
  staging: {
    apiUrl: 'https://uat.myapi.com/api',
    amplitudeApiKey: '[Enter your key here]',
    // Add other keys you want here
  },
  prod: {
    apiUrl: 'https://prod.myapi.com/api',
    amplitudeApiKey: '[Enter your key here]',
    // Add other keys you want here
  },
};

const envVars = (env = Constants.manifest.releaseChannel) => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  if (__DEV__) {
    return { ...ENV.dev, ...ENV.common };
  } else if (env === 'staging') {
    return { ...ENV.staging, ...ENV.common };
  } else if (env === 'prod') {
    return { ...ENV.prod, ...ENV.common };
  }
};

export default envVars();