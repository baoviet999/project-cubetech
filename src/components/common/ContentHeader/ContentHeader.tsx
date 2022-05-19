import React from 'react';
import './ContentHeader.scss';

interface ContentHeaderProps {
    name: string;
    content: string;
    desc: string;
}
const ContentHeader = ({ name, content, desc }: ContentHeaderProps) => {
    return (
        <div className="content-header">
            <h3>{name}</h3>
            <h1>{content}</h1>
            <p>{desc}</p>
        </div>
    );
};

export default ContentHeader;
