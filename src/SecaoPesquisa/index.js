import { useState } from "react"
import styled from "styled-components"
import {dados} from "../dados.js"
import {Card} from "../Card"

const SecaoBuscaLivros = styled.section`
    padding: 3rem 0;
    text-align: center;
    // display: flex;
    // flex-direction: column;
    justify-content: space-around;
`
const TituloSecaoBusca = styled.h3`
    color: #FFFFFF;
    font-size: 2rem;
`
const SubtituloSecaoBusca = styled.h4`
    color: #FFFFFF;
    font-size: 1rem;
    font-weight: 400;
`
const InputSecaoBusca = styled.input`
    height: 3rem;
    width: 480px;
    border-radius: 20px;
    font-weight: 400;
    text-align: center;
    background: transparent;
    border-color: #FFFFFF;
    color: #FFFFFF;
    
    &:focus{
        outline: 0;
    }
    &::placeholder{
        color: #FFFFFF;
    }
    &:focus::placeholder{
        color: transparent;
    }
`
const SecaoCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 1rem;
    margin-top: 3rem;
    padding: 0 1rem;
`

export const SecaoPesquisa = () => {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    return(
        <SecaoBuscaLivros>
            <TituloSecaoBusca>Já sabe por onde começar?</TituloSecaoBusca>
            <SubtituloSecaoBusca>Encontre seu livro em nossa estante.</SubtituloSecaoBusca>
            <InputSecaoBusca onChange={(evento) => setLivrosPesquisados(dados.filter(livro => livro.titulo.includes(evento.target.value)))} type="search" placeholder="Escreva sua próxima leitura"/> 
            <SecaoCards>
                {livrosPesquisados.map(livro => <Card key={livro.titulo} livroPesquisado={livro}/>)}
            </SecaoCards> 
        </SecaoBuscaLivros>
    )
}