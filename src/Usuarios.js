import React, { useState, useEffect } from 'react';

function Usuarios(){
    const [Usuarios, setUsuarios ] = useState([]);

    useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(data => setUsuarios(data));
    },[]);
    return(
        <div>
            <h2>Lista de Usuarios</h2>
            <ul>
                {Usuarios.map(usuario => (
                    <li key={usuario.id}>{usuario.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Usuarios;