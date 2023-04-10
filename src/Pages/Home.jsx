// REACT
import { Link } from 'react-router-dom';
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

// COMPONENTS
import Navbar from '../Components/Navbar'

// IMG
import img_home from '../Assets/Home/img_home.png'
import img_social from '../Assets/Home/img_social.png'

// CSS
import "./Home.css"


function Home() {
    // Navigation btn home
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main id='home'>
            <Navbar />

            <div className='container-home'>
                <div className='container-text-home'>
                    <p className='greetings'>
                        Olá, <span>eu sou</span> <br />
                    </p>
                    <h2>Lorem</h2>
                    <h1>Desenvolvedor Front-end <br /> React Júnior</h1>
                    <p className='text-introduction'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Quidem tenetur voluptatem, magnam, molestias quibusdam sit 
                        consectetur illo delectus est quas perferendis reiciendis 
                    </p>
                    <button className='btn' onClick={() => handleScroll("contato")}>Falar comigo</button>

                    <div className='social-home'>
                        <div className='container-icon'>
                            <Link to="https://www.instagram.com/felipe_alvezs_/" target="_blank">
                                <img src={img_social} alt="" width={30} />
                                <div className="icon">
                                    <BsInstagram className='icon' />
                                </div>
                            </Link>
                        </div>
                        <div className='container-icon'>
                            <Link to="https://www.linkedin.com/feed/" target="_blank">
                                <img src={img_social} alt="" width={30} />
                                <div className="icon">
                                    <BsLinkedin className='icon' />
                                </div>
                            </Link>
                        </div>
                        <div className='container-icon'>
                            <Link to="https://github.com/FelipeRLH" target="_blank">
                                <img src={img_social} alt="" width={30} />
                                <div className="icon">
                                    <BsGithub className='icon' />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='container-img-home'>
                    <img src={img_home} alt="Imagem Home" width={500} />
                </div>
            </div>
        </main>

    )
}

export default Home