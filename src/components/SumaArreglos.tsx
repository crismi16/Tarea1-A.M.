import React, { useState } from 'react'

export const SumaArreglos = () => {

  const array : number[] = [5,10,15,20,25,30,35,40,45,50];
  const [valor,setValor] = useState(0);
    
  const sumaArray = (array : number[]) =>{
        let total: number = 0;
        for (let i = 0; i < array.length; i++) {
            let num : number = array[i];
            total += num;
        }
        setValor(total);
  }

  return (
    <div>
        <h3>Suma de Arreglos: <small>{valor}</small></h3>
        <button className="btn btn-primary" onClick={()=>sumaArray(array)}>Calcular suma del arreglo</button>
    </div>
  )
}
