import React, { useState } from 'react';
import Icon from '../Shared/Icon';
import SingleCollapse from './SingleCollapse';

type CategoryCollapseProps = {
    title: string;
    qAndA: { question: string, answer: string }[];
};

export const CategoryCollapse = (faqDetail: CategoryCollapseProps) => {
    const [isActive, setActive] = useState(false);

    const toggleCollapse = () => {
        setActive(!isActive);
    };

    return (
        <article className="faq__block">
            <h3 onClick={toggleCollapse} aria-expanded={isActive}>
                {faqDetail.title}
                <Icon name="arrow-right-thick" className="icon__svg" />
            </h3>

            <ul className={isActive ? 'active' : 'not-active'} aria-expanded={isActive}>
                {faqDetail.qAndA.map((qAndADetail, index) => {
                    return (
                        <SingleCollapse
                            key={index}
                            question={qAndADetail.question}
                            answer={qAndADetail.answer}
                        />
                    );
                })}
            </ul>
        </article>
    );
};