import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';

function SignupScreen() {
  const [isAuth, setIsAuth] = useState(false);

  const authCtx = useContext(AuthContext);

  async function signupHandler({email, password}) {
    setIsAuth(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
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
