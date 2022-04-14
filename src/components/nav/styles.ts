import styled from "styled-components";

export const NavContainer = styled.div`
    margin: 0;
    width: 100vw;

    div{
        position: fixed;
        top: 0%;

        width: 100vw;
        min-height: 70px;
        height: 8vh;
    
        margin: 0;
    }

    a {
        height: 8vh;
        min-height: 70px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 3.5rem;

        @media (max-width: 780px) {
            height: 10vh;
            font-size: 3rem;
        }
    }
`;