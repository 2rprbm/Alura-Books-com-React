import styled from "styled-components";


const ItemListaIcones = styled.li`
    list-style: none;
    cursor: pointer;
    font-size: 1rem;
    margin-right: 1.5rem;
    text-transform: Uppercase;
`

const ItensListaIcones = styled.ul`
    display: flex;
    list-style: none;
`


export const MenuIconesNav = (props) => {
    return (
        <ItensListaIcones>
            {props.lista.map(link => <ItemListaIcones key={link}><img src={link} alt="Icones Menu"></img></ItemListaIcones>)}
        </ItensListaIcones>
    )
}