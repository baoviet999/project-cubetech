import React, { useEffect, useState } from 'react';
import { BsChevronUp } from 'react-icons/bs';
import './ScrollToTop.scss';
const ScrollToTop = () => {
    const [active, setActive] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) setActive(true);
            else setActive(false);
        });
    }, []);

    return (
        <div
            className={`scroll ${active ? 'active' : ''}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <BsChevronUp />
        </div>
    );
};

export default ScrollToTop;
