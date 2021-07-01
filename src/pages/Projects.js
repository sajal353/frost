import styled from "styled-components";
import { motion } from "framer-motion";
import Project from "../components/Project";

import projectImg1 from '../assets/projects/gridmatrix/hero.png';
import projectImg2 from '../assets/projects/whitegloveclub/hero.png';
import projectImg3 from '../assets/projects/showroom/hero.png';
import projectImg4 from '../assets/projects/liquidklear/hero.png';

import { useEffect } from "react";
import WebGL from '../components/WebGL';
import Contact from "../components/Contact";

const Projects = () => {

    useEffect(() => {
        new WebGL({
            dom: document.querySelector('.webgl'),
        })
    });

    return (
        <motion.div key="projects" animate={{ opacity: 1, transition: { duration: 1 } }} initial={{ opacity: 0 }} exit={{ opacity: 0, transition: { duration: 1 } }}>
            <div className="webgl"></div>
            <StyledProjects>
                <h1>Projects</h1>
                <Project title={'GridMatrix'} link={'www.gridmatrix.com'} image={projectImg1} />
                <Project title={'White Glove Club'} link={'www.whitegloveclubcr.com'} image={projectImg2} />
                <Project title={'3D Showroom'} shortDescription={'On going...'} image={projectImg3} />
                <Project title={'LiquidKlear'} shortDescription={'On going...'} image={projectImg4} />
            </StyledProjects>
            <Contact />
        </motion.div>
    )
};

const StyledProjects = styled.div`
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    h1{
        text-align: center;
    }
`;

export default Projects;