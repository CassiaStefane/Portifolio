import './Nav.css';
import { VscMenu } from "react-icons/vsc";

function Nav(){
    const handleClick = ()=>{
        const element = document.querySelector('#display');
        element.style.display = 'flex';}
    return(
        <div className={'Nav'}>
             <div className={"logo"}>
                <h1>LOGO</h1>
            </div>
            <div className={'VscMenu'} onClick={handleClick}>
                <VscMenu/>
            </div>
            <div className={"nav-bar"} id={'display'}>
                <a href='#header.id'>Home</a>
                <a href='#projetos.id'>Project</a>
                <a href='#projetos.id'>Contact</a>
            </div>
        </div>
    )
}
export default Nav;