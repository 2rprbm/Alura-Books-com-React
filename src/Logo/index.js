import styled from "styled-components"
import logo from "../imagens/logo.svg"

const Logotipo = styled.div`
    display: flex;
    align-items: center;
`
const Logoimagem = styled.img`
    height: 3rem;
`
const Logotitulo = styled.p`
    margin: 0 10px;
    font-size: 2rem;
`

export const Logo = () => {
    return(
        <Logotipo>
            <Logoimagem src={logo} alt="Logotipo Alura Books"/>
            <Logotitulo><strong>Alura</strong>Books</Logotitulo>
        </Logotipo>
    )
}