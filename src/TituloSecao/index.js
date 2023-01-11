import styled from "styled-components"

const Titulo = styled.h2`
    font-weight: 600;
    text-transform: Uppercase;
    text-align: center;
    margin-bottom: 1rem;
    color: #DAA520;
    font-size: 2.5rem;
    margin-top: 0;
`

export const TituloSecao = (props) => {
    return(
        <Titulo>{props.tituloSecao}</Titulo>

    )
}