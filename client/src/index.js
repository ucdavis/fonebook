import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import { rootReducer } from './reducers/rootReducer';
import { getWorkgroupsData } from './actions/workgroupActions';

let store = createStore(
	rootReducer,
	applyMiddleware(thunk)
);

store.dispatch(getWorkgroupsData());

console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));