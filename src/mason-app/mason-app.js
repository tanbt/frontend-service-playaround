import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

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
        <p id="content">Other content...</p>
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
}

window.customElements.define('mason-app', MasonApp);
