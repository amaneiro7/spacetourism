import styled from 'styled-components'

export const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 5%;
    margin-bottom: 5%;
    @media (min-width: 1024px) {
        flex-direction: row;
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
    justify-content: space-evenly;
    text-align: center;
    margin-inline-start: 100px;
    @media (min-width: 1024px) {
        align-items: flex-start;        
        text-align: left;
    }
`

export const Button = styled.button`
    background-color: transparent;
    min-width: 210px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    border: 60px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    cursor: pointer;
    &:hover {
        border-color: rgba(255,255,255,.2);
    }
    h4 {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--text-secondary-color);
        min-width: 150px;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        color: var(--background-color);
        border: none;
    }
    @media (min-width: 768px) {
        min-width: 338px;
        border-width: 96px;
        h4 {
            min-width: 242px;
        }
    }
    @media (min-width: 1024px) {
        min-width: 450px;
        min-height: 450px;
        border-width: 150px;
        h4 {
            min-width: 275px;
        }
    }
`
