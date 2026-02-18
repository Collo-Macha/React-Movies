import styled from 'styled-components';

export const Wrapper = styled.button`
    display: block;
    background: var(--darkGrey);
    width: 25%;
    height: 60px;
    color: var(--white);
    border: 0;
    font-size: var(--fontBig);
    border-radius: 30px;
    margin: 20px auto;
    cursor: pointer;
    transition: all 0.3s;
    outline: none;

    &:hover {
        opacity: 0.8;
    }
`;