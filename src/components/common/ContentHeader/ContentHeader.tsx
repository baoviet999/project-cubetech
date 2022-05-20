import React from 'react';
import './ContentHeader.scss';
import { motion } from 'framer-motion';
interface ContentHeaderProps {
    name: string;
    content: string;
    desc: string;
}
const ContentHeader = ({ name, content, desc }: ContentHeaderProps) => {
    const variants = {
        open: { opacity: 0, y: 100 },
        closed: { opacity: 1, y: 0 },
    };
    return (
        <motion.div
            variants={variants}
            initial="open"
            whileInView="closed"
            transition={{ duration: 0.8 }}
            className="content-header"
        >
            <h3>{name}</h3>
            <h1>{content}</h1>
            <p>{desc}</p>
        </motion.div>
    );
};

export default ContentHeader;
