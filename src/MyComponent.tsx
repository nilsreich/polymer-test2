import * as Preact from 'preact'

function MyComponent(props: { name: string }) {
  return <div class="text-center bg">My name is {props.name}.</div>;
}

export default MyComponent