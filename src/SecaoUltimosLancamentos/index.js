import { TituloSecao } from "../TituloSecao"
import styled from "styled-components"
import livro from "../imagens/livro.png"


const SecaoUltLancamentos = styled.section`
    padding-top: 1rem;
    background-color: #FFFFFF;
`
const ImagensUltLancamentos = styled.div`
    background-color: #DCDCDC;
    display: flex;
    column-gap: 1rem;
    padding: 2.5rem 1.5rem;
    box-sizing: border-box;
    justify-content: center;
`
const ImagemCapaLivro = styled.img`
    height: 100%;
`

export const SecaoUltimosLancamentos = () => {
    return (
        <SecaoUltLancamentos>
            <TituloSecao tituloSecao="Últimos Lançamentos" />
            <ImagensUltLancamentos>
                <ImagemCapaLivro src={livro} alt="Imagem Capa do Livro"></ImagemCapaLivro>
                <ImagemCapaLivro src={livro} alt="Imagem Capa do Livro"></ImagemCapaLivro>
                <ImagemCapaLivro src={livro} alt="Imagem Capa do Livro"></ImagemCapaLivro>
            </ImagensUltLancamentos>
        </SecaoUltLancamentos>
    )
}