
import './App.css';
import { Button } from 'reactstrap';
import React from 'react';
import {Render} from './index.js';
import NewAccount from './NewAccount.js';
import Login from './Login.js';



export default (props)=>{
  return <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
    }}
  >
    <h1>Mande</h1>
    <h5>Servicios domésticos</h5>
    <div
    >
      <Button
        color='primary'
        outline='false'
        onClick={() => {Render(<Login/>)}}
      >
        Iniciar sesión
      </Button>
      <Button 
        color='success'
        onClick={() => {Render(<NewAccount/>)}}
      >
        Registrarse
      </Button>
    </div>
  </div>
};
