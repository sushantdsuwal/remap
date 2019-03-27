import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity } from 'react-native';
import Text from '../text/Text';
import styles from './styles';

const ItemCard = (props) => {
    const {
        image,
        label,
        imageProps,
        onPress,
        containerStyle,
    } = props;
    return (
        <TouchableOpacity activeOpacity={0.2} onPress={onPress}>
            <View style={[styles.itemWrapper, containerStyle && containerStyle,]}>
                <Image
                    resizeMode="contain"
                    style={styles.image}
                    source={image}
                    {...imageProps}
                />
                <Text h1 style={styles.label}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
}

ItemCard.propTypes = {
    image: Image.propTypes.source,
    label: PropTypes.string,
    imageProps: PropTypes.object,
    onPress: PropTypes.func,
    containerStyle: PropTypes.any,
}

export default ItemCard;