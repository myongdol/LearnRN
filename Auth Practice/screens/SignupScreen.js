import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';

function SignupScreen() {
  const [isAuth, setIsAuth] = useState(false);

  async function signupHandler({email, password}) {
    setIsAuth(true);
    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert('에러!@!@!#@#!', '회원가입 실패!!');
    }
    setIsAuth(false);
  };

  if (isAuth) {
    return <LoadingOverlay message={"회원가입 중.."} />
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
