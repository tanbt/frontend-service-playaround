import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import firebase from "../../node_modules/firebase/app/dist/index.esm.js";
import "../../node_modules/firebase/auth/dist/index.esm.js";
const firebaseConfig = {
  apiKey: "AIzaSyAUbZQdJoP7yNSWVnhl-O5FzsduIFA2yLU",
  authDomain: "tanbt.github.io",
  projectId: "pwagram-45678",
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
        <p id="notification"></p>
    `;
  }

  constructor() {
    super();
    window.addEventListener("login-successful", e => this._afterLogin(e));

    window.masonAsyncInit = function () {
      Mason({
        apiKey: 'GO5UhSLGg73Sx9PAMGNfiXHN2GNK5hj9NGydqmRlggY=',
        projectId: '5cd57b0b371c140003a63a74'
      });
      Mason.callback('willSendData', function (form, name, componentId) {
        firebase.auth().signInWithEmailAndPassword(form.data.email, form.data.password).then(function (response) {
          window.dispatchEvent(new CustomEvent('login-successful', {
            detail: form.data.email
          }));
        }).catch(function (error) {
          console.log(error);
        });
        return true; // skip validation
      });
    };

    firebase.initializeApp(firebaseConfig);
  }

  _afterLogin(e) {
    this.$.login.remove();
    this.$.notification.innerHTML = `<p>Hi, ${e.detail}!<p>Welcome to FEaaS.<p></p>`;
  }

}

window.customElements.define('mason-app', MasonApp);