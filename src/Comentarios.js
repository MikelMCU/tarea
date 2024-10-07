import React, { useState, useEffect } from 'react';

function Comentarios(){
    const [Comentarios, setComentarios ] = useState([]);

    useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(Response => Response.json())
        .then(data => setComentarios(data));
    },[]);
    return(
        <div>
            <h2>Lista de Comentarios</h2>
            <ul>
                {Comentarios.map(comentario => (
                    <li key={comentario.id}>{comentario.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Comentarios;