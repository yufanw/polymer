import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "./shared-styles";

class MyNewView extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">4</div>
        <h1>Polymer</h1>
        <img src="/images/manifest/icon-192x192.png">
        <p>
          An ultra-light, highly performant custom element base class 
          with a simple but expressive API.
        </p>
      </div>
    `;
  }
}

window.customElements.define("my-new-view", MyNewView);
