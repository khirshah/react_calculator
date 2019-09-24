import React, { Component} from "react";
import styles from "../styles/screen.css";

export default class Screen extends Component {
	render() {
		return (
			<div className={styles.screen}>{this.props.value}</div>
			)
	}
}