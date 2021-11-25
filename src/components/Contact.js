import styled from "styled-components";
import upwork from "../assets/brands/upwork.svg";
import linkedin from "../assets/brands/linkedin.png";

const Contact = () => {
  return (
    <StyledContact>
      <h1>Let's Create Something New!</h1>
      <div>
        <a
          href="https://www.upwork.com/freelancers/~01a8fb8e43e60c2d3f"
          target="_blank"
          rel="noreferrer"
        >
          <img src={upwork} alt="Upwork" />
        </a>
        <a
          href="https://www.linkedin.com/in/sajalbiswas/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>
      </div>
      <a href="mailto:sajalbiswas353@gmail.com">
        sajalbiswas353@gmail.com<span></span>
      </a>
    </StyledContact>
  );
};

const StyledContact = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  h1 {
    font-size: 4rem;
    text-align: center;
    @media (max-width: 768px){
      font-size: 2rem;
    }
  }
  div {
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    display: inline-block;
    width: 100px;
  }
  a {
    margin: 0 1rem;
    display: inline-block;
    text-decoration: none;
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

export default Contact;
