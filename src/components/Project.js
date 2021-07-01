import styled from "styled-components";

const Project = (props) => {
  return (
    <StyledProject>
      <img src={props.image} alt={props.title} className="webgl-img" />
      <span>
        <h3>{props.title}</h3>

        <a href={`https://${props.link}`} target="_blank" rel="noreferrer">
          {props.link}
          <span></span>
        </a>

        <p>{props.shortDescription}</p>
      </span>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  margin-top: 2rem;
  width: 80%;
  display: flex;
  justify-content: center;
  position: relative;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
  @media (hover: none) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 600px) {
        width: 100%;
  }
  img {
    width: 80%;
    @media (max-width: 600px) {
        width: 100%;
    }
  }
  span {
    opacity: 0;
    position: absolute;
    z-index: 10;
    right: 2rem;
    top: 50%;
    transform: translate(0%, -50%);
    transition: opacity 0.7s ease;
    @media (max-width: 800px) {
      margin-top: 1rem;
      text-align: center;
      position: relative;
      transform: translate(0%, 0%);
      right: 0;
      opacity: 1;

    }
    @media (hover: none){
      margin-top: 1rem;
      text-align: center;
      position: relative;
      transform: translate(0%, 0%);
      right: 0;
      opacity: 1;
    }
    h3 {
      font-size: 2rem;
      line-height: 1;
      @media (max-width: 1000px) {
        font-size: 1.5rem;
      }
      @media (max-width: 500px) {
        font-size: 1.2rem;
      }
    }
    p {
      font-size: 0.8rem;
      margin-top: 0.5rem;
      line-height: 1;
      pointer-events: none;
    }
    a {
      line-height: 1;
      margin-top: 0.5rem;
      text-decoration: none;
      font-size: 0.8rem;
      border-bottom: 1px solid rgba(228, 228, 228, 0);
      transition: all 0.3s ease;
      &:hover {
        border-bottom: 1px solid rgba(228, 228, 228, 1);
      }
    }
  }
  &:hover {
    span {
      opacity: 1;
    }
  }
`;

export default Project;
