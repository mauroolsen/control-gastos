import { useState, useEffect } from 'react'

function ControlPresupuesto({gastos, presupuesto}) {

  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)

  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
    const totalDisponible = presupuesto - totalGastado
    setDisponible(totalDisponible)
    setGastado(totalGastado)
  }, [gastos])

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
                    <span> Disponible: </span> {formatCantidad(disponible)}
                </p>
                <p>
                    <span> Gastado: </span> {formatCantidad(gastado)}
                </p>
            </div>
        </div>
    </div>
  )
}

export default ControlPresupuesto