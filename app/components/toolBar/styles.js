import { Platform } from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

export default styles = EStyleSheet.create({
    container: {
        backgroundColor: '$AppBarColor',
        marginBottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0, .2)',
                shadowOffset: { height: 0, width: 0 },
                shadowOpacity: 1,
                shadowRadius: 1,
                height: '$AppBarHeightIOS'
            },
            android: {
                height: '$AppBarHeightAndroid',
                elevation: 1,
            },
        }),
    },
    iconWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    icon: {
        color: '#FFF'
    },
    textContainer: {
        flex: 6,
    },
    line: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        flex: 5
    }
})