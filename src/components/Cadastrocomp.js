import React from "react"
import { Link } from "react-router-dom"

import Botao from "../estilos/botao"
import Input from "../estilos/input"
import DIV from "../estilos/div"
import Parse from 'parse/dist/parse.min.js';

export default class Cadastrocomp extends React.Component{
    constructor(props){
        super(props);
        this.n = "";
        this.e = "";
        this.s = "";
    }

    async adicionaConta() {
        this.n = document.getElementById('NOME').value;
        this.e = document.getElementById('EMAIL').value;
        this.s = document.getElementById('SENHA').value;
        if(this.n !== "" && this.e !== "" && this.s !== ""){
            try {
            const Conta = new Parse.Object('Cont');
            Conta.set('name', this.n);
            Conta.set('email', this.e);
            Conta.set('senha', this.s);
            await Conta.save();
            alert('Conta Registrada');
            } catch (error) {
            console.log('Error saving new person: ', error);
            }
        }
        else{
            alert("Impossivel Registrar Conta!")
        }
    }

    render(){
        return(
            <DIV>
                <main>
                    <Input type="text" placeholder="Nome" id="NOME"></Input><br></br>
                    <Input type="text" placeholder="Email" id="EMAIL"></Input><br></br>
                    <Input type="password" placeholder="Senha" id="SENHA"></Input><br></br>
                    <Botao onClick={()=>this.adicionaConta()}>Cadastre-se</Botao>
                </main>
                <nav>
                    <Link to="/"  style={{  backgroundColor: "#000080;", borderRadius: "5px" ,borderStyle:"double", padding: "10px", fontsize: "20px"}}>Voltar</Link>
                </nav>
            </DIV>
        );
    }
}