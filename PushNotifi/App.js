import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { StyleSheet, View } from 'react-native';
import * as Notifications from 'expo-notifications';


export default function App() {
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

  return (
    <View style={styles.container}>
      <Button 
        title="알림예약"
        onPress={notifiHandler}
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
