import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 7rem;

    .collection {
        width: 60vw;
        height: auto;

        margin: 0;

        display: flex;
        flex-direction: column;

        li {
            transition: filter 0.4s;

            &:hover {
                filter: brightness(0.9);
            }
        }

        @media (max-width: 780px) {
            width: 90vw;
        }

    }

    .collection-item.avatar {
        padding: 2rem 5.2rem;

        &:hover {
            cursor: pointer;
        }
    }
`;