// import styled from "styled-components";
import Hero from "../components/Hero";
import { useEffect } from "react";
import WebGL from '../components/WebGL2';

const Home = () => {
    useEffect(() => {
        new WebGL({
            dom: document.querySelector('.webgl')
        })
    }, []);

    return (
        <>
            <div className="webgl"></div>
            <Hero />
        </>
    )
};

export default Home;