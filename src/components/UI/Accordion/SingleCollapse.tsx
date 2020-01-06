import React, { useState } from 'react';
import Icon from '../Shared/Icon';

type SingleCollapseProps = {
    question: string;
    answer: string;
};

const SingleCollapse = ({ question, answer }: SingleCollapseProps) => {

    const [isActive, setActive] = useState(false);

    const toggleCollapse = () => {
        setActive(!isActive);
    };

    return (
        <li onClick={toggleCollapse} className="question" aria-expanded={isActive}>
            <h4 >
                {question}
                <Icon name="arrow-right-thin" className="icon__svg" />
            </h4>
            <div className={`answer ${isActive ? 'active' : 'not-active'}`}>
                <p className="answer__body" dangerouslySetInnerHTML={{ __html: answer }} />
            </div>
        </li>
    );
};

export default SingleCollapse;