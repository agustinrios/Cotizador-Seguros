import React, { Fragment } from 'react';
import styled from '@emotion/styled';


const ContenedorHeader = styled.header`  
   background-color: #26C6DA;
   padding: 10px;
   font: bold;
   color: #ffffff;
`;

const TextoHeader = styled.h1`  
   font-size: 2rem;
   margin:0;
   font-family:'Slabo 27px', serif;
   text-align: center;
`;

const Header = ({titulo}) => {
    return(
        <Fragment>
            <ContenedorHeader>
                <TextoHeader>{titulo}</TextoHeader>
            </ContenedorHeader>
        </Fragment>
    );
}

export default Header;