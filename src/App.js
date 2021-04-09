import React, { Fragment, useState } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import styled from '@emotion/styled';
import Resumen from './componentes/Resumen';
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner';


const Contenedor = styled.div`  
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorFormulario = styled.div`  
  background-color:#fff;
  padding: 3rem;
`;


function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });
  const [cargando, guardarCargando] = useState(false);
  //extraer datos
  const { cotizacion, datos } = resumen;
  return (
    <Fragment>
      <Contenedor>
        <Header 
          titulo='Cotizador de Seguros'
        />
      </Contenedor>
      <ContenedorFormulario>
        <Formulario 
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />
        { cargando ? <Spinner /> : null} 
        <Resumen 
          datos={datos}
        />
        <Resultado 
          cotizacion={cotizacion}
        />
      </ContenedorFormulario>
    </Fragment>
  );
}

export default App;
