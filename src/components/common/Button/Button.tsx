import React from 'react';
import './Button.scss';
type Props = {
    title: string;
    x?: number;
    y?: number;
    bg?: 'orange' | 'white';
};

const Button = ({ title, x = 30, y = 20, bg = 'orange' }: Props) => {
    const btnStyle = {
        padding: `${y}px ${x}px`,
        background:
            bg === 'orange' ? 'linear-gradient(90deg, rgb(255, 56, 52) 0%, rgb(255, 113, 51) 100%)' : '#fff',
        color: bg === 'orange' ? '#fff' : '#fc6f5e',
    };
    return (
        <div className="btn" style={btnStyle}>
            {title}
        </div>
    );
};

export default Button;
