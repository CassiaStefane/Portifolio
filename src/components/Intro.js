import foto from './img/nana osaki icon.jpg';
import './Intro.css';

function Header(){
    return(
        <div className={'header'} id={'header.id'}>
            <div className={'intro'}>
                <h1>Cássia Morais web developer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <a className='button' href='#projetos.id'>Ver mais</a>
            </div>
            <img className={'foto'} alt="Myself" src={foto} />
        </div>
    )
}
export default Header;