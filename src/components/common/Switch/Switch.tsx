import React from 'react';
import './Switch.scss';
interface SwitchProps {
    active: boolean;
    setActive: (active: boolean) => void;
}

const Switch = ({ active, setActive }: SwitchProps) => {
    return (
        <div className="toggle">
            <input
                className="toggle-state"
                type="checkbox"
                name="check"
                value="check"
                onClick={() => setActive(!active)}
            />
            <div className="indicator"></div>
        </div>
    );
};

export default Switch;
