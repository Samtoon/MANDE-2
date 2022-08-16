import { Button } from "reactstrap"
import React from 'react';
import {Render} from './index.js';
import App from './App.js';
import RegisterWorker from './RegisterWorker.js';

export default (props) => {
    return <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column',
        }}
    >
        <div style={{padding:'10%'}}>
            <h1>Crear cuenta</h1>
        </div>
        <div style={{padding:'1%'}}>
            <Button color='success'
                    onClick={()=>{Render(<RegisterWorker/>)}}
            >
                Trabajador
            </Button>
        </div>
        <div style={{padding:'1%'}}>
            <Button color='success'>Usuario</Button>
        </div>
        <div style={{padding:'1%'}}>
            <Button onClick={()=>{Render(<App/>)}}>Regresar</Button>
        </div>
    </div>
}