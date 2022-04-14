import React, { ReactEventHandler, useEffect, useState } from "react";
import { render } from "react-dom";
import { useNavigate } from "react-router-dom";
import { User } from "../../models";
import { ROUTES } from "../../routes";
import { api } from "../../services/api";
import { UserModal } from "../modal";
import { Container } from "./styles";
import M from "materialize-css";

interface IListProps {
    onClick: () => void;
    isOpen: boolean;
    onRequestClose: () => void;
}

export function List() {
    let [page, setPage] = useState<number>(1);
    let [limit, setLimit] = useState<number>(5);

    const [users, setUsers] = useState<User[]>([]);
    const [user, setUser] =useState<User>();

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

    const loadUsers = () => {
        api.get(`/?page=${page}&results=${limit}`)
            .then(response => {
                const newUsers: User[] = response.data.results;
                setUsers(oldUsers => [...oldUsers, ...newUsers])
            }
        );
    }

    const handleOpenUserModal = (user: User) => {
        setUser(user)
        setModalIsOpen(true);
    }

    const handleCloseUserModal = () => {
        setModalIsOpen(false);
    }

    const handleScroll = (e: any) => {
        if(window.innerHeight + e.target.documentElement.scrollTop + 1 > e.target.documentElement.scrollHeight) {
            page++;
            loadUsers();
        }
    }

    useEffect(() => {
        loadUsers();
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <Container>
                <ul  className="collection">
                    {
                        users.map((user, idx) => {
                            return (
                                <li key={idx} className="collection-item avatar" onClick={ () => handleOpenUserModal(user)}>
                                    <img src={user.picture.medium} alt="" className="circle" />
                                    <div className="title"> {user.name.first} {user.name.last} </div>
                                    <p> {user.email}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </Container>
            <UserModal isOpen={modalIsOpen} onRequestClose={handleCloseUserModal} user={user} />
        </>
    )
}