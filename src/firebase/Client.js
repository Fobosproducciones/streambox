import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDMVabALBHSyNV588K_c9gX0TKigdL9M5Y",
  authDomain: "streambox-e4458.firebaseapp.com",
  projectId: "streambox-e4458",
  storageBucket: "streambox-e4458.appspot.com",
  messagingSenderId: "942035429062",
  appId: "1:942035429062:web:c13faec33cd3582d63d9c7",
  measurementId: "G-EZ1PZ20X4Z",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL } = user;

  return {
    avatar: photoURL,
    username: displayName,
    email,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
    onChange(normalizedUser);
  });
};

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(githubProvider);
};
