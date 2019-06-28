//import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import store from '../../redux-store'
import { actions } from '../../redux';
import { dialogTypes } from '../../components/Dialog/RenderDialog';
import dbCommandRouter from '../db-command-router/db-command-router';

const config = {
    apiKey: "AIzaSyBiFViBxC_U4KRU8xVoW2lHXBo9FLdi5hE",
    authDomain: "voicegrounddb.firebaseapp.com",
    databaseURL: "https://voicegrounddb.firebaseio.com",
    storageBucket: "gs://voicegrounddb.appspot.com"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const generatePassword = () => {
    let code = [];
    
    code[0] = Math.floor(Math.random() * 10);
    code[1] = Math.floor(Math.random() * 10);
    code[2] = Math.floor(Math.random() * 10);
    code[3] = Math.floor(Math.random() * 10);

    return code.join('').toUpperCase();
}

async function subscribeToFolder(folder) {
    // Subscribes to the folder with firebase "on" method
    
    await firebase.database().ref('/sessions').child(folder).orderByKey().on("child_added", (snapshot) => {
        //const data = Object.entries(snapshot.val());
        //console.log(data);
        try {
            const command = [snapshot.key, snapshot.node_.value_];
            console.log(command)
            dbCommandRouter(command);
        }
        catch (err) {
            console.log(err);
        }
    });

    await firebase.database().ref('/sessions').child(folder).orderByKey().on("child_changed", (snapshot) => {
        //const data = Object.entries(snapshot.val());
        //console.log(data);
        try {
            const command = [snapshot.key, snapshot.node_.value_];
            console.log(command)
            dbCommandRouter(command);
        }
        catch (err) {
            console.log(err);
        }
    });
}

export const dbInitiateSession = async () => {
    const password = generatePassword();
    const sessionFolder = await firebase.database().ref('/sessions').push({ session: password });
    if (sessionFolder.key) { 
        subscribeToFolder(sessionFolder.key);

        // updating the store
        store.dispatch(actions.updatePassword(password));
        store.dispatch(actions.setActiveDialog(dialogTypes.SESSION_DIALOG));
    }
}