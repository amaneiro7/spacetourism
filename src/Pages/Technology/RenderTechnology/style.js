import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template:
    "image"
    "inputs"
    "body";
    align-items: center;
    justify-content: center;
    align-content: center;
    @media (min-width: 768px) {
        justify-content: flex-start;        
        align-items: start;
        align-content: start;
    }
    @media (min-width: 1024px) {
        grid-template: "inputs body image";
        justify-content: space-between;        
        align-items: center;
    }
`

export const Image = styled.figure`
    padding: 0;
    margin: 0;
    width: 100vw;
    grid-area: image;
    & img{
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        object-position: bottom;
    }
    @media (min-width: 1024px) {
        width: 40vw;
        & img {
            object-fit: contain;
            aspect-ratio: 1 / 1;
        }
    }
`
export const Body = styled.div`
    width: 100%;
    margin: 0 auto;
    grid-area: body;
    width: 50vw;
    display: flex;
    flex-direction: column;
    @media (min-width: 1024px) {
        width: 30vw;
    }
`
