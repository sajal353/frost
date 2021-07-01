import { motion } from "framer-motion";
import Contact from "../components/Contact";

const About = () => {
    return (
        <motion.div key="about" animate={{ opacity: 1, transition: { duration: 1 } }} initial={{ opacity: 0 }} exit={{ opacity: 0, transition: { duration: 1 } }}>
            <Contact />
        </motion.div>
    )
}

export default About;