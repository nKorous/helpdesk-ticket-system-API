const firebase = require('firebase/app')
require('firebase/firestore')

const dbConfig = require('./dbConfig.json')

firebase.initializeApp(dbConfig[0])

const db = firebase.firestore();


module.exports = db