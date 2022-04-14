import React, { ReactChild, ReactChildren } from "react";
import styled from "styled-components";

export const Container = styled.span`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin: 0 0 0 0.3rem;
        width: 20vw;
    }

    .circle {
        margin-top: 1.2rem;
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 1.5rem;
            width: 50vw;
        }
    }

`;

interface IProps {
    children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

export const Content = styled.div<IProps>`
    position: absolute;
    top: 3%;

    width: 20rem;

    margin: 4rem 0 0 6rem;

    i {
        width: 2rem;
        height: 2rem;
        margin: 0;
    }

    div {
        display: flex;
        align-items: center;

        font-size: 1.5rem;
    }

    @media screen and (max-width: 768px) {
        i {
            width: 2rem;
            height: 2rem;
            margin: 0;
        }

        div {
            font-size: 5px;
        }
    }
`;