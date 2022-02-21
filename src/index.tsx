import './index.css'
import * as Preact from 'preact'
import MyComponent from './MyComponent';

const App = ()=> <MyComponent name="John Doe" />;

const main = document.querySelector('main')

main && Preact.render(<App />, main)
