import styled from "styled-components";

export const Container = styled.span`
    width: 20rem;

    i {
        width: 2rem;
        height: 2rem;
        margin: 0;
    }

    display: flex;
    align-items: center;
    font-size: 1rem;

    padding: 0 0 0.3rem 0;

    @media (max-width: 100px) {
        width: 50vw;
        min-height: 1rem;
        font-size: 93.75%;
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
`;