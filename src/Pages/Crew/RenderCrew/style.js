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
    width: 40vw;
`
export const Article = styled.article`    
    width: 40vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;    
    justify-content: space-between;
    margin-bottom: 20px;
`
export const WrapperInfo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 14px;
    h4 {
        color: var(--text-secondary-color);
        opacity: .5;   
    }
    h5 {
        margin-bottom: 10px;
    }
    `
