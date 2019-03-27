import React, { Component } from 'react';
import {View, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import {List, Divider} from '../../../components';
import firebase from 'firebase';

class ListPlace extends Component {

  state={ 
    data:[]
  }

  componentDidMount() {
    firebase.database().ref('/location').on('value', (item) => {
      const data =item.toJSON();
      if(data){
        const array = Object.values(data);
        this.setState({data:array})
      }
    });
  }

  onPressEdit= (item)=>{
    this.props.navigation.navigate('EditPlace', {item})
  }

  onPressItem = (item) =>{
    this.props.navigation.navigate('Home', {item})
  }

  render() {
    const {data}= this.state;
    return (
      data.map((item,key)=>{
        return(
          <TouchableOpacity  key={key} onPress={()=>this.onPressItem(item)}>
            <View key={key}>
              <List
                  label={item.Place}
                  onPressEdit={()=>this.onPressEdit(item)}
              />
              <Divider/>
            </View>
          </TouchableOpacity>
        )
      })
    )
  }
}

export default withNavigation(ListPlace)
