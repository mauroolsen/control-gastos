import { useState, useEffect } from 'react'
import Mensaje from './Mensaje'

import CerrarBtn from '../img/cerrar.svg'

function Modal({gastoEditar, setModal, animarModal, setAnimarModal, guardarGasto}) {
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [id, setId] = useState('')
    const [fecha, setFecha] = useState('')
    const [mensaje, setMensaje] = useState('')

    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0) {
            const { 
                nombre: nombreEditar,
                cantidad: cantidadEditar,
                categoria: categoriaEditar,
                fecha: fechaEditar,
                id: idEditar
            } = gastoEditar
            setNombre(nombreEditar)
            setCantidad(cantidadEditar)
            setCategoria(categoriaEditar)
            setFecha(fechaEditar)
            setId(idEditar)
        }
    }, [])

    const ocultarModal = () => {
        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        }, 300)
    }

    const handleSubmit = e => {
        e.preventDefault();

        if([nombre, cantidad, categoria].includes('')){
            setMensaje("Todos los campos son obligatorios")

            setTimeout(() => {
                setMensaje('');
            }, 3000)
            return
        }

        guardarGasto({nombre, cantidad, categoria, fecha, id})
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img src={CerrarBtn} alt="cerrar modal"
                onClick={ocultarModal}
            />
        </div>

        <form onSubmit={handleSubmit} className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
            <legend>{gastoEditar ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
            { mensaje && <Mensaje tipo="error" >{mensaje}</Mensaje> }
            <div className="campo">
                <label htmlFor="nombre">Nombre Gasto</label>
                <input 
                type="text" 
                placeholder='Añade en nombre del gasto'
                name="nombre" 
                id="nombre" 
                value={nombre}
                onChange={ e => setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label htmlFor="cantidad">Cantidad</label>
                <input 
                type="number"
                id='cantidad'
                placeholder='Añade la cantidad del gasto: ej. 300'
                value={cantidad}
                onChange={ e => setCantidad(Number(e.target.value))}
                />
            </div>
            <div className="campo">
                <label htmlFor="categoria">Categoria</label>

                <select name="" id="categoria" value={categoria} 
                onChange={ e => setCategoria(e.target.value)}>
                    <option value="">-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="varios">Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>

            <input type="submit" value={gastoEditar ? 'Editar gasto' : 'Añadir gasto'}/>

        </form>
    </div>
  )
}

export default Modal