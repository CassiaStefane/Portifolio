import foto from './img/foto.png';
import './Intro.css';

function Header(){
    return(
        <div className={'header'}>
            <div>
                <h1>Hi Hello</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <img className={'foto'} alt="Myself" src={foto} />
        </div>
    )
}
export default Header;