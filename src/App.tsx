import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import Dashboard from './components/Dashboard';
import './styles/App.css';

function App() {
  	return (
    	<div id="App">
			<BrowserRouter>
				<Routes>
					<Route path='/' Component={LogIn}/>
					<Route path='/login' Component={LogIn}/>
					<Route path='/dashboard' Component={Dashboard}/>
					<Route path='/dashboard/users' Component={Dashboard}/>
				</Routes>
			</BrowserRouter>
    	</div>
  	);
}

export default App;
