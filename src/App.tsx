import React, {useEffect, useState} from 'react';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import Dashboard from './components/Dashboard';
import './styles/App.css';
import './styles/tablet.css';
import './styles/mobile.css';

function App() {
	const [url, setUrl] = useState('login');
	const [id, setId] = useState('');

	useEffect(()=>{
		setUrl('login')
	}, []);

  	return (
    	<div id="App">
			{
				url === 'login'?
					<LogIn setUrl={setUrl}/>
				: 	<Dashboard setId={setId} id={id}/>
			}
    	</div>
  	);
}

export default App;
