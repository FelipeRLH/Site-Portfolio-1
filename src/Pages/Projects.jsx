// REACT
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { BsFillRocketTakeoffFill } from 'react-icons/bs';

// COMPONENTS
import Projectsdata from "./Projectsdata"

// IMG
import project_template from "../Assets/projects/project_template.png"
import filmestmdb from "../Assets/projects/filmestmdb.png"
import siteportfolio from "../Assets/projects/siteportfolio.png"
import todoreact from "../Assets/projects/todoreact.png"

// CSS
import "./Project.css"


function Projects() {
  // VISIBILITY ON SCROLL
  const [visibilityLeft, setVisibilityLeft] = useState({
    project1: "hidden",
    project2: "hidden",
    project3: "hidden",
    project4: "hidden"

  })
  const [visibilityRight, setVisibilityRight] = useState({
    project1: "hidden",
    project2: "hidden",
    project3: "hidden",
    project4: "hidden"
  })

  // VISIBILITY ON SCROLL
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 1100) {
        setVisibilityLeft(prevState => {
          return { ...prevState, project1: "showLeft" }
        })
        setVisibilityRight(prevState => {
          return { ...prevState, project1: "showRight" }
        })
      }
      if (window.scrollY >= 1500) {
        setVisibilityLeft(prevState => {
          return { ...prevState, project2: "showLeft" }
        })
        setVisibilityRight(prevState => {
          return { ...prevState, project2: "showRight" }
        })
      }
      if (window.scrollY >= 1900) {
        setVisibilityLeft(prevState => {
          return { ...prevState, project3: "showLeft" }
        })
        setVisibilityRight(prevState => {
          return { ...prevState, project3: "showRight" }
        })
      }
      if (window.scrollY >= 2300) {
        setVisibilityLeft(prevState => {
          return { ...prevState, project4: "showLeft" }
        })
        setVisibilityRight(prevState => {
          return { ...prevState, project4: "showRight" }
        })
      }
    }


    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const project1 = {
    type: "type1",
    visibility: [visibilityLeft.project1, visibilityRight.project1],
    title: "Lorem ipsum",
    img: project_template,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, recusandae voluptatibus nesciunt praesentium quidem voluptatum quod a, consectetur beatae labore alias excepturi nobis, esse quia dolorem. Dolor fugit obcaecati sequi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, recusandae voluptatibus nesciunt praesentium quidem voluptatum quod a, consectetur beatae labore alias excepturi nobis, esse quia dolorem. Dolor fugit obcaecati sequi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, recusandae voluptatibus nesciunt praesentium quidem voluptatum quod a, consectetur beatae",
    tecs: ["HTML", "CSS", "JavaScript", "React"],
    links: [""]
  }
  const project2 = {
    type: "type2",
    visibility: [visibilityLeft.project2, visibilityRight.project2],
    title: "Lorem ipsum",
    img: project_template,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, recusandae voluptatibus nesciunt praesentium quidem voluptatum quod a, consectetur beatae labore alias excepturi nobis, esse quia dolorem. Dolor fugit obcaecati sequi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, recusandae voluptatibus nesciunt praesentium quidem voluptatum quod a, consectetur beatae labore alias excepturi nobis, esse quia dolorem. Dolor fugit obcaecati sequi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, recusandae voluptatibus nesciunt praesentium quidem voluptatum quod a, consectetur beatae",
    tecs: ["HTML", "CSS", "JavaScript", "React"],
    links: [""]
  }
  const project3 = {
    type: "type1",
    visibility: [visibilityLeft.project3, visibilityRight.project3],
    title: "Lorem ipsum",
    img: project_template,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, recusandae voluptatibus nesciunt praesentium quidem voluptatum quod a, consectetur beatae labore alias excepturi nobis, esse quia dolorem. Dolor fugit obcaecati sequi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, recusandae voluptatibus nesciunt praesentium quidem voluptatum quod a, consectetur beatae labore alias excepturi nobis, esse quia dolorem. Dolor fugit obcaecati sequi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, recusandae voluptatibus nesciunt praesentium quidem voluptatum quod a, consectetur beatae",
    tecs: ["HTML", "CSS", "JavaScript", "React", "Figma"],
    links: ["", ""]
  }
  const project4 = {
    type: "type2",
    visibility: [visibilityLeft.project4, visibilityRight.project4],
    title: "Lorem ipsum",
    img: project_template,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, recusandae voluptatibus nesciunt praesentium quidem voluptatum quod a, consectetur beatae labore alias excepturi nobis, esse quia dolorem. Dolor fugit obcaecati sequi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, recusandae voluptatibus nesciunt praesentium quidem voluptatum quod a, consectetur beatae labore alias excepturi nobis, esse quia dolorem. Dolor fugit obcaecati sequi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, recusandae voluptatibus",
    tecs: ["HTML", "CSS", "JavaScript", "React"],
    links: [""]
  }


  return (
    <div id='projetos'>
      <div className='container-projects'>
        <div className='title-projects'>
          <h2>Projetos</h2>
          <p>Estes são alguns dos principais projetos que ja realizei. Fique a vontade para clicar e navegar neles.</p>
        </div>
        <Projectsdata
          type={project1.type}
          visibility={project1.visibility}
          title={project1.title}
          description={project1.description}
          tecs={project1.tecs}
          img={project1.img}
          links={project1.links} />
        <Projectsdata
          type={project2.type}
          visibility={project2.visibility}
          title={project2.title}
          description={project2.description}
          tecs={project2.tecs}
          img={project2.img}
          links={project2.links} />
        <Projectsdata
          type={project3.type}
          visibility={project3.visibility}
          title={project3.title}
          description={project3.description}
          tecs={project3.tecs}
          img={project3.img}
          links={project3.links} />
        <Projectsdata
          type={project4.type}
          visibility={project4.visibility}
          title={project4.title}
          description={project4.description}
          tecs={project4.tecs}
          img={project4.img}
          links={project4.links} />
      </div>

      <div className="more-projects">
        <Link to={"https://github.com/FelipeRLH?tab=repositories"}>Veja mais projetos no meu Github <BsFillRocketTakeoffFill /></Link>
      </div>
    </div>
  )
}

export default Projects