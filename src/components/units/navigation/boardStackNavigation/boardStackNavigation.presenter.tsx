import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import BoardListPage from '../../../../../pages/screens/board'
import BoardWritePage from '../../../../../pages/screens/board/new'
import CommentsPage from '../../../../../pages/screens/comments'
const Stack = createNativeStackNavigator()
const BoardStackNavigationUI = () => {
    return(
        <Stack.Navigator
        screenOptions={()=>({headerShown: false, })}
        >

            <Stack.Screen name='Comments' component={CommentsPage}/>
            <Stack.Screen name='Write' component={BoardWritePage}/>
            <Stack.Screen name='List' component={BoardListPage}/>
        </Stack.Navigator>
    )
}
export default BoardStackNavigationUI