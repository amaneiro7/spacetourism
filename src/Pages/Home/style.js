import styled from 'styled-components'

export const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-top: 5%;
    margin-bottom: 5%;
    @media (min-width: 1140px) {
        align-items: flex-end;
        justify-content: space-between;
    }
    `

export const Article = styled.article`
    max-width: 450px;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;    
    text-align: center;
    @media (min-width: 1140px) {
        align-items: flex-start;        
        text-align: left;
    }
`

export const Button = styled.button`
    background-color: transparent;
    min-width: 250px;
    max-width: 450px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    border: 100px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    cursor: pointer;
    &:hover {
        border: 100px solid rgba(255,255,255,.2);
    }
    h4 {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--text-secondary-color);
        width: 275px;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        color: var(--background-color);
        border: none;
    }
`
