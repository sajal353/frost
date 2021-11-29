import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/icons/favicon-64.png";

const Nav = () => {
  return (
    <StyledNav
      animate={{ opacity: 1, transition: { duration: 2 } }}
      initial={{ opacity: 0 }}
    >
      <span>
        <Link to="/">
          <img src={logo} alt="Frost" />
        </Link>
        <LogoText to="/">
          Sajal Biswas<span></span>
        </LogoText>
      </span>
      <span>
        <StyledLink to="/projects">
          Projects<span></span>
        </StyledLink>
        <StyledLink to="/contact">
          Contact<span></span>
        </StyledLink>
        <a
          className="link"
          href="https://drive.google.com/file/d/1jJ1QSKZbGLT5yEZVKC1y1OY4nJ5PhXuz/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Resume<span></span>
        </a>
      </span>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  z-index: 10;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  img {
    width: 2rem;
    height: 2rem;
    transition: 0.3s ease;
    &:hover {
      transform: scale(1.2);
    }
  }
  p {
    display: inline-block;
  }
  .link {
    display: inline-block;
    text-decoration: none;
    margin-left: 2rem;
    position: relative;
    overflow: hidden;
    span {
      position: absolute;
      bottom: 0;
      left: -100%;
      width: 100%;
      height: 1px;
      background: #e4e4e4;
      transition: 0.3s ease;
    }
    &:hover {
      span {
        left: 0;
      }
    }
  }
`;

const LogoText = styled(Link)`
  margin-left: 1rem;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    display: none !important;
  }
  span {
    position: absolute;
    bottom: 0;
    left: -100%;
    width: 100%;
    height: 1px;
    background: #e4e4e4;
    transition: 0.3s ease;
  }
  &:hover {
    span {
      left: 0;
    }
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  margin-left: 2rem;
  position: relative;
  overflow: hidden;
  span {
    position: absolute;
    bottom: 0;
    left: -100%;
    width: 100%;
    height: 1px;
    background: #e4e4e4;
    transition: 0.3s ease;
  }
  &:hover {
    span {
      left: 0;
    }
  }
`;

export default Nav;
