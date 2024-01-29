import { AreaCuadrado } from "./components/AreaCuadrado";
import { SumaArreglos } from "./components/SumaArreglos";
import { DivisionArreglo } from "./components/DivisionArreglo";
import { PromedioArreglo } from "./components/PromedioArreglo";
import { Acumulador } from "./components/Acumulador";

const App = () =>{
  return(
    <div className='mt-2'>
      <h1>Ejercicios - React</h1>
      <hr/>
      {/* <AreaCuadrado/> */}
      {/* <SumaArreglos/> */}
      <DivisionArreglo/>
      {/* <PromedioArreglo/> */}
      {/* <Acumulador/> */}
    </div>
  )
}
export default App;