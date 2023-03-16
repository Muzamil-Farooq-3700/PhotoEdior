import { Text, StyleSheet, View } from 'react-native'
import colors from '../../assets/colors/colors'
import { moderateScale as ms } from 'react-native-size-matters'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: colors.white
    },
    txt: { color: colors.pink, fontSize: ms(50), textAlign: 'center', fontWeight: 'bold' }
})

export default styles