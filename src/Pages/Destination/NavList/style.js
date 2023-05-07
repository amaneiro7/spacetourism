import styled from 'styled-components'

export const Ul = styled.ul`
    height: 35px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10%;
    padding: 0;
    border-bottom: 2px solid transparent;
    @media (min-width: 1024px) {        
        justify-content: flex-start;
    }
`
export const Li = styled.li`
    list-style: none;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
        border-bottom: 2px solid var(--text-main-color);
    }
    &.selected {
        border-bottom: 2px solid var(--text-secondary-color);
    }
`
