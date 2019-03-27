import React, { Component } from 'react'
import { ScrollView } from 'react-native';
import {  ToolBar, Container} from "../../components";
import {ListPlace} from './container'

export default class ListPlaceScreen extends Component {
  render() {
    return (
      <Container>
        <ToolBar title="All Place"/>
        <ScrollView>
          <ListPlace/>
        </ScrollView>
      </Container>
    )
  }
}
