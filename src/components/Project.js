import './Project.css';
import { PiArrowElbowRightDownBold } from "react-icons/pi";

function Project(){
    return(
        <div className={'conteiner'}>
            <h3>Projects</h3>
            <PiArrowElbowRightDownBold className={'arrow'}/>
            <hr></hr>
            <div className={'project'} id={'projetos.id'}>
                <div className={'section'}>
                    <h4>hi</h4>
                    <p>hdth nvdt yksx dxhnvd cyktdxh</p>
                </div>
                <div className={'section'}>
                    <h4>hi</h4>
                    <p>hdth nvdt yksx dxhnvd cyktdxh</p>
                </div>
                <div className={'section'}>
                    <h4>hi</h4>
                    <p>hdth nvdt yksx dxhnvd cyktdxh</p>
                </div>
            </div>
        </div>
    )
}
export default Project;