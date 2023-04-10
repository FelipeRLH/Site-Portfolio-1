// REACT
import { useState, useEffect } from "react"

// IMG
import img_escritorio from "../Assets/About/img_escritorio.png"
import html_logo from "../Assets/About/html_logo.png"
import css_logo from "../Assets/About/css_logo.png"
import javascript_logo from "../Assets/About/javascript_logo.png"
import react_logo from "../Assets/About/react_logo.png"
import bootstrap_logo from "../Assets/About/bootstrap_logo.png"
import figma_logo from "../Assets/About/figma_logo.png"

// CSS
import "./About.css"

function About() {
  // VISIBILITY ON SCROLL
  const [visibilityLeft, setVisibilityLeft] = useState("hidden")
  const [visibilityRight, setVisibilityRight] = useState("hidden")

  // VISIBILITY ON SCROLL
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 300) {
        setVisibilityLeft("showLeft")
        setVisibilityRight("showRight")
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div id='sobre'>
      <div className='container-about'>
        <div className="image-about">
          <img className={visibilityLeft} src={img_escritorio} alt="" />
        </div>
        <div className={`text-about ${visibilityRight}`}>
          <h2>Sobre mim</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta tenetur ab omnis quas rem libero ducimus, dolorum ut vitae blanditiis a quasi corrupti totam quae beatae quibusdam architecto! Dolorem, magni.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, odit? Dolore, amet! Quaerat, dicta quis adipisci facere fugit odio porro laboriosam vitae, fugiat autem inventore consequuntur. Voluptates dicta dolor corporis.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt vero magnam beatae adipisci voluptate maiores possimus accusantium, laborum molestiae, harum suscipit quisquam quam consequatur aliquam quidem mollitia nemo quasi ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure temporibus sed ratione reprehenderit laudantium? Reiciendis perferendis dolor, iure, aliquid culpa debitis nulla animi quidem illo commodi eum, nam excepturi et.</p>
          <div className='tecs-about'>
            <img src={html_logo} alt="" />
            <img src={css_logo} alt="" />
            <img src={javascript_logo} alt="" />
            <img src={react_logo} alt="" />
            <img src={bootstrap_logo} alt="" />
            <img src={figma_logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About