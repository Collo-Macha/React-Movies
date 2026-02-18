import styled from "styled-components";

export const Spinner = styled.div`
    border: 16px solid var(--lightGrey);
    border-top: 16px solid var(--medGrey);
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
    margin: 20px auto;
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;