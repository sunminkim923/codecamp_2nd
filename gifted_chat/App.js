import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import {AuthProvider} from './src/navigation/AuthProvider';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './src/navigation/HomeStack';
import AuthStack from './src/navigation/AuthStack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={() => ({headerShown: false})}>
          <Tab.Screen name="Auth">
            {() => (
              <Stack.Navigator screenOptions={() => ({headerShown: false})}>
                <Stack.Screen name="Login" component={AuthStack} />
              </Stack.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen name="Home">
            {() => (
              <Stack.Navigator screenOptions={() => ({headerShown: false})}>
                <Stack.Screen name="Home02" component={HomeStack} />
              </Stack.Navigator>
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
