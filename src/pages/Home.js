import styled from "styled-components";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import { useEffect } from "react";
import WebGL from '../components/WebGL2';

const Home = () => {

    useEffect(() => {
        new WebGL({
            dom: document.querySelector('.webgl'),
        });
    }, []);

    return (
        <StyledHero key="home" animate={{ opacity: 1, scale: 1, transition: { duration: 2 } }} initial={{ opacity: 0, scale: 1.2 }} exit={{ opacity: 0, transition: { duration: 1 } }}>
            <div className="webgl"></div>
            <Hero />
        </StyledHero>
    )
};

const StyledHero = styled(motion.div)`
    overflow: hidden;
    height: 100vh;
    width: 100%;
`;


export default Home;