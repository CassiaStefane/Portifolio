import './Nav.css';
import { VscMenu } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";

function Nav(){
    const handleClick = ()=>{
        const element = document.querySelector('#vsMenu');
        element.setAttribute('id', 'display');
    }
    return(
        <div className={'Nav'}>
             <div className={"logo"}>
                <h1>LOGO</h1>
            </div>
            <div className={'VscMenu'} onClick={handleClick}>
                <VscMenu/>
            </div>
            <div className={"nav-bar"} id={'vsMenu'}>
                <VscClose className={'VscClose'}/>
                <a href='#header.id'>Home</a>
                <a href='#projetos.id'>Project</a>
                <a href='#projetos.id'>Contact</a>
            </div>
        </div>
    )
}
export default Nav;