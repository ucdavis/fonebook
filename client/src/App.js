import React, { Component } from 'react';

import './App.css';
import Button from './button/Button'
import MainView from './mainView/MainView'
import Footer from './footer/Footer'
import Header from './header/Header'

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
