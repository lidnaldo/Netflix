import messaging from '@react-native-firebase/messaging';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import ProfileContext from './context/ProfileContext';
import Tabs from './routes/Tabs';
import Camera from './screen/Camera';
import ChooseIcon from './screen/ChooseIcon';
import ProfileToEdit from './screen/ProfileToEdit';

const Stack = createStackNavigator();

const App = (props) => {
  const [user, changeUser] = useState("José");
  console.log("user -- ", user);
  
  return (
    <ProfileContext.Provider value={{user, changeUser}}>
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Tabs" component={Tabs}  options={{headerShown: false}}/>
            <Stack.Screen name="ProfileToEdit" component={ProfileToEdit} />
            <Stack.Screen name="ChooseIcon" component={ChooseIcon} />
            <Stack.Screen name="Camera" component={Camera} options={{headerShown: false}} />
          </Stack.Navigator>
      </NavigationContainer>
    </ProfileContext.Provider>

  )

  
  useEffect(() => {
    messaging().onNotificationOpenedApp(remoteMessage => {
      Alert.alert(
        'Notification caused app to open from background state:',
        JSON.stringify(remoteMessage.notification),
      );
      navigation.navigate(remoteMessage.data.type);
    });

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
  
  
};

export default App;