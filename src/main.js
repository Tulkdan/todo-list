import App from './App.svelte';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig.js';

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const app = new App({
	target: document.body,
	props: {
    firebase: firebase,
    db
	}
});

export default app;