import { ListaLinks } from "../ListaLinks"
import { Logo } from "../Logo"
import styled from "styled-components"


const Cabecalho = styled.header`
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    background-color: #FFFFFF;
`

export const Header = () => {
    return(
        <Cabecalho>
            <Logo />
            <ListaLinks />
        </Cabecalho>
    )
}