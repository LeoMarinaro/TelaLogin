import React from "react"
import { Link } from "react-router-dom"

import Botao from "../estilos/botao"
import Input from "../estilos/input"
import DIV from "../estilos/div"
import Parse from 'parse/dist/parse.min.js';

export default class Logincomp extends React.Component{
    constructor(props){
        super(props);
        this.e = ""
        this.s = ""
        this.nome = ""
        this.email = ""
        this.senha = ""
        this.state ={
            chave: 0,
            name: ""
        }
    }

    async encontraContra() {
        this.e = document.getElementById('EMAIL').value;
        this.s = document.getElementById('SENHA').value;
        const query = new Parse.Query('Cont');
        if(query.equalTo('email', this.e) && query.equalTo('senha', this.s)){
            const Person = await query.first();
            this.nome =  Person.get('name');
            this.email = Person.get('email');
            this.senha = Person.get('senha');
            this.setState({chave: 1});
            this.setState({name: this.nome});
        }
        else{
            alert("Usuario não encontrado");
        }
      }

    render(){
        if(this.state.chave === 0){
            return(
                <DIV>
                    <main>
                        <Input type="text" placeholder="Email" id="EMAIL"></Input><br></br>
                        <Input type="password" placeholder="Senha" id="SENHA"></Input><br></br>
                        <Botao onClick={()=>this.encontraContra()}>Entrar</Botao> 
                    </main>
                    <nav>
                        <Link to="/" style={{  backgroundColor: "#000080;", borderRadius: "5px" ,borderStyle:"double", padding: "10px", fontsize: "20px"}}>Voltar</Link>
                    </nav>
                </DIV>
            ); 
        }
        else{
            return(
                <DIV>
                    <h1>BOAS VINDAS</h1>
                    <p>{this.state.name}</p>
                    <p>Seja Bem-Vindo a sua conta personalizada</p>
                    <Link to="/" style={{  backgroundColor: "#000080;", borderRadius: "5px" ,borderStyle:"double", padding: "10px", fontsize: "20px"}}>Voltar</Link>
                </DIV>
            );
        }
    }
}