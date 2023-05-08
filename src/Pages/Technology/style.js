import styled from 'styled-components'

export const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
        align-items: flex-start;
        justify-content: flex-start;
    }
`
