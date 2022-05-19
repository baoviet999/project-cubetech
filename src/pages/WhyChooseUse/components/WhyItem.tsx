import React from 'react';

interface WhyItemProp {
    item: {
        img: string;
        name: string;
        desc: string;
        color: string;
        borderColor: string;
    };
    indx: number;
}

const WhyItem = ({ item: { name, img, desc, color, borderColor }, indx }: WhyItemProp) => {
    return (
        <div className="row" style={{ flexDirection: `${indx % 2 === 0 ? 'row' : 'row-reverse'}` }}>
            <div className="col l-6">
                <div className="why__left">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="col l-6">
                <div className="why__right">
                    <div className="why__right--card" style={{ borderLeft: `5px solid ${borderColor}` }}>
                        <div className="why__right--num">
                            <span style={{ background: color }}>{`0${indx + 1}`}</span>
                        </div>
                        <div className="why__right--content">
                            <h5>{name}</h5>
                            <p>{desc}</p>
                        </div>
                        <div className="why__right--line">
                            <div className="why__right--a"></div>
                            <div className="why__right--point"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyItem;
