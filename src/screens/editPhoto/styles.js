import { StyleSheet, Text, View } from 'react-native'
import colors from '../../assets/colors/colors'
import { scale, verticalScale as vs, moderateScale as ms } from 'react-native-size-matters';






const styles = StyleSheet.create({
    conainer: {
        flex: 1,
        backgroundColor: colors.white,
    },
    imgconatiner: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: "center",
        alignItems: "center",
    },
    img: { height: 300, width: 300, borderRadius: 10 },
    btn: { backgroundColor: colors.pink, borderRadius: 10, height: ms(50), width: ms(300), alignSelf: 'center', justifyContent: "center", marginVertical: ms(20) },
    btnText: { color: colors.white, fontWeight: '700', fontSize: scale(20), textAlign: "center" }
})
export default styles
