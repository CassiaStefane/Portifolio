import './Project.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import foto from './img/nana osaki icon.jpg';
import { PiArrowElbowRightDownBold } from "react-icons/pi";

function Project(){
    return(
        <div className={'conteiner'}>
            <div className={'title-projeto'}>
                <h3 className={'title'}>PROJETOS</h3>
                <PiArrowElbowRightDownBold className={'arrow'}/>
            </div>
             <div className={'project'} id={'projetos.id'}>
             <Carousel variant='dark' hover='pause'>
                <Carousel.Item>
                <div className={'section'}>
                    <img className='projetos' src={foto} alt={'an project exaple'}></img>
                    <div className={'info'}>
                        <h4>hi</h4>
                        <p>hdth nvdt yksx dxhnvd cyktdxh</p>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className={'section'}>
                    <img className='projetos' src={foto} alt={'an project exaple'}></img>
                    <div className={'info'}>
                        <h4>hi</h4>
                        <p>hdth nvdt yksx dxhnvd cyktdxh</p>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className={'section'}>
                    <img className='projetos' src={foto} alt={'an project exaple'}></img>
                    <div className={'info'}>
                        <h4>hi</h4>
                        <p>hdth nvdt yksx dxhnvd cyktdxh</p>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className={'section'}>
                    <img className='projetos' src={foto} alt={'an project exaple'}></img>
                    <div className={'info'}>
                        <h4>hi</h4>
                        <p>hdth nvdt yksx dxhnvd cyktdxh</p>
                    </div>
                </div>
            </Carousel.Item>
            </Carousel>
            </div>
        </div>
    )
}
export default Project;