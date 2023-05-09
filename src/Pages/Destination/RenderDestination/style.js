import styled from 'styled-components'

export const Section = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5%;    
    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        margin-top: 0;
    }
`

export const Image = styled.img`
    width: 35%;
    min-width: 300px;
    margin-top: 35px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    margin-bottom: 5%;
`

export const Article = styled.article`    
    width: 35%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const BodyText = styled.p`
    margin-bottom: 54px;    
`

export const WrapperInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 24px;
    gap: 50px;
    border-top: 1px solid #383B4B;
    text-align: center;
    & div {
        display: flex;
        flex-direction: column;
    }
    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }
`
