import logoImg from '../../assets/logo.png';
import { NavContainer } from './styles';

export function Nav() {
    return (
      <NavContainer>
        <div className='conainer-nav'>
          <nav>
            <div className="nav-wrapper #9e9e9e grey">
              <a href="https://www.colab.re/" className="brand-logo center" target='_blank'> <strong> Collab </strong> </a>
            </div>
          </nav>
        </div>
      </NavContainer>
    );
}