import { NavLink as LinkRouter } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 55px;
    width: auto;
    height: 100px;
    margin-top: 40px;
`
export const Hr = styled.hr`
    display: none;
    background-color: var(--text-secondary-color);
    opacity: .25;
    flex: 1;
    height: 1px;
    right: 20px;
    @media (min-width: 1024px) {
        display:block;
    }
`

export const Nav = styled.nav`
    padding-right: 10%;
    display: flex;
    align-items: center;
    height: 100%;
    background-color: rgba(255, 255, 255, .1);    
`
export const Ul = styled.ul`
    height: 100%;
    margin: 0;    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 40px;
`

export const Li = styled.li`
    height: 95%;
    list-style: none;
`

export const NavLink = styled(LinkRouter)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-decoration: none;
    color: var(--text-secondary-color);
    letter-spacing: .10rem;    
    text-transform: capitalize;
    transition: all 1s linear;
    &:hover{
        border-bottom: 2px solid var(--text-main-color);
    }
    &[aria-current] {
        border-bottom: 2px solid var(--text-secondary-color);
    }
    & span {
        display: none;
        margin-inline-end: 6px;
        @media(min-width:1024px) {
            display: block;   
        }
    }
`
