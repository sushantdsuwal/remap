import { StyleSheet } from 'react-native'
import EStylesSheet from 'react-native-extended-stylesheet';

const styles = EStylesSheet.create({
    formContainer: {
        margin: 15
    },
    text: {
        color: '$primaryColor',
    },
    inputStyle: {
        borderColor: '#000',
        color: '#000'
    },
   
    buttonWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;