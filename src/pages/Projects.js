import styled from "styled-components";
import { motion } from "framer-motion";
import Project from "../components/Project";
import { useEffect } from "react";
import WebGL from "../components/WebGL";
import Contact from "../components/Contact";

const Projects = () => {
  useEffect(() => {
    new WebGL({
      dom: document.querySelector(".webgl"),
    });
  }, []);

  return (
    <motion.div
      key="projects"
      animate={{ opacity: 1, transition: { duration: 1 } }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="webgl"></div>
      <StyledProjects>
        <h1>Projects</h1>
        <Project
          title={"Mozaaq"}
          link={"mozaaq.com"}
          image="/project-images/mozaaq.png"
        >
          <p>
            <b>Tech Stack:</b> React, Framer Motion, Gsap, Strapi, Node, Express
          </p>
        </Project>
        <Project
          title={"Mowsse"}
          link={"mowsse.com"}
          image="/project-images/mowsse.png"
          dim
        >
          <p>
            <b>Tech Stack:</b> React, Styled Components
          </p>
        </Project>
        <Project
          title={"Art Central"}
          link={"art-central-bd.web.app"}
          image="/project-images/art-central.png"
          dim
        >
          <p>
            <b>Tech Stack:</b> React, Node, Express, Firebase, MongoDB
          </p>
        </Project>
        <Project
          title={"Plant 766"}
          link={"planet766.io"}
          image="/project-images/planet766.png"
          dim
        >
          <p>
            <b>Tech Stack:</b> React, Three.js, Gsap
          </p>
        </Project>
        <Project
          title={"GridMatrix"}
          link={"www.gridmatrix.com"}
          image="/project-images/gridmatrix.webp"
        >
          <p>
            <b>Tech Stack:</b> HTML5, Scss, JavaScript, Barba.js, PHP
          </p>
        </Project>
        <Project
          title={"3D Showroom"}
          link={"sajal353.github.io/car-showroom"}
          image="/project-images/showroom.webp"
        >
          <p>
            <b>Tech Stack:</b> JavaScript, THREE.js, Vite
          </p>
        </Project>
        <Project
          title={"Portfolio"}
          link={"sajalbiswas.com"}
          image="/project-images/self.png"
          dim
        >
          <p>
            <b>Tech Stack:</b> React, Styled Components, Framer Motion, Gsap,
            Three.js, WebGL
          </p>
        </Project>
      </StyledProjects>
      <Contact />
    </motion.div>
  );
};

const StyledProjects = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 600px) {
    margin-top: 4rem;
  }
  h1 {
    text-align: center;
  }
`;

export default Projects;
