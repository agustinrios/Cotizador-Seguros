import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { primerMayuscula } from '../helper';


const ContenedorResumen = styled.div`
   padding: 1rem;
   text-align: center;
   background-color: #00838f;
   color: #fff;
   margin-top: 1rem;
`;


const Resumen = ({datos}) => {
    //extraer datos
    const {marca, year, plan} = datos;

    if(marca === '' || year === '' || plan === '') return null;
 
    return(
        <Fragment>
            <ContenedorResumen>
                <h2>Resumen de Cotizacion</h2>
                <ul>
                    <li>Marca: {primerMayuscula(marca)} </li>
                    <li>Año del Auto: {primerMayuscula(year)} </li>
                    <li>Plan: {plan} </li>
                </ul>
            </ContenedorResumen>
        </Fragment>
    );
}

export default Resumen;