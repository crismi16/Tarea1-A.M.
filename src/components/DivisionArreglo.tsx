import React, { useState } from 'react'

export const DivisionArreglo = () => {

  const array : number[] = [5,10,15,20,25,30,35,40,45,50];
    
  const newArray = array.map((valor: number,index: number) =>{
    const num = valor/5;
    return num;
  })
  console.log("value : ",newArray);
  return (
    <div>
        <h3>Arreglo dividido para 5: ver en consola</h3>
        {/* <button className="btn btn-primary">Calcular nuevo arreglo</button> */}
    </div>
  )
}
