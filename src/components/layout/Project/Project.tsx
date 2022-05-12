import Button from 'components/common/Button/Button';
import { motion } from 'framer-motion';
import React from 'react';
import './Project.scss';

const Project = () => {
    const variants = {
        open: { opacity: 0, y: 100 },
        closed: { opacity: 1, y: 0 },
    };
    return (
        <div className="project">
            <div className="grid wide">
                <div className="project__wrap">
                    <div className="project__content">
                        <motion.h1
                            variants={variants}
                            initial="open"
                            whileInView="closed"
                            transition={{ duration: 0.8 }}
                        >
                            Have A Project In Mind? Let's Get To Work
                        </motion.h1>
                        <motion.p
                            variants={variants}
                            initial="open"
                            whileInView="closed"
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            Morbi nisl orci, pretium eu tellus sit amet, porta egestas dui. cursus ipsum,
                            magna lacinia sit amet
                        </motion.p>
                    </div>
                    <Button title="Start a Project" x={30} bg="white" />
                </div>
            </div>
        </div>
    );
};

export default Project;
