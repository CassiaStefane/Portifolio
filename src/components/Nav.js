import './Nav.css';
import { VscMenu } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";

function Nav(){
    const handleClick = ()=>{
        const element = document.querySelector('#display');
        element.style.display = 'flex';
    }
    const handleClose = ()=>{
        const element = document.querySelector('#display');
        element.style.display = 'none';
    }
    return(
        <div className={'Nav'}>
             <div className={"logo"}>
                <h1>LOGO</h1>
            </div>
            <div className={'VscMenu'} onClick={handleClick}>
                <VscMenu/>
            </div>
            <div className={"nav-bar"} id={'display'}>
                <VscClose className={'VscClose'} id={'vsClose'} onClick={handleClose}/>
                <a href='#header.id'>Home</a>
                <a href='#projetos.id'>Project</a>
                <a href='#projetos.id'>Contact</a>
            </div>
        </div>
    )
}
export default Nav;