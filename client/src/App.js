import React, { Component } from 'react';

import './App.css';
import Button from './components/button/Button'
import MainView from './components/mainView/MainView'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

class App extends Component {
	constructor() {
		super();

		this.state = {
			paper: "towels"
		}
	}

	render() {
		return (
			<div className="app">
				<Header cat={this.state.paper} dog='barkbark' />
				<MainView />
				<Footer />
			</div>
		);
	}
}

export default App;
