import React from 'react'
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import Text from "../text/Text";
import Icon from '../icon/Icon';
import styles from './styles';

const List = (props) => {
    const { label,onPressEdit } = props;
    return (
        <View style={styles.listWrapper}>
            <Text h1>{label}</Text>
            <TouchableOpacity onPress={onPressEdit}>
                <Icon type='MaterialIcons'
                    name={"edit"}
                    size={24}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    )
};

List.propTypes = {
    label: PropTypes.string,
    onPressEdit: PropTypes.func,
}

export default List;