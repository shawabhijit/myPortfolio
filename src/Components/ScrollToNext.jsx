import { motion } from "framer-motion";

import { ChevronDown } from "lucide-react";

const ScrollSection = () => {

    return (
        <>
            <section
                className="h-screen flex flex-col items-center justify-center ml-[-60px] relative"
            >
                <motion.button
                    className="flex flex-col items-center cursor-pointer"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" , delay:2 }}
                >
                    <ChevronDown className="w-8 h-8 mb-[-17px] text-gray-500" />
                    <ChevronDown className="w-8 h-8 mb-[-17px] text-gray-500" />
                    <ChevronDown className="w-8 h-8 mb-2 text-gray-500" />
                    
                </motion.button>
            </section>
        </>
    );
};

export default ScrollSection;
