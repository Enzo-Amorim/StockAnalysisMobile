/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from 'react-native'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: 300,
        height: 271,
        marginBottom: 15,
        backgroundColor: '#5731E0',
        borderRadius: 15,
    },
    fixed: {
        position: 'absolute',
        width: 153,
        height: 28,

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 17,
        lineHeight: 24,
        color: '#C6C6C6',
    },
    values: {
        position: 'absolute',
        width: 130,
        height: 28,

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 25,
        lineHeight: 33,
        color: '#FFFFFF',
    },
    lineStyle: {
        alignSelf: 'center',
        height: 250,
        borderWidth: 0.5,
        borderColor: '#fff',
        margin: 10,
    },
    trash: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: 42,
        height: 45,
        left: 250,
        top: 5,

        backgroundColor: '#5731E0',
        borderRadius: 15,
    },
    details: {
        position: 'absolute',
        width: 42,
        height: 45,
        right: 10,
        bottom: 0
        
    }
});

export default styles;