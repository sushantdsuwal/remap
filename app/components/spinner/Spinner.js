import React from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './styles';

const Spinner = (isLoading) => (
    isLoading &&
    <View style={[
        StyleSheet.absoluteFill,
        styles.container
    ]}>
        <ActivityIndicator
            animating
            size={EStyleSheet.value('$spinnerSize')}
            color={EStyleSheet.value('$spinnerColor')}
            style={[styles.indicator]}
        />
    </View>
);

Spinner.propType = {
    animating: PropTypes.bool,
}

export default Spinner;
