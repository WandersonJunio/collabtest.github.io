import { Icon } from "react-materialize";
import { User } from "../../models";
import { Container } from "./style";

interface ILine {
    identity?: string;
    icon: string;
}

export function Line({ identity, icon }: ILine) {
    return(
        <Container>
                <i className='small material-icons'> {icon} </i>
                {identity}
        </Container>
    );
}