import React from "react";
import axios from "axios";
import styled from "styled-components";

const Img = styled.img`
    width: 24vw;
    height: 28vh;
    padding: 1vw 1vh;
`
export default class PokeImg extends React.Component{
    state={
        img:[]
    }
    async componentDidMount(){
        const response = await axios.get(this.props.img)
       this.setState({
           img: response.data.sprites.other.dream_world.front_default
       })
    }
    render(){
        return(
            <div>
                <Img src= {this.state.img}alt="Pokemon"/>
            </div>
        )
    }
}