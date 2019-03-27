import PropTypes from 'prop-types';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from '../icon/Icon'
import Text from '../text/Text';
import styles from './styles';

const ToolBar = props => {
    const {
        menu,
        title,
        onPressMenu,
        onPressSearch,
        onPressBookmark,
        onPressCart,
        containerStyle,
        navIcon,
        none,
        ...attributes
    } = props;
    const activeOpacity = 0.2;
    return (
        <View {...attributes} style={[styles.container, containerStyle && containerStyle,]}>
            <View style={[styles.iconWrapper]}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} activeOpacity={activeOpacity}>
                    <Icon type="MaterialIcons" name="arrow-back" size={26} style={styles.icon} />
                </TouchableOpacity>
            </View>

            <View style={[styles.textContainer]}>
                <Text h1 style={styles.icon}>
                    {title}
                </Text>
            </View>

        </View>
    );
};

ToolBar.propTypes = {
    containerStyle: PropTypes.any,
    menu: PropTypes.bool,
    title: PropTypes.string,
    navIcon: PropTypes.bool,
    onPressMenu: PropTypes.func,
    onPressSearch: PropTypes.func,
    onPressBookmark: PropTypes.func,
    onPressCart: PropTypes.func,
    none: PropTypes.bool
};

export default withNavigation(ToolBar);