import styled from 'styled-components'

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-block: 5%;
    padding-inline: 10%;
    @media (min-width: 768px) {
        align-items: flex-start;
        justify-content: space-between;
    }
    @media (min-width: 1024px) {
        align-items: flex-start;
        justify-content: space-between;
    }
`
