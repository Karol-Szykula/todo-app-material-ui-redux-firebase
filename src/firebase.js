import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCqZ_HM6Uu8J8lzJbFrMVwlJkCb3rAC3oo",
    authDomain: "todo-app-9caaf.firebaseapp.com",
    databaseURL: "https://todo-app-9caaf.firebaseio.com",
    projectId: "todo-app-9caaf",
    storageBucket: "",
    messagingSenderId: "122573797392"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const database = firebase.database()
export const googleProvider = new firebase.auth.GoogleAuthProvider()