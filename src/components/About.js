import './About.css';
import me from './img/me.jpeg';

function About(){
    return(
        <div className='about'>
            <img className={'me'} alt="Myself" src={me} />
            
            <div className='about-info'>
                <hr></hr>
                    <h1>What Im I?</h1>
                    <p>
                        I am an web developer and  student  who is ready to work hard.
                    </p>
                    <div className='idioma'>
                        <h5>language :</h5>
                        <div>
                            <h6>PT</h6>
                            <h6>ENG</h6>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default About;