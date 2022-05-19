import React, { useEffect, useState } from 'react';
import './Progress.scss';
import { motion } from 'framer-motion';
interface ProgressProps {
    time: number;
}

const Progress = ({ time }: ProgressProps) => {
    const [progress, setProgress] = useState(0);
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev < time) return prev + 1;
                else {
                    clearInterval(timer);
                    return time;
                }
            });
        }, 10);
        return () => clearInterval(timer);
    }, [refresh]);
    return (
        <motion.div
            onViewportEnter={() => {
                setProgress(0);
                setRefresh(!refresh);
            }}
            className="progress"
        >
            <div className="progress__item">
                <div className="progress__item--name">
                    <p>Business Goal</p>
                    <p>{progress}%</p>
                </div>
                <div className="progress__item--bar">
                    <div className="progress__item--inner" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        </motion.div>
    );
};

export default Progress;
