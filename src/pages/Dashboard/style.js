/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from 'react-native'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    topBar: {
        display: 'flex',
        width: deviceWidth,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        position: 'absolute',
        width: (deviceWidth - 47) - 40,
        height: 52,
        left: 15,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#5731E0',
        borderRadius: 10,
        padding: 10
    },
    button: {
        position: 'absolute',
        width: 47,
        height: 47,
        right: 10,

        backgroundColor: '#5731E0',
        borderRadius: 15,
    },
    scrollView: {
        /*flex: 1,
        flexDirection: 'column',*/
        marginTop: 0,
    },
});

export default styles;