import styled from "styled-components";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import { useEffect, useRef } from "react";
import WebGL from "../components/WebGL2";

const Home = () => {
  const homeRef = useRef(null);

  useEffect(() => {
    new WebGL({
      dom: homeRef.current,
    });
  }, []);

  return (
    <StyledHero
      key="home"
      ref={homeRef}
      animate={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
      initial={{ opacity: 0, scale: 1.2 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <Hero />
    </StyledHero>
  );
};

const StyledHero = styled(motion.div)`
  overflow: hidden;
  height: 100vh;
  width: 100%;
`;

export default Home;
