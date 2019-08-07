import React, { Component } from "react";
import "./styles/App.css";
import buttonData from "./constants/buttons";
import CalculatorButton from "./components/CalculatorButton";
import Screen from "./components/Screen";

class Calculator extends Component {
	state = {
		displayValue: ""
	}

	display = (value) => {
		let {displayValue} = this.state;
		displayValue += value.toString();
		this.setState({displayValue: displayValue});
	}

	evaluate = () => {
		let {displayValue} = this.state;
		let result = eval(displayValue);
		this.setState({displayValue: result});
	}

	clear = () => {
		this.setState({displayValue: ""});
	}

	createButtons = (data) => {
		const buttons= [];
		data.map((item, index) => {
			buttons.push(<CalculatorButton key={index} label={item.label} className={`${item.name} ${item.type}`} onClick={this[item.funct]}/>);
		})
		return buttons;
	}

	render() {
		return (
			<div className="calculator-container">
				<div className="screen-container">
					<Screen value={this.state.displayValue}/>
				</div>
				<div className="buttons-container">
					{this.createButtons(buttonData)}
				</div>
			</div>
		)
	}
}

class App extends Component{

  render(){

    return(
      <div className="App">
        <Calculator/>
      </div>
    );
  }
}

export default App;