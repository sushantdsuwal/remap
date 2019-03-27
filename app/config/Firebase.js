import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCwnAcbE2o4FlAkR61IPIQonoP4xHjNwTU",
  authDomain: "rnmaps-4facd.firebaseapp.com",
  databaseURL: "https://rnmaps-4facd.firebaseio.com",
  projectId: "rnmaps-4facd",
  storageBucket: "rnmaps-4facd.appspot.com",
  messagingSenderId: "93942367113"
};


export default class Firebase{
    static init(){
      firebase.initializeApp(config);
    }
}