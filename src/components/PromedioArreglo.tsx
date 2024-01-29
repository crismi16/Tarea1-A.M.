import React, { useState } from 'react'
interface Alumno {
  name : string,
  edad : number,
  calificacion : number,
}

const alumnos: [estudiante1: Alumno,estudiante2: Alumno,estudiante3: Alumno] = [
  {    name: 'Viviana',
      edad: 19,
      calificacion: 10,
  },
  {
      name: 'Wendy',
      edad: 20,
      calificacion: 8,
  },
  {
      name: 'Gerson',
      edad: 18,
      calificacion: 9,
  }
]

export const PromedioArreglo = () => {

  const [valor,setValor] = useState(0);
    
  const promedioArray = () =>{
    let suma: number = 0;
        for (let i = 0; i < alumnos.length; i++) {
            let num : number = alumnos[i].calificacion;
            suma += num;
        }
        let total: number = suma/3;
        setValor(total);
  }

  return (
    <div>
      <h3>Promedio de calificaciones del arreglo: <small>{valor}</small></h3>
      <button className="btn btn-primary" onClick={promedioArray}>Calcular promedio</button>
    </div>
    
  )
}
