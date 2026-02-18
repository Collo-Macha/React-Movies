import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: var(--maxwidth);
    margin: 0 auto;
    padding: 0 20px;

    h1{
        font-size: 2rem;
        color: var(--medGrey);

        @media screen and (max-width: 720px) {
            font-size: var(--fontMed);
        }
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;
`;