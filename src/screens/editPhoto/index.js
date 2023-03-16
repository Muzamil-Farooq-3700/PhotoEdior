import { View, Text, Image, TouchableOpacity, Alert, } from 'react-native'
import React, { useState } from 'react'
import {
    PESDK,
    PhotoEditorModal,
    Configuration,
} from "react-native-photoeditorsdk";
import styles from './styles';
import colors from '../../assets/colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { scale, verticalScale as vs, moderateScale as ms } from 'react-native-size-matters';
import Share from 'react-native-share';
const EditPhoto = ({ navigation, route }) => {
    const [editphoto, seteditphoto] = useState('')
    let img = route?.params
    const shareImage = async () => {
        const shareOptions = {
            message: 'Muzamil Task',
            url: editphoto
        }
        try {
            const ShareResponse = await Share.open(shareOptions);
            console.log('ShareResponse', ShareResponse)
        } catch (error) {
            console.log('Error =>', error);
            console.log('error: ', error);
        }
    }

    return (
        <View style={styles.conainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ margin: ms(15) }}>
                <Ionicons name={'arrow-back-sharp'} size={30} color={colors.pink} />
            </TouchableOpacity>
            {editphoto == '' ?
                <PhotoEditorModal visible={true} image={{ uri: img }} onExport={e => seteditphoto(e.image)} />
                :
                <View style={styles.imgconatiner}>
                    <Image source={{ uri: editphoto }} style={styles.img} resizeMode={'cover'} />
                    <TouchableOpacity style={styles.btn} onPress={() => shareImage()}>
                        <Text style={styles.btnText}>Do You Want To share?</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}

export default EditPhoto

