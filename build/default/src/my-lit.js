// Element is the same as Polymer.Element in 2.x
// Modules give you the freedom to rename the members that you import
import { Element as PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';

import { html, render } from '../node_modules/lit-html/lit-html.js';

const start = html`<h1>One Great Title</h1>`;
const end = html`<p>The End!</p>`;

const story = content => {
  return html`
    ${start}
    <p>${content}</p>
    ${end}
  `;
};

const el = document.querySelector('#container');

render(story('Once upon a time...'), el);

  class MyLit extends HTMLElement {

    }

customElements.define('my-lit', MyLit);