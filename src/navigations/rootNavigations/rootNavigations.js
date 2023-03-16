import { StyleSheet, View } from 'react-native'
import React from 'react'
import Splash from '../../screens/splash';
import Home from '../../screens/home/home';
import EditPhoto from '../../screens/editPhoto/index'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();
const RootNavigations = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Splash' component={Splash} />
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='EditPhoto' component={EditPhoto} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigations

const styles = StyleSheet.create({
    headerstyling: {

    }
})