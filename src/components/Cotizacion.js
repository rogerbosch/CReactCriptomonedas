import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
Cotizacion.propTypes = {

};

const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;
const Precio = styled.p`
    font-size: 30px;
    span {
        font-weight:bold;
    }
`

function Cotizacion({cotizacion}) {
    if(Object.keys(cotizacion).length === 0) return null;
    return (
        <ResultadoDiv>
            <Precio>El precio es: <span>{cotizacion.PRICE}</span> </Precio>
            <Info>Precio más alto del día: <span>{cotizacion.HIGHDAY}</span> </Info>
            <Info>Precio más bajo del día: <span>{cotizacion.LOWDAY}</span> </Info>
            <Info>Variación últimas 24 horas: <span>{cotizacion.CHANGEPCT24HOUR}</span> </Info>
            <Info>Última Actualización: <span>{cotizacion.LASTUPDATE}</span> </Info>
        </ResultadoDiv>
    );
}

export default Cotizacion;