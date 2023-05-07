import styled from 'styled-components'

export const Wrapper = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: auto;
    padding-block: 5%;
    gap: 5%;
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        align-items: flex-start;
        justify-content: space-between;
    }
    @media (min-width: 1024px) {        
        align-items: flex-start;
        justify-content: space-between;
    }
`

export const WrapperInfo = styled.article`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`

export const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2%;
    h4 {
        color: var(--text-secondary-color);
        opacity: .5;   
    }
    h5 {
        margin-bottom: 10px;
    }
`
export const Title = styled.h5`
    color: var(--text-secondary-color);   
    & span{
        opacity: 0.25;
    }
`

export const Image = styled.img`
    width: 100%;
`
