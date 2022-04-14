import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    
    overflow-wrap: break-word;
    word-wrap: break-word;

    background: #6C3D8C;

    h1 {
        margin: 0;
        padding: 0;
    }

    span{
        font-size: 10rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #FFFFFF;

        &::after{
            content: '|';
            opacity: 1;
            animation: cursorBlink 10s infinite normal; 
        }

        strong {
            font-weight: 800;
        }

    }

    @media (max-width: 480px) {
        span{
            font-size: 5rem;
        }
    }

    @media (min-width: 780px) {
        span{
            font-size: 5rem;
        }
    }
`;