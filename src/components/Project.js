import './Project.css';
import foto from './img/nana osaki icon.jpg';
import { PiArrowElbowRightDownBold } from "react-icons/pi";

function Project(){
    return(
        <div className={'conteiner'}>
            <h3>PROJETOS</h3>
            <PiArrowElbowRightDownBold className={'arrow'}/>
            <hr></hr>
            <div className={'project'} id={'projetos.id'}>
                <div className={'section'}>
                    <img className='projetos' src={foto} alt={'an project exaple'}></img>
                    <div className={'info'}>
                        <h4>hi</h4>
                        <p>hdth nvdt yksx dxhnvd cyktdxh</p>
                    </div>
                </div>
                <div className={'section'}>
                    <img className='projetos' src={foto} alt={'an project exaple'}></img>
                    <div className={'info'}>
                        <h4>hi</h4>
                        <p>hdth nvdt yksx dxhnvd cyktdxh</p>
                    </div>
                </div>
                <div className={'section'}>
                    <img className='projetos' src={foto} alt={'an project exaple'}></img>
                    <div className={'info'}>
                        <h4>hi</h4>
                        <p>hdth nvdt yksx dxhnvd cyktdxh</p>
                    </div>
                </div>
                <div className={'section'}>
                    <img className='projetos' src={foto} alt={'an project exaple'}></img>
                    <div className={'info'}>
                        <h4>hi</h4>
                        <p>hdth nvdt yksx dxhnvd cyktdxh</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Project;