const functions = require('firebase-functions');
const express = require('express');
var firebase = require('firebase');
var firebaseui = require('firebaseui');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

const app = express(); 
app.get('/login', (request, response) )
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
