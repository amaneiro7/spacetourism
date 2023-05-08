import styled from 'styled-components'

export const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-block: 5%;
    gap: 15%;
    @media (min-width: 768px) {                
        align-items: flex-start;
        justify-content: flex-start;
    }
    @media (min-width: 1024px) {        
        align-items: flex-start;
        justify-content: space-between;
    }
`

export const Title = styled.h5`
    color: var(--text-secondary-color);   
    & span{
        opacity: 0.25;
    }
`
