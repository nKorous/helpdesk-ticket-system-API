const firebase = require('firebase-admin')

firebase.initializeApp()

const db = firebase.firestore();


module.exports = db