import { MenuListaNav } from "../MenuListaNav"
import { MenuIconesNav } from "../MenuIconesNav"
import perfil from "../imagens/perfil.svg"
import sacola from "../imagens/sacola.svg"
import styled from "styled-components"


const Menu = styled.nav`
    display: flex;
    align-items: center;
`

export const ListaLinks = () => {
    const listaLinks = ['Minha Estante', 'Favoritos', 'Categorias']
    const listaIcones = [perfil, sacola]
    return(
        <Menu>
            <MenuListaNav lista={listaLinks}/>
            <MenuIconesNav lista={listaIcones}/>
        </Menu>
    )
}