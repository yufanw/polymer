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
          The Polymer library provides a set of features for creating custom elements.
          These features are designed to make it easier and faster to make custom elements that 
          work like standard DOM elements. 
          Similar to standard DOM elements, Polymer elements can be:
        </p>
        <ul>
          <li>Instantiated using a constructor or document.createElement.</li>
          <li>Configured using attributes or properties.</li>
          <li>Populated with internal DOM inside each instance.</li>
          <li>Responsive to property and attribute changes.</li>
          <li>Styled with internal defaults or externally.</li>
          <li>Responsive to methods that manipulate its internal state.</li>
        </ul>  
      </div>
    `;
  }
}

window.customElements.define("my-new-view", MyNewView);
