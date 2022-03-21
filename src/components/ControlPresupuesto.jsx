import React from 'react'

function ControlPresupuesto({presupuesto}) {

  const formatCantidad = cantidad => {
    return cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>Grafica aqui</p>
            <div className='contenido-presupuesto'>
                <p>
                    <span> Presupuesto: </span> {formatCantidad(presupuesto)}
                </p>
                <p>
                    <span> Disponible: </span> {formatCantidad(0)}
                </p>
                <p>
                    <span> Gastado: </span> {formatCantidad(0)}
                </p>
            </div>
        </div>
    </div>
  )
}

export default ControlPresupuesto