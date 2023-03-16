import { View, Text, TouchableOpacity, Image, ToastAndroid } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import styles from './styles'
import colors from '../../assets/colors/colors'
import fontSizes from '../../assets/fontSizes/fontSizes'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { captureImage, chooseFile } from '../../cameraServices'
import { scale, verticalScale as vs, moderateScale as ms } from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo'
const Home = ({ navigation }) => {
    const camera = async () => {
        let response = await captureImage()
        console.log("Muzamil---->", response)

        if (response !== 'false') {
            navigation.navigate('EditPhoto', response)
        }
        //  console.log("yeah hay response", response)
        //  navigation.navigate('EditPhoto', response)
    }
    const gallery = async () => {
        let response = await chooseFile()
        console.log("yeah hay response", response)

        if (response !== 'false') {
            navigation.navigate('EditPhoto', response)
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>Photo Editor</Text>
            <View style={styles.iconsOuterView} >
                <TouchableOpacity onPress={() => camera()}>
                    <Entypo name='camera' color={colors.pink} size={ms(130)} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => gallery()}>
                    <AntDesign name='picture' color={colors.pink} size={ms(130)} />
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

export default Home