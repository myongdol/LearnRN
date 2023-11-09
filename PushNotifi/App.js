import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Platform } from 'react-native';
import { StyleSheet, View } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true
    };
  }
});

export default function App() {
  
  useEffect(() => {
    async function configurePushNotifications() {
      const {status} = await Notifications.getPermissionsAsync();
      let finalStatus = status;

      if(finalStatus !== 'granted') {
        const {status} = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      
      if(finalStatus !== 'granted') {
        Alert.alert(
          '권한이 없습니다.',
          '푸시알림 권한에 동의 해주세요.'
          );
          return;
      }

      const pushTokenData = await Notifications.getExpoPushTokenAsync();
      console.log(pushTokenData);

      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.DEFAULT
        });
      }
    };
    configurePushNotifications();
  }, []);

  useEffect(() => {
    const subscription1 = Notifications.addNotificationReceivedListener((notification) => {
      console.log('알림수신');
      console.log(notification);
      const userName = notification.request.content.data.userName;
      console.log(userName);
    });

    const subscription2 = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log('알림수신, response');
      console.log(response);
      const userName = response.notification.request.content.data.userName;
      console.log(userName);
    });

    return () => {
      subscription1.remove();
      subscription2.remove();
    };
  }, []);

  function notifiHandler() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: '알림!!',
        body: '알림의 본문을 작성하세요.',
        data: {userName: 'Myongdol'},
      },
      trigger: {
        seconds: 5
      }
    });
  };
  
  function sendPushNotifiHandler() {
    fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        to: 'ExponentPushToken[토큰값]',
        title: '테스트-알림전송',
        body: '테스트에요'
      })
    })
  };


  return (
    <View style={styles.container}>
      <Button 
        title="알림예약"
        onPress={notifiHandler}
      />
      <Button 
        title="알림전송"
        onPress={sendPushNotifiHandler}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
