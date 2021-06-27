import styled from "styled-components";

const Project = (props) => {
    return (
        <StyledProject>
            <div>
                <img src={props.image} alt={props.title} className="webgl-img" />
            </div>
            <span>
                <h3>{props.title}</h3>
            </span>
        </StyledProject>
    )
}

const StyledProject = styled.div`
    margin-top: 2rem;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    div{
        flex: 2;
        img{
            width: 100%;
        }
    }
    span{
        margin-left: 2rem;
        flex: 1;
    }
`;

export default Project;