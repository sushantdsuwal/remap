import React, { Component } from 'react'
import { View } from 'react-native';
import firebase from 'firebase';
import { Container,FormInput,Button,ToolBar } from "../../components";
import { Toast } from "../../service";
import styles from './styles';


export default class EditPlaceScreen extends Component {

  state={
    key:'',
    Place:"",
    Latitude:'',
    Longitude:'',
    isLoading: false
  }

  componentDidMount() {
    const {Place, Latitude, Longitude,key} = this.props.navigation.getParam('item');
    this.setState({
      key,
      Place,
      Latitude,
      Longitude
    })
  }

  setLoading = (isLoading)=>{
    this.setState({isLoading})
  }

  onPressUpdate = () => {
    const {Place,Latitude,Longitude,key}=this.state;
    if(Place != "" && Latitude !="" && Longitude != ""){
      this.setLoading(true);
      firebase.database().ref('/location').child(key).update({ 
        Place,
        Latitude,
        Longitude
      }).then(() => {
        this.setLoading(false);
        Toast.Long('Update sucess')
        this.props.navigation.goBack();
      }).catch((error) => {
        this.setLoading(false);
        Toast.Long('something went wrong please try again later')
      });
    }
  }


  render() {
    const {Place,Latitude,Longitude, isLoading}= this.state;
    return (
      <Container>
        <ToolBar title="Edit Place"/>
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
                onPress={this.onPressUpdate}
                rounded
                title="UPDATE"
            />
        </View>
      </Container>
    )
  }
}
