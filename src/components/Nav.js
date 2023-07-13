import './Nav.css';

function Nav(){
    return(
        <div className={'Nav'}>
             <div className={"logo"}>
                <h1>LOGO</h1>
            </div>
            <div className={"nav-bar"}>
                <h1>Home</h1>
                <h1>About</h1>
                <h1>Project</h1>
            </div>
        </div>
    )
}
export default Nav;