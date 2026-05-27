import React from "react";
import { motion } from "framer-motion";

function PageMotion({ children }) {

    return (

        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}

            transition={{
                duration: 1.2
            }}

            whileInView={{
                y: [0, -5, 0]
            }}

            className="relative"

        >

            {children}

        </motion.div>
    );
}

export default PageMotion;