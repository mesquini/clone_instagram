import React, {Component} from 'react'
import api from '../serveces/api'
import './CSS/Login.css'

class Login extends Component{
    state = {
        email : '',
        senha : '',
    }
    handleSubmit = async e =>{
        e.preventDefault()

        const data = new URLSearchParams();

        data.append('email', this.state.email);
        data.append('senha', this.state.senha);
 
        const valida = await api.post('login', data);

        valida.data ? this.props.history.push('/') : this.props.history.push('/loginError')
        
    }

    handleChange = e =>{
        this.setState({[e.target.name]: e.target.value})
    }
    render(){
        return(
            <div >
                <h1 id="titulo">Instagram</h1>
                
                <form id="login" onSubmit={this.handleSubmit}>
                    
                <strong id="error">Email e/ou senha incorreto</strong>
                    <input 
                    type="text" 
                    name="email" 
                    placeholder="Entre com o email"
                    onChange={this.handleChange}
                    value={this.state.email} />

                    <input 
                    type="text" 
                    name="senha" 
                    placeholder="Entre com a senha"
                    onChange={this.handleChange}
                    value={this.state.senha} />

                    <button type="submit">Entrar</button>
                </form>
        </div>
        
        )
    }
}

export default Login