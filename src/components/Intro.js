import foto from './img/dsign from pinterest.jpeg';
import './Intro.css';
import { ImHtmlFive } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { SiReact } from "react-icons/si";

function Header(){
    return(
        <div className={'header'} id={'header.id'}>
            <div className={'intro'}>
                <h1>Meu nome aqui</h1>
                <h3>Web developer</h3>
                <hr></hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <div className={'icons'}>
                <ImHtmlFive/>
                <IoLogoCss3/>
                <IoLogoJavascript/>
                <SiReact/>
                </div>
                <a className='button' href='#projetos.id'>Ver mais</a>
            </div>
            <img className={'foto'} alt="Myself" src={foto} />
        </div>
    )
}
export default Header;