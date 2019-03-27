import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { MapToolTip ,Container} from "../../components";
import { FloatingButton } from "./container";
import firebase from 'firebase'

const LATITUDE =  27.700769;
const LONGITUDE = 85.300140;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA =  0.0421;

export default class HomeScreen extends Component {
  state={
    region: {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta:LONGITUDE_DELTA,
    },
    data:[],
  }

  componentDidMount() {
    var config = {
      apiKey: "AIzaSyCwnAcbE2o4FlAkR61IPIQonoP4xHjNwTU",
      authDomain: "rnmaps-4facd.firebaseapp.com",
      databaseURL: "https://rnmaps-4facd.firebaseio.com",
      projectId: "rnmaps-4facd",
      storageBucket: "rnmaps-4facd.appspot.com",
      messagingSenderId: "93942367113"
    };
    firebase.initializeApp(config);
    
    firebase.database().ref('/location').on('value', (item) => {
      const data =item.toJSON();
      if(data){
        const array = Object.values(data);
        console.log(array);
        this.setState({data:array})
      }
    })
  }

  componentWillReceiveProps = (nextProps)=>{
    const data = nextProps.navigation.state.params.item;
    if(data){
      this.setState({
      region:{
        latitude: parseFloat(data.Latitude),
        longitude: parseFloat(data.Longitude),
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
    })
    }
  }

  render() {
    const {region,data} =this.state;
    return (
      <Container>
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={region}
          >   
          {data.length > 0 &&
            data.map((item, index) => (
                <MapView.Marker
                    coordinate={{
                        latitude: parseFloat(item.Latitude),
                        longitude: parseFloat(item.Longitude),
                    }}
                    key={index}
                >
                  <MapToolTip title={item.Place}/>
                </MapView.Marker>
            ))
          }
        </MapView>
        <FloatingButton/>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  map: {
      ...StyleSheet.absoluteFillObject,
  },
}); 

