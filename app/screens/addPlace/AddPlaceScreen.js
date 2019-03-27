import React, { Component } from 'react'
import { View } from 'react-native';
import { Container,FormInput,Button,ToolBar } from "../../components";
import styles from './styles';
import firebase from 'firebase';
import {Toast} from '../../service'

export default class AddPlaceScreen extends Component {
  state={
    Place:"",
    Latitude:"",
    Longitude:"",
    isLoading:false
  }

  setLoading = (isLoading)=>{
    this.setState({isLoading})
  }

  onPressSubmit = () =>{
    const {Place,Latitude,Longitude}=this.state;
    if(Place != "" && Latitude !="" && Longitude != ""){
      this.setLoading(true)
      var key = firebase.database().ref('/location').push().key;
      firebase.database().ref('/location').child(key).set({ 
        key,
        Place,
        Latitude,
        Longitude
      }).then(() => {
        this.setLoading(false);
        this.setState({
          Place:"",
          Latitude:"",
          Longitude:"",
        });
        Toast.Long('New Place Added')
      }).catch((error) => {
        alert(error)
        this.setLoading(false)
      });
    }else{
      Toast.Long('Please! fill all form')
    }
  }

  render() {
    const {Place,Latitude,Longitude, isLoading}= this.state;
    return (
      <Container>
        <ToolBar title="Add New Location"/>
        <View style={styles.formContainer}>
            <FormInput
                inputStyle={styles.inputStyle}
                placeholderTextColor="#000"
                placeholder="Add New Place"
                rounded
                onChangeText={(Place) => this.setState({ Place })}
                value={Place}
            />
            <FormInput
                inputStyle={styles.inputStyle}
                placeholderTextColor="#000"
                rounded
                placeholder="Latitude"
                onChangeText={(Latitude) => this.setState({ Latitude })}
                value={Latitude}
            />
            <FormInput
                inputStyle={styles.inputStyle}
                placeholderTextColor="#000"
                rounded
                placeholder="Longitude"
                onChangeText={(Longitude) => this.setState({ Longitude })}
                value={Longitude}
            />
        </View>

        <View style={{ alignItems: 'center' }}>
            <Button
                loading={isLoading}
                loadingRight
                rounded
                onPress={this.onPressSubmit}
                title="SUBMIT"
            />
        </View>
      </Container>
    )
  }
}
