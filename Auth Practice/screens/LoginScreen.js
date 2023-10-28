import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../util/auth';
import { Alert } from 'react-native';

function LoginScreen() {

  const [isAuth, setIsAuth] = useState(false);

  async function loginHandler({email, password}) {
    setIsAuth(true);
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert('에러!@!@!#@#!', '로그인 실패!!');
    }
    setIsAuth(false);
  };

  if (isAuth) {
    return <LoadingOverlay message={"로그인 하는 중.."} />
  }

  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default LoginScreen;
