import "../styles/Button.css";
import React, { Component} from "react";

export default class Button extends Component {

	render() {
		return (
			<button className={this.props.className} onClick={this.props.onClick.bind(this,this.props.label)}>{this.props.label}</button>
		)
	}
}