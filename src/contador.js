import React, { useState } from 'react'

function Contador() { 
    const [contador, setcontador] = useState(0);

    const manejarClick = () => {
        setcontador(contador + 1);
    };

  return (
    <div>
        <h1>Contador: {Contador}</h1>
        <button onClick={manejarClick}>Incrementar</button>
    </div>
  )
}

export default Contador;
