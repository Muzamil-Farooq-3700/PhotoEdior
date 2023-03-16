import { Text, StyleSheet, View } from 'react-native'
import colors from '../../assets/colors/colors'
import { scale, verticalScale as vs, moderateScale as ms } from 'react-native-size-matters';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    headerText: { color: colors.pink, textAlign: "center", fontSize: scale(30), fontWeight: '900', padding: 10 },
    iconsOuterView: { flexDirection: "row", alignSelf: 'center', width: '100%', justifyContent: 'space-around' },

})

export default styles