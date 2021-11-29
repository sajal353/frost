import styled from "styled-components";

const Project = ({ image, title, link, children, dim }) => {
  return (
    <StyledProject>
      <img src={image} alt={title} className="webgl-img" />
      <span style={{ backgroundColor: dim ? "#1b1b1b" : "transparent" }}>
        <h3>{title}</h3>

        <a href={`https://${link}`} target="_blank" rel="noreferrer">
          {link}
          <span></span>
        </a>

        <div>{children}</div>
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
    padding: 1rem;
    @media (max-width: 800px) {
      margin-top: 1rem;
      padding: 1rem 0;
      text-align: center;
      position: relative;
      transform: translate(0%, 0%);
      right: 0;
      opacity: 1;
    }
    @media (hover: none) {
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
    div {
      font-size: 0.8rem;
      margin-top: 1rem;
      pointer-events: none;
      max-width: 325px;
    }
    a {
      display: inline-block;
      line-height: 1;
      margin-top: 1rem;
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
