import MainLoginPageUi from './MainLogin.presenter';

import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useForm} from 'react-hook-form';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth, {firebase} from '@react-native-firebase/auth';

const MainLoginPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    defaultValues: {
      Email: '',
      Password: '',
    },
  });
  console.log(errors);

  const onGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      setLoggedIn(true);
      const {idToken} = await GoogleSignin.signIn();
      const credential = firebase.auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(credential);
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

  const onGoogleLogout = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setLoggedIn(false);
      setUserInfo([]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '284614458896-r1bkvs0cjjb8act9ssvgj97nj76s7h9f.apps.googleusercontent.com',
      offlineAccess: true,
    });
    // const subscriber = auth().onAuthStateChanged();
  }, []);
  return (
    <MainLoginPageUi
      control={control}
      userInfo={userInfo}
      loggedIn={loggedIn}
      handleSubmit={handleSubmit}
      onGoogleLogin={onGoogleLogin}
      onGoogleLogout={onGoogleLogout}
    />
  );
};
export default MainLoginPage;
// function alert(arg: string) {
//   throw new Error('Function not implemented.');
// }
