import { useEffect } from "react";
import gsap from "gsap";

const Curtain = () => {

    // const lerp = (start, end, time) => {
    //     return start * (1 - time) + end * time;
    //   }

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            gsap.to('.curtain', {height: e.clientY > window.innerHeight * 0.9 ? window.innerHeight + 64 : e.clientY , duration: 1});   
        })
    })

    return(
        <div className="curtain"></div>
    )
}

export default Curtain;