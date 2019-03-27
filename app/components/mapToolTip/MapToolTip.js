import React from 'react';
import {Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Text from '../text/Text';
import MapView from 'react-native-maps';

const MapToolTip = (props) => {
    const {title,otherProps}= props;
    return(
        <MapView.Callout style={styles.customView} {...otherProps}>
            <Text h2>{title}</Text>
        </MapView.Callout>
    )
}

const styles = EStyleSheet.create({
    customView: {
        // borderWidth: 1,
        // borderColor: '#e8e8e8',
        // backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 15,
        ...Platform.select({
        ios: {
            shadowColor: 'rgba(0,0,0, .2)',
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 1,
            shadowRadius: 1,
        },
        android: {
            elevation: 1,
        },
        }),
    },
});

export default MapToolTip;