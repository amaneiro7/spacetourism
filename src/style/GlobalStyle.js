import styled from 'styled-components'

export const Title = styled.h5`
    margin-block: 75px 60px;
    margin-inline-start: 60px;
    color: var(--text-secondary-color);   
    & span{
        opacity: 0.25;
    }
    @media (min-width: 1024px) {
        margin-block-end: 10px;
        margin-inline-start: 100px;
    }
`
export const Name = styled.h3`
    margin-block: 10px 18px;
    font-size: 24px;
    line-height: 28px;
    @media (min-width: 768px) {
        font-size: 40px;
        line-height: 46px;
    }
    @media (min-width: 1024) {
        font-size: 56px;
        line-height: 64px;
    }
`
