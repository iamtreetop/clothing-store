import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB-N4_9NYXKao3U8v2unYeT-MAHkBJCpJA",
    authDomain: "crwn-db-db2a3.firebaseapp.com",
    projectId: "crwn-db-db2a3",
    storageBucket: "crwn-db-db2a3.appspot.com",
    messagingSenderId: "365665851813",
    appId: "1:365665851813:web:63e3e383ea2dcb9b02b04c",
    measurementId: "G-3D748C2EGZ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user')
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;