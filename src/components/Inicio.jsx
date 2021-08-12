import React, { useContext } from 'react'
import { GlobalContext } from '../context/Context';


const Inicio = () => {

   const { nombre } = useContext(GlobalContext)
   console.log(nombre)

   return (
      <div>
         <h1 className="text-center">Inicio</h1>
         <h3>{nombre}</h3>
      </div>
   )
}

export default Inicio
