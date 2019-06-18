import React, {Component} from 'react'
import './CSS/Feed.css'
import io from 'socket.io-client'

import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'

import api from '../serveces/api'

class Feed extends Component{
    state ={
        feed :[],
    }
    async componentDidMount(){
        this.registerToSocket()
        const respose = await api.get('/')
        this.setState({feed: respose.data})
    }
    registerToSocket = () =>{
        const socket = io('http://localhost:8080')

        socket.on('post', newPost =>{
            this.setState({ feed: [newPost, ... this.state.feed]})
        })

        socket.on('like', likedPost =>{
            this.setState({
                feed: this.state.feed.map(post =>
                    post._id === likedPost._id ? likedPost : post
                )
            })
        })
    }
    handleLike = id =>{
        api.post(`/${id}/like`)
    }
    render(){
        return(
            <section id="post-list">
                {this.state.feed.map(post => (
                    <article key={post._id}>
                    <header>
                        <div className="user-info">
                            <span>{post.author}</span>
                            <span className="place">{post.place}</span>
                        </div>
                            <img src={more} alt="mais"/>
                        
                    </header>
                        <img src={`http://localhost:8080/files/${post.image}`} />

                        <footer>
                            <div className="actions">
                                <button type="button" onClick={ () =>this.handleLike(post._id)}>
                                    <img src={like} alt="" />
                                </button>
                                <button type="button">
                                <img src={comment} alt="" />
                                </button>
                                <button type="button">
                                <img src={send} alt="" />
                                </button>
                            </div>

                            <strong>{post.likes} curtidas</strong>
                            <p>
                                {post.description}
                                <span>{post.hashtags}</span>
                            </p>

                        </footer>
                </article>
                
                ))}
            </section>
        )
    }
}

export default Feed