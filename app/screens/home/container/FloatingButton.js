import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';
import {Icon} from '../../../components';
import {withNavigation} from 'react-navigation';


const FloatingButton =(props)=>{
  const {navigation} =props;
    return (
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#3498db' title="Add New Place" 
            onPress={() => navigation.navigate('AddPlace')}>
            <Icon type={"MaterialIcons"} name="location-on" size={30} style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Place" 
            onPress={() => navigation.navigate('ListPlace')}>
            <Icon type={"Ionicons"} name="md-done-all" size={30} style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
    );
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

export default withNavigation(FloatingButton);