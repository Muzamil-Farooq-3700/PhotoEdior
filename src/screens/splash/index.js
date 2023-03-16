import { Text, } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import styles from './styles'


const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home')
        }, 3000);
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.txt}>Photo Editor</Text>
        </SafeAreaView>
    )
}

export default Splash