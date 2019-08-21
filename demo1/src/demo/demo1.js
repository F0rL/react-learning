//了解react组件
import React from "react";
import ReactDOM from "react-dom";
import App from './App'

const Header = (
  <header>
    header
  </header>
)
const Header2 = function(props) {
  return (
    <header>
      header{props.name}
    </header>
  )
}
const Button = (
  <div>
    button
  </div>
)

console.log(Button)

const Button2 = function() {
  const [n, setN] = React.useState(0)
  return (
    <div>
      {n}
      <button onClick={function(){
        setN(n+1)
      }}>click +1</button>
    </div>
  )
}
class Button3 extends React.Component{
  render(){
    return (
      <div>bottom3</div>
    )
  }
}
const div = (
  <div>
    {Header}
    {Header2({name: 'jack'})}
    <Header2 name='kuma' />
    <p>
      <span>hello</span>
    </p>
    {Button}
    <Button2/>
    <Button3/>
    <App/>
  </div>
);

console.log(div);

ReactDOM.render(div, document.getElementById("root"));

//ReactDOM.render(<App />, document.getElementById('root'));
