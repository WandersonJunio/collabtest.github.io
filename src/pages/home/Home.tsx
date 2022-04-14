import { Container } from "./styles";
import logoImg from '../../assets/logo.png';
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";
import { Router, ROUTES } from "../../routes";
import { useEffect, useState } from "react";

export function Home() {
    const value = 'Users';

    const intialText: string = 'exerça a sua cidadania!';

    let [text, setText] = useState<string>('');

    useEffect(() => {
        typeWrite()
    }, [])

    const navigate = useNavigate();

    const handleRedirectToUsers = () => {
        navigate(ROUTES.USERS);
    }

    var content = 'exerça a sua cidadania!'
    var speed = 200;
    var cont = 0;
    function typeWrite(){
        if(cont < content.length){
            text += content.charAt(cont);
            setText(text);
            cont++;
            setTimeout(typeWrite, speed);
        }
    }

    return (
        <>
            <Button 
                value={value}
                onClick={handleRedirectToUsers}
                top='1.5%'
            />
            <Container>
                <span>
                    {/*  href="https://www.colab.re/" target='_blank'  */}
                    <strong>Collab,</strong>
                    {text} 
                </span>
            </Container>
        </>
    );
}