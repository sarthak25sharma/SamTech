import { motion } from "framer-motion";

const transition = (OgComponent) => {
    return () => (
        <>
            <OgComponent />
            <motion.div 
                className="blurry-in"
                initial={{ opacity: 1, filter: "blur(10px)" }}
                animate={{ opacity: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div 
                className="blurry-out"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 0, filter: "blur(0px)" }}
                exit={{ opacity: 1, filter: "blur(10px)" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    );
};

export default transition;
