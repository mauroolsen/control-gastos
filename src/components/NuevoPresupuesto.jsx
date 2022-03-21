import React from 'react'
import { useState } from 'react';
import Mensaje from './Mensaje';

function NuevoPresupuesto({presupuesto, setPresupuesto, setIsValidPresupuesto}) {

    const [message, setMessage] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if(!presupuesto || presupuesto <= 0) {
            setMessage("No es un presupuesto válido")
            return
        } 

        setMessage('')
        setIsValidPresupuesto(true)

    }

    return (
    <div className='contenedor-presupuesto contenedor sombra '>
        <form className='formulario' onSubmit={handleSubmit} action="">
            <div className="campo">
                <label htmlFor="">Definir Presupuesto</label>
                <input 
                    className='nuevo-presupuesto'
                    type="number" 
                    placeholder='Añade tu presupuesto '
                    value={presupuesto}
                    onChange={ e => setPresupuesto(Number(e.target.value))}
                />
                <input type="submit" value="Añadir" />
                { message && <Mensaje tipo="error">{message}</Mensaje> }
            </div>
        </form>
    </div>
  )
}
 
export default NuevoPresupuesto