// Element is the same as Polymer.Element in 2.x
// Modules give you the freedom to rename the members that you import
import { Element as PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';

const template = document.createElement('template');

  template.innerHTML = `
    <style>
      :host {
        display: block;
        contain: content;
        text-align: center;
        background: papayawhip;
        max-width: 500px;
        margin: 0 auto;
        box-shadow: 0 0 10px rgba(128, 100, 38, 0.34);
        border-radius: 8px;
        border: 2px dashed #ccc049;
      }
      ::slotted(.title) {
        background: pink;
      }
      ::slotted(.content) {
        font-family: monospace;
      }
    </style>

    <div>
    <slot name="title"></slot>
    <hr>
    <slot></slot>
  </div>
  `;

  class MySlot extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

customElements.define('my-slot', MySlot);