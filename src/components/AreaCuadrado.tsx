import { useState } from "react";

export const AreaCuadrado = () => {

    const [area,setValor] = useState(0);
    let lado : number = 5; 
    const areaCuadrado = (lado = 0) =>{
        setValor(lado*lado)
    }

  return (
    <div>
        <h3>Area del Cuadrado: <small>{area}</small></h3>
        <input type="text" className='input m-1' id='side'/>
        <button className="btn btn-primary" onClick={()=>areaCuadrado(lado)}>Calcular area</button>
        
    </div>
  )
}
