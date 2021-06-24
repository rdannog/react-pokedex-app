import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import PokeImg from './PokeImg'
import './App.css'

const data = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=150"
})

const Container = styled.div`
  width:100%;
  background-color: #2e388d;
`
const TitleBox = styled.div`
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  color:white;
  font-size: 5vw;
`
const BoxCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20vw, 1fr));
  gap: 3rem;
  padding: 5vh 5vw;
`
const PokeName = styled.h2`
  color:#ebe6e1;
  text-transform: capitalize;
`
const Card = styled.div`
height: 50vh;  
padding: 5vh 5vw;
  border: 2px solid #ebe6e1;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  &:hover{
    background-color:rgba(255, 255, 255, 0.7);
    border:none;
    ${PokeName}{
      color: #2e388d;
    }
  }
`


export default class PokeList extends React.Component{
  state ={
    pokeList: []
  }

  async componentDidMount(){
    const response = await data.get()
    this.setState({
      pokeList:response.data.results
    })
  }

  render(){
    return(
      <Container>
        <TitleBox>
        <Title>Pokedex App</Title>
        </TitleBox>
        <BoxCard>
          {this.state.pokeList.map((item, index)=> (
            <Card>
              <PokeImg img={item.url}/>
              <PokeName key={index}>{item.name}</PokeName>
            </Card>
          ))}
        </BoxCard> 
      </Container>
    )
  }
}