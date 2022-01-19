import React from "react"
import { Link } from "react-router-dom"

import DIV from "../estilos/div"

export default class TelaInicialcomp extends React.Component{
    render(){
        return(
            <DIV>
                <Link to="/cadastro" style={{  backgroundColor: "#000080;", borderRadius: "5px" ,borderStyle:"double", padding: "10px", fontsize: "20px", position:"relative", top:"20px"}}>Cadastre-se</Link><br></br>
                <Link to="/login" style={{  backgroundColor: "#000080;", borderRadius: "5px" ,borderStyle:"double", padding: "10px", fontsize: "20px", position:"relative", top:"50px"}}>Entrar</Link>
            </DIV>
        );
    }
}