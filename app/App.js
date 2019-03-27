import React, {Component} from 'react';
import { View ,StatusBar,SafeAreaView} from 'react-native';
import Navigation from './config/navigators';
import {defaultTheme  } from "./themes";
import EStyleSheet from 'react-native-extended-stylesheet';
import bootstrap from './bootstrap'

bootstrap(defaultTheme);

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1, backgroundColor:EStyleSheet.value('$primaryColor')}} >
        <StatusBar backgroundColor={EStyleSheet.value('$primaryColor')}
          barStyle="light-content"
        />
        <Navigation/>
      </SafeAreaView>
    );
  }
};
