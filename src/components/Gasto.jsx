import React from 'react'

function Gasto({gasto}) {
    const { nombre, cantidad, categoria } = gasto
    return (
        <div className='gasto sombra'>
            <div className="contenido-gasto">
                <div className="descripcion-gasto">
                    <p className="categoria">{categoria}</p>
                    <p className="nombre-gasto">{gasto}</p>
                </div>
            </div>
        </div>
    )
}

export default Gasto