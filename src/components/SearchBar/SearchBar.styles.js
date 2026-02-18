import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    background: var(--darkGrey);
    padding: 0 20px;
`;

export const Content = styled.div`
    position: relative;
    max-width: var(--maxwidth);
    width: 100%;
    height: 55px;
    background: var(--medGrey);
    margin: 0 auto;
    border-radius: 40px;
    color: var(--white);

    img {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        width: 30px;
        z-index: 2;
        cursor: pointer;

        &:hover {
            transform: translateY(-50%) scale(1.2);
        }
    }

    input {
        position: absolute;
        left: 0;
        margin: 8px 0;
        width: 95%;
        height: 40px;
        background: transparent;
        border: 0;
        color: var(--white);
        font-size: 22px;
        padding: 0 0 0 60px;
        font-family: 'Abel', sans-serif;
        outline: none;

        :focus {
            outline: none;
        }

        ::placeholder {
            color: var(--lightGrey);
        }
    }
`;
