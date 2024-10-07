import React, { useState, useEffect } from 'react';

function Categoria(){
    const [Categoria, setCategoria ] = useState([]);

    useEffect(() =>{
    fetch('http://localhost:8080/api/categorias')
        .then(Response => Response.json())
        .then(data => setCategoria(data));
    },[]);
    return(
        <div>
            <h2>Lista de Categorias</h2>
            <ul>
                {Categoria.map(categoria => (
                    <li key={categoria.id}>{categoria.nombre}</li>
                ))}
            </ul>
        </div>
    );
}

export default Categoria;