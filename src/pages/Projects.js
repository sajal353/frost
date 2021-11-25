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
            <b>Tech Stack:</b> React, Next.js, Styled Components
          </p>
        </Project>
        <Project
          title={"Art Central [Hobby]"}
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
          title={"3D Showroom [Hobby]"}
          link={"sajal353.github.io/car-showroom"}
          image="/project-images/showroom.webp"
        >
          <p>
            <b>Tech Stack:</b> JavaScript, THREE.js, Vite
          </p>
        </Project>
        <Project
          title={"Alpine Proxies [Unavailable]"}
          link={"sajal353.github.io/alpine"}
          image="/project-images/alpine.png"
          dim
        >
          <p>
            <b>Tech Stack:</b> HTML5, Scss
          </p>
        </Project>
        <Project
          title={"Asset Backed Crypto [Unavailable]"}
          link={"sajal353.github.io/asset-backed-crypto"}
          image="/project-images/asset-backed-crypto.png"
        >
          <p>
            <b>Tech Stack:</b> HTML5, Scss, JavaScript, Gsap, Vanta
          </p>
        </Project>
        <Project
          title={"Birdie Token Launchpad [Unavailable]"}
          link={"sajal353.github.io/birdie-token-launchpad"}
          image="/project-images/birdie-token.png"
          dim
        >
          <p>
            <b>Tech Stack:</b> HTML5, Scss, JavaScript, Vite
          </p>
        </Project>
        <Project
          title={"Cape Analytics [Unavailable]"}
          link={"sajal353.github.io/cape-analytics"}
          image="/project-images/cape-analytics.png"
        >
          <p>
            <b>Tech Stack:</b> HTML5, Scss, JavaScript, Gsap
          </p>
        </Project>
        <Project
          title={"Portfolio [Hobby]"}
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
