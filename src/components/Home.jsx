import React from 'react'
import Contents from './Contents'
import { Link } from 'react-router-dom';

const Home = () => {

    const productos = [
        { id: 1, nombre: 'Smartphone' },
        { id: 2, nombre: 'Laptop' },
        { id: 3, nombre: 'Tablet' },
        { id: 4, nombre: 'Auriculares' },
        { id: 5, nombre: 'SmartTV' },
        { id: 6, nombre: 'Altavoz' },
    ];

    return (
        <>
            <h1>Home</h1>
            <Contents></Contents>

           {/*  - Lista de productos -  */}
            <h2>Productos</h2>
            <ul className="list-group">
                {productos.map(
                    (producto) => (
                        <Link key={producto.id} to={'/producto/' + producto.nombre}
                            className='list-group-item list-group-item-action'>
                            {producto.nombre}
                        </Link>
                    )
                )}

            </ul>

        </>

    )
}

export default Home