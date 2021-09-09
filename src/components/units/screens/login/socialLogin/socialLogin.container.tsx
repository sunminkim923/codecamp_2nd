import React, {useEffect, useState, useContext} from 'react';
import SocialLoginUi from './socialLogin.presenter';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
// import {GlobalContext} from '../../../../../../App';

const SocialLogin = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  // const {setIdToken, userInfo, setUserInfo} = useContext(GlobalContext);

  const onGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken} = await GoogleSignin.signIn();
      console.log(idToken);
      // console.log(user);
      setLoggedIn(false);

      const credential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(credential);
      // setUserInfo(userInfo);
      Alert.alert('로그인되었습니다.');
    } catch (error) {
      console.log(error.code);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        Alert.alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '284614458896-r1bkvs0cjjb8act9ssvgj97nj76s7h9f.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

  const onGoogleLogout = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut().then(() => 'logout');
      setLoggedIn(true);
      // setUserInfo([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SocialLoginUi
      // userInfo={userInfo}
      loggedIn={loggedIn}
      onGoogleLogin={onGoogleLogin}
      onGoogleLogout={onGoogleLogout}
    />
  );
};
export default SocialLogin;
