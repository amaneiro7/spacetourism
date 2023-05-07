import styled from 'styled-components'

export const Wrapperinputs = styled.div`    
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10%;
    padding: 0;    
    @media (min-width: 1024px) {        
        justify-content: flex-start;
    }
`
export const Input = styled.input`
    cursor: pointer;    
    outline: none;
    accent-color: var(--background-color);   
`
