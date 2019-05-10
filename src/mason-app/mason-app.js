import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import firebase from 'firebase/app';
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUbZQdJoP7yNSWVnhl-O5FzsduIFA2yLU",
  authDomain: "pwagram-45678.firebaseapp.com",
  databaseURL: "https://pwagram-45678.firebaseio.com",
  projectId: "pwagram-45678",
  storageBucket: "pwagram-45678.appspot.com",
  messagingSenderId: "797941836946",
  appId: "1:797941836946:web:2fe4a5bb0b57993a"
};

/**
 * @customElement
 * @polymer
 */
class MasonApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
        <slot id="login" name="login"></slot>
        <button on-click="_testAuth">Test Auth</button>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'mason-app'
      }
    };
  }

  constructor() {
    super();
    firebase.initializeApp(firebaseConfig);
  }

  _testAuth() {
    firebase.auth().signInWithEmailAndPassword('admin@tanbt.com', 'admin123456').then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

}

window.customElements.define('mason-app', MasonApp);
