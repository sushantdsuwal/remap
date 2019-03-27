import { Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
const width = Dimensions.get('window').width;

const styles = EStyleSheet.create({
    itemWrapper: {
        backgroundColor: '$secondaryColor',
        width: width / 3 - 21,
        minHeight: width / 3 - 27,
        margin: 5,
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        margin: 15
    },
    label: {
        textAlign: 'center',
        marginBottom: 5
    }
})

export default styles;