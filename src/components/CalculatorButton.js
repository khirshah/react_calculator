import styles from "../styles/calculatorButton.css";
import React,{Component} from "react";

export default class Button extends Component {

	render() {
		return (
			<button className={`${styles[this.props.name]} ${styles[this.props.type]}`} onClick={this.props.onClick.bind(this,this.props.label)}>{this.props.label}</button>
		)
	}
}