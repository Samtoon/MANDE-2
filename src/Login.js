import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import {Render} from './index.js'
import App from './App.js'

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
        <h1>
            Iniciar sesión
        </h1>
        <div>
            <Form>
                <FormGroup>
                    <Label for='identification'>
                        Identificación (Celular si es Usuario o Cédula si es Trabajador)
                    </Label>
                    <Input
                        id='identification'
                        name='identificationTxt'
                    />
                    <Label for='password'>
                        Contraseña
                    </Label>
                    <Input
                        id='password'
                        name='passwordTxt'
                        type='password'
                    />
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        }}
                    >
                        <div style={{padding:'10%'}}>
                            <Button onClick={()=>{Render(<App/>)}}>Regresar</Button>
                        </div>
                        <div style={{padding:'10%'}}>
                            <Button color='success'>Acceder</Button>
                        </div>
                    </div>
                </FormGroup>
            </Form>
        </div>

    </div>
}