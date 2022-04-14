import styled from "styled-components";

interface IButton {
    top?: string;
}

export const ContainerButton = styled.button<IButton>`
    width: 6vw;
    min-width: 100px;
    height: auto;
    margin: 0;
    padding: 0.8rem 0;
    
    background: #77439A;
    border-radius: 3rem;
    border: 0;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    
    position: fixed;
    right: 5%;
    top: ${(props) => props.top ? props.top : '5%'};

    color: white;
    font-style: bold;
    font-size: 1.2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    @media (max-width: 768px){
        width: 10vw;
        min-width: 80px;
        height: auto;
        margin: 0;
        padding: 0.8rem 0;

        right: 5%;
        top: 2.3%;
    };

    transition: filter 1.3s;

    &:hover {
        cursor: pointer;
        filter: brightness(0.9);
    }
`;