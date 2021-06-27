import styled from "styled-components";

import Project from "../components/Project";

import projectImg1 from '../assets/projects/gridmatrix/hero.png';

import { useEffect } from "react";
import WebGL from '../components/WebGL';

const Projects = () => {
    useEffect(() => {
        new WebGL({
            dom: document.querySelector('.webgl')
        })
    }, []);
    return (
        <>
            <div className="webgl"></div>
            <StyledProjects>
                <h1>Projects</h1>
                <Project title={'GridMatrix'} image={projectImg1} />
                <Project title={'GridMatrix'} image={projectImg1} />
                <Project title={'GridMatrix'} image={projectImg1} />
                <Project title={'GridMatrix'} image={projectImg1} />
            </StyledProjects>
        </>
    )
};

const StyledProjects = styled.div`
    width: 100%;
    padding: 2rem;
    h1{
        text-align: center;
    }
`;

export default Projects;