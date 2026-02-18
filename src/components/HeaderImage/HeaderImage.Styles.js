import styled from 'styled-components';

export const Wrapper = styled.div`
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.3) 70%,
        rgba(0, 0, 0, 0) 100%
    ),
    url(${props => props.$image});
    background-size: cover;
    background-position: center;
    height: 600px;
    position: relative;
    animation: animateHeader 1s;

    @keyframes animateHeader {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;

export const Content = styled.div`
    max-width: var(--maxwidth);
    padding: 20px;
    margin: 0 auto;
`;

export const Text = styled.div`
    z-index: 100;
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    color: var(--white);

    h1 {
        font-size: var(--fontSuperBig);

        @media screen and (max-width: 720px) {
            font-size: var(--fontBig);
        }
    }

    p {
        font-size: var(--fontMed);

        @media screen and (max-width: 720px) {
            font-size: var(--fontSmall);
        }
    }
`;