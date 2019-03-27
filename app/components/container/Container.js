import React from 'react';
import PropTypes from 'prop-types';
import { View, } from 'react-native';
import styles from './styles';

const Container = props => {
    const {
        children,
        containerStyle,
        ...attributes
    } = props;
    return (
        <View style={[styles.container, containerStyle && containerStyle]} {...attributes}>
            {children}
        </View>
    )
};

Container.propTypes = {
    containerStyle: PropTypes.any,
    children: PropTypes.any,
};

export default Container;