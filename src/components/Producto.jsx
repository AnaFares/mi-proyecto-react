import React from 'react'
import Contents from './Contents'
import { useParams } from 'react-router-dom'

function Producto() {

    const params = useParams();
    return (
        <>
            <h1> {params.nombreParam} </h1>
            <Contents></Contents>
        </>

    )
}

export default Producto