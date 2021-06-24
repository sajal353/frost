import styled from "styled-components";

const Nav = () => {
    return (
        <StyledNav>
            <p>Sajal Biswas</p>
        </StyledNav>
    )
};

const StyledNav = styled.nav`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    padding: 2rem;
`;

export default Nav;