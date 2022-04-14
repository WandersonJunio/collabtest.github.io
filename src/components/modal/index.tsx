import Modal from 'react-modal';
import { User } from '../../models';
import { Container, Content } from './style';
// import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import React, { ReactChild, ReactChildren } from "react";
import { Line } from '../line';

interface IUserModal {
    isOpen: boolean;
    onRequestClose: () => void;
    user?: User;
    children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

export function UserModal({isOpen, onRequestClose, user}: IUserModal) {
    
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <Container>
                <h2> More informations </h2>
                <button type='button' onClick={onRequestClose} className='react-modal-close'>
                    <i className='small material-icons'> close </i>
                </button>
                <Content>
                    <Line
                        identity={user?.name.first}
                        icon={'personal'}
                    />
                    <Line
                        identity={user?.email}
                        icon={'mail'}
                    />
                    <Line
                        identity={user?.dob.age as unknown as string}
                        icon={'fiber_manual_record'}
                    />
                    <Line
                        identity={(user?.location.city) && (user?.location.state)  }
                        icon={'location_on'}
                    />
                    
                </Content>
                <img src={user?.picture.medium} alt="" className="circle" />
            </Container>
        </Modal>
    );
}
