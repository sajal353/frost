import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from '../assets/icons/favicon-64.png';

const Nav = () => {
    return (
        <StyledNav>
            <span>
                <img src={logo} alt="Frost" />
                <LogoText to="/">Sajal Biswas<span></span></LogoText>
            </span>
            <span>
                <StyledLink>Projects<span></span></StyledLink>
                <StyledLink>About<span></span></StyledLink>
            </span>
        </StyledNav>
    )
};

const StyledNav = styled.nav`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    span{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    img{
        width: 2rem;
        height: 2rem;
        transition: 0.3s ease;
        &:hover{
            transform: scale(1.2);
        }
    }
    p{
        display: inline-block;
    }
`;

const LogoText = styled(Link)`
    margin-left: 1rem;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    span{
        position: absolute;
        bottom: 0;
        left: -100%;
        width: 100%;
        height: 1px;
        background: #f5f3f4;
        transition: 0.3s ease;
    }
    &:hover{
        span{
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
    span{
        position: absolute;
        bottom: 0;
        left: -100%;
        width: 100%;
        height: 1px;
        background: #f5f3f4;
        transition: 0.3s ease;
    }
    &:hover{
        span{
            left: 0;
        }
    }
`;

export default Nav;