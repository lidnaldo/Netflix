/**
 * @format
 */

import messaging from '@react-native-firebase/messaging';
import { registerRootComponent } from 'expo';
import App from './App';

// Register background handler  --- https://rnfirebase.io/messaging/usage
messaging().setBackgroundMessageHandler(async remoteMessage => {
    // console.log('Message handled in the background!', remoteMessage);
    console.log('Message handled in the background!');
});

// AppRegistry.registerComponent(appName, () => App)
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
