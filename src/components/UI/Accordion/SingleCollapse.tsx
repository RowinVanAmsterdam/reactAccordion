import React, { useState } from 'react';
import Icon from '../Shared/Icon';
import AnimateHeight from 'react-animate-height';

type SingleCollapseProps = {
    question: string;
    answer: string;
};

export const SingleCollapse = ({ question, answer }: SingleCollapseProps) => {
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
            <AnimateHeight
                duration={500}
                height={isActive ? 'auto' : 0}
            >
                <div className="answer">
                    <p className="answer__body" dangerouslySetInnerHTML={{ __html: answer }} />
                </div>
            </AnimateHeight>
        </li>
    );
};