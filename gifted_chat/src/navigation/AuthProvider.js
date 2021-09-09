import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState('');

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password, navigation) => {
          try {
            const result = await auth().signInWithEmailAndPassword(
              email,
              password,
            );
            setUser(result.user);
            navigation.navigate('Home');
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email, password, navigation) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
            navigation.navigate('Login');
          } catch (e) {
            console.log(e);
          }
        },
        logout: async (navigation) => {
          try {
            await auth().signOut();
            navigation.navigate('Auth');
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
