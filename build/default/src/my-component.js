// Element is the same as Polymer.Element in 2.x
// Modules give you the freedom to rename the members that you import
import { Element as PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';


// Added "export" to export the MyApp symbol from the module
export class MyComponent extends PolymerElement {

    constructor() {
        super();
  
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
          <style>
            h1 {
              font-size: 2.5rem;
              color: hotpink;
              font-family: monospace;
              text-align: center;
              text-decoration: pink solid underline;
              text-decoration-skip: ink;
            }
          </style>
          <h1>Hello Alligator!</h1>
        `;
    }
}

customElements.define('my-component', MyComponent);