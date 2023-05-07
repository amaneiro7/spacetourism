import styled from 'styled-components'

export const Section = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10%;    
`

export const Image = styled.img`
    margin-top: 35px;
    max-width: 30vw;
    min-width: 300px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
`

export const Article = styled.article`    
    max-width: 30vw;
    min-width:300px;
    display: flex;
    flex-direction: column;
`

export const BodyText = styled.p`
    margin-bottom: 54px;
`

export const WrapperInfo = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 24px;
    gap: 50px;
    border-top: 1px solid #383B4B;
;
    &div {
        display: flex;
        flex-direction: column;
    }
`