import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import './Analyst.scss';

const Analyst = () => {
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        const counts = document.querySelectorAll('.count');
        let interval = 0;
        counts.forEach((count) => {
            console.log(count);
            let startValue = 0;
            let endValue = parseInt(count.getAttribute('data-set') || '');
            let couter = setInterval(() => {
                startValue += 1;
                count.textContent = Math.ceil(startValue).toString();
                if (startValue === endValue) clearInterval(couter);
            }, 0.1);
        });
    }, [refresh]);

    return (
        <motion.div onViewportEnter={() => setRefresh(!refresh)} className="analyst">
            <div className="grid wide">
                <div className="row">
                    <div className="col l-3 m-3 c-12">
                        <div className="analyst__item">
                            <h1 className="count" data-set="390">
                                2,531
                            </h1>
                            <h4>Project Finished</h4>
                        </div>
                    </div>
                    <div className="col l-3 m-3 c-12">
                        <div className="analyst__item">
                            <h1 className="count" data-set="280">
                                280
                            </h1>
                            <h4>Happy Clients</h4>
                        </div>
                    </div>
                    <div className="col l-3 m-3 c-12">
                        <div className="analyst__item">
                            <h1 className="count" data-set="213">
                                15 +
                            </h1>
                            <h4>Years Experience</h4>
                        </div>
                    </div>
                    <div className="col l-3 m-3 c-12">
                        <div className="analyst__item">
                            <h1 className="count" data-set="358">
                                3,587
                            </h1>
                            <h4>Recognition</h4>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Analyst;
