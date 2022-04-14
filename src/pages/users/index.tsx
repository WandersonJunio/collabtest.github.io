import { useState } from "react";
import { Modal, Button as MB } from "react-materialize";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { List } from "../../components/list";
import { UserModal } from "../../components/modal";
import { Nav } from "../../components/nav/Nav";
import { User } from "../../models";
import { ROUTES } from "../../routes";
import { GlobalStyle } from "../../styles/global";

export function Users() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(ROUTES.HOME);
    }

    return (
        <>
            <GlobalStyle />
            <List />
    
            <Nav />
            <Button
                value="Home"
                onClick={handleClick}
                top='1.5%'
            />
        </>
    );
}