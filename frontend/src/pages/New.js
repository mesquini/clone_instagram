import React, {Component} from 'react'
import './New.css'
import api from '../serveces/api'

class New extends Component{
    state ={
        image : null,
        author : '',
        place : '',
        description : '',
        hashtags : '',
    }
    handleSubmit = async e =>{
        e.preventDefault()

        const data =  new FormData()
        data.append('image', this.state.image)
        data.append('author', this.state.author)
        data.append('place', this.state.place)
        data.append('description', this.state.description)
        data.append('hashtahs', this.state.hashtags)
        
        await api.post('posts', data)

        this.props.history.push('/')
    }

    handleChange = e =>{
        this.setState({[e.target.name]: e.target.value})
    }
    handleImageChange = e =>{
        this.setState({image: e.target.files[0]})
    }
    render(){
        return(
            <form id="new-post" onSubmit={this.handleSubmit}>

                <input type="file" onChange={this.handleImageChange} />

                <input 
                type="text" 
                name="author" 
                placeholder="Entre com um nome"
                onChange={this.handleChange}
                value={this.state.author} />

                <input 
                type="text" 
                name="place" 
                placeholder="Entre com um nome do lugar"
                onChange={this.handleChange}
                value={this.state.place} />

                <input 
                type="text" 
                name="description" 
                placeholder="Entre com a descrição"
                onChange={this.handleChange}
                value={this.state.description} />

                <input 
                type="text" 
                name="hashtags" 
                placeholder="Entre as hashtags"
                onChange={this.handleChange}
                value={this.state.hashtags} />

                <button type="submit">Enviar</button>
            </form>
        )
    }
}

export default New