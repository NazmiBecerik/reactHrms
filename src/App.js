import './App.css';
import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import Navi from "./components/Navi";
import { Container } from 'semantic-ui-react';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className='App'>
      <Navi/>
    <Container className='main'>
      <Dashboard/>
    </Container>
    </div>
  );
}

export default App;
