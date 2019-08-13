import React from "react";
import ReactDOM from "react-dom";
import './styles.css'; // Tell Webpack that Button.js uses these styles

class click_number extends App {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }}

class Button extends App {
  render(i) {
    <Button className="Button" onClick=> allert('click')}>
    {this.props.value}
    </Button>
    // You can use them as regular CSS styles
  }
}
function App(Button) {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button>
        this is a button
      </button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}




const rootElement = document.getElementById("root");
ReactDOM.render(<App />

  , rootElement);
