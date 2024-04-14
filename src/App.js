import React, { Component } from "react";
import styles from "./styles/app.css";
import buttonData from "./constants/buttons";
import CalculatorButton from "./components/CalculatorButton";
import Screen from "./components/Screen";

class LinkToPortFolio extends Component {

  render() {
    return(
      <div className={styles.link}>
        <a className={styles.linktext} href="https://agnes-meri-portfolio.vercel.app/">Back to portfolio</a>
      </div>
    );
  }
}

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
			buttons.push(<CalculatorButton key={index} label={item.label} name={item.name} type={item.type} onClick={this[item.funct]}/>);
		})
		return buttons;
	}

	render() {
		return (
			<div className={styles.calculatorContainer}>
				<div>
					<Screen value={this.state.displayValue}/>
				</div>
				<div className={styles.buttonsContainer}>
					{this.createButtons(buttonData)}
				</div>
			</div>
		)
	}
}

class App extends Component{

  render(){
    return(
      <div className={styles.appContainer}>
        <div className={styles.app}>
          <Calculator/>
        </div>
        <LinkToPortFolio/>
      </div>
    );
  }
}

export default App;