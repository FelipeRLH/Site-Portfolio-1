// REACT
import { Link } from 'react-router-dom';
import { BsGithub, BsBoxArrowUpRight } from 'react-icons/bs';


function Projectsdata({ type, visibility, title, description, tecs, img, links }) {

    return (
        <div>
            <div className="overflow">
                {(type === "type1") &&
                    <div className='project'>
                        <div className={`image-project ${visibility[0]}`}>
                            <Link to={links[0]} target='_blank'><img src={img} alt={title} /></Link>
                        </div>

                        <div className={`description-project ${visibility[1]}`}>
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <div className="tecs-projects">
                                <span>{tecs[0]}</span>
                                <span>{tecs[1]}</span>
                                <span>{tecs[2]}</span>
                                <span>{tecs[3]}</span>
                                <span>{tecs[4]}</span>
                            </div>
                            <div className="links-projects">
                                <Link to={links[0]} target='_blank'>Code <BsGithub /></Link>
                                <Link to={links[1]} target='_blank'>Ver Demonstração <BsBoxArrowUpRight /></Link>
                            </div>
                        </div>
                    </div>
                }
                {(type === "type2") &&
                    <div className='project'>

                        <div className={`description-project ${visibility[0]}`}>
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <div className="tecs-projects">
                                <span>{tecs[0]}</span>
                                <span>{tecs[1]}</span>
                                <span>{tecs[2]}</span>
                                <span>{tecs[3]}</span>
                                <span>{tecs[4]}</span>
                            </div>
                            <div className="links-projects">
                                <Link to={links[0]} target='_blank'>Code <BsGithub /></Link>
                                <Link to={links[1]} target='_blank'>Ver Demonstração <BsBoxArrowUpRight /></Link>
                            </div>
                        </div>
                        <div className={`image-project ${visibility[1]}`}>
                            <Link to={links[0]} target='_blank'><img src={img} alt={title} /></Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Projectsdata