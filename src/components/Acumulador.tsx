import { useCounter } from '../hooks/useCounter';

export const Acumulador = () => {
  
  let inicial: number = 0;
  const {valor,contador} = useCounter(inicial);
    
  return (
    <div>
        <h3>Acumulador <small>{valor}</small></h3>
        <button className="btn btn-primary" onClick={()=>contador(5)}>+5</button>
            &nbsp;
            <button className="btn btn-primary" onClick={()=>contador(-5)}>-5</button>
    </div>
  )
}
