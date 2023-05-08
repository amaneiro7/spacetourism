import styled from 'styled-components'

export const WrapperInputs = styled.div`
    grid-area: inputs;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding-block: 56px 44px;
    @media (min-width: 1024px) {
        flex-direction: column;
    }
`

export const Button = styled.button`
    width: 40px;    
    aspect-ratio: 1 / 1;
    background-color: transparent;
    color: var(--text-secondary-color);
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 50%;
    cursor: pointer;
    &.selected {
        color: var(--background-color);
        background-color: var(--text-secondary-color);
    }
    &:hover {
        border-color: var(--text-secondary-color);
    }
    @media (min-width: 765px) {
        width: 60px;
    }
    @media (min-width: 1024px) {
        width: 80px;
        margin-inline-start: 100px;
    }
`
