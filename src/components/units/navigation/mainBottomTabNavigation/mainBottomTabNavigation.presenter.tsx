import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import TempScreen from '../../screens/temp';
import MarketStackNavigationPage from '../../../../../pages/navigation/MarketStackNavigation';
const Tab = createBottomTabNavigator()
const MainBottomTabNavigationUI = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                  let iconName = "";
      
                  if (route.name === '홈') {
                    iconName = 'home';
                  } else if (route.name === '더보기') {
                    iconName =  'ellipsis-horizontal' ;
                  } else if (route.name === '채팅') {
                    iconName =  'chatbubbles-sharp' ;
                  } else if (route.name === '중고장터') {
                    iconName =  'cart' ;
                  }
                  return <Icon name={iconName} size={25} color={color} />;
                },
                tabBarActiveTintColor: '#26EBA6',
                tabBarInactiveTintColor: '#BDBDBD',
                headerShown: false, 
                tabBarLabelStyle:{fontWeight:'bold'},
              })}
            >
                <Tab.Screen name='홈' component={TempScreen}/>
                <Tab.Screen name='채팅' component={TempScreen}/>
                <Tab.Screen name='중고장터' component={MarketStackNavigationPage}/>
                <Tab.Screen name='더보기' component={TempScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default MainBottomTabNavigationUI