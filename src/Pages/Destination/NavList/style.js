import styled from 'styled-components'

export const Ul = styled.ul`
    height: 35px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 0;
    border-bottom: 2px solid transparent;
`
export const Li = styled.li`
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
        border-bottom: 2px solid var(--text-main-color);
    }
    &.selected {
        border-bottom: 2px solid var(--text-secondary-color);
    }
`
