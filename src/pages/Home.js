import styled from "styled-components";

const Home = () => {
    return (
        <Hero>
            <h1>FRONT-END</h1>
            <h1>WEB DEVELOPER</h1>
        </Hero>
    )
};

const Hero = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    h1{
        font-size: 6rem;
        line-height: 1;
        color: #f5f3f4;
    }
`;

export default Home;