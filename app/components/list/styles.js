import EStyleSheet from 'react-native-extended-stylesheet';

export default styles = EStyleSheet.create({
    listWrapper: {
        // backgroundColor: '$secondaryColor',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '$listPadding',
        alignItems: 'center',
    },
    icon: {
        color: '#000'
    }
})