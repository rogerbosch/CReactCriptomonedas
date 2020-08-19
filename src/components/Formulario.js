import React, {useEffect, useState} from 'react';
import styled from "@emotion/styled";
import useMoneda from "../hooks/useMoneda";
import useCriptomoneda from "../hooks/useCriptomoneda";
import axios from "axios";
import Error from "./Error";

function Formulario({setMoneda, setCripto}) {

    //State listado criptomonedas
    const [listaCripto, setListaCripto] = useState([]);
    const [error, setError] = useState(false);
    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' }
    ];

    const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
    `;
    const [moneda, SelectMonedas] = useMoneda('Elige tu moneda','',MONEDAS);
    const [cripto, SelectCripto] = useCriptomoneda("Elige tu criptomoneda",1,listaCripto);

    //Ejecutar llamada a la API

    useEffect(()=>{
        const consultarAPI = async () =>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const resultado = await axios.get(url);
            setListaCripto(resultado.data.Data);
        }
        consultarAPI();
    },[]);
    const cotizarMoneda = e =>{
        e.preventDefault();
        if(moneda === '' ||cripto === ''){
            setError(true);
            return;
        }
        setError(false);
        setMoneda(moneda);
        setCripto(cripto);
    }
    return (
        <form
            onSubmit={cotizarMoneda}>
            {error ? <Error mensaje={'Todos los campos son obligatorios'}/> : null}
            <SelectMonedas/>
            <SelectCripto/>
            <Boton
                type="submit"
                value="Calcular"
            />

        </form>
    );
}

export default Formulario;