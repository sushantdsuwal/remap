import React from 'react';
import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
import {
    HomeScreen,
    AddPlaceScreen,
    ListPlaceScreen,
    EditPlaceScreen
} from '../screens';

const navConfigs = {
    headerMode: 'none'
};

const RootNav = createStackNavigator({
    Home: { screen: HomeScreen },
    AddPlace: {screen:AddPlaceScreen},
    ListPlace: {screen: ListPlaceScreen},
    EditPlace: {screen:EditPlaceScreen}
}, 
navConfigs
);

export default createAppContainer(RootNav)