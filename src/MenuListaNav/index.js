import styled from "styled-components";


const ItemListaLinks = styled.li`
    list-style: none;
    cursor: pointer;
    font-size: 1rem;
    margin-right: 1.5rem;
    text-transform: Uppercase;
    font-family: 'Montserrat', sans-serif;
    font-wight: 600;
`

const ItensListaLinks = styled.ul`
    display: flex;
    list-style: none;
`
const Link = styled.a`
    text-decoration: none;
`

export const MenuListaNav = (props) => {
    return (
        <ItensListaLinks>
            {props.lista.map(link => <ItemListaLinks key={link}><Link href="#">{link}</Link></ItemListaLinks>)}
        </ItensListaLinks>
    )
}