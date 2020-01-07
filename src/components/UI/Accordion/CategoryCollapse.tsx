import React, { useState } from 'react';
import Icon from '../Shared/Icon';
import { SingleCollapse } from './SingleCollapse';
import AnimateHeight from 'react-animate-height';

type CategoryCollapseProps = {
    title: string;
    qAndA: { question: string, answer: string }[];
    shouldOpenFirstCategory: boolean;
};

export const CategoryCollapse = (props: CategoryCollapseProps) => {
    const [isActive, setActive] = useState(props.shouldOpenFirstCategory);

    const toggleCollapse = () => {
        setActive(!isActive);
    };

    return (
        <article className="faq__block">
            <h3 onClick={toggleCollapse} aria-expanded={isActive}>
                {props.title}
                <Icon name="arrow-right-thick" className="icon__svg" />
            </h3>
            <AnimateHeight
                duration={500}
                height={isActive ? 'auto' : 0}
            >
                <ul aria-expanded={isActive}>
                    {props.qAndA.map((qAndADetail, index) => {
                        return (
                            <SingleCollapse
                                key={index}
                                question={qAndADetail.question}
                                answer={qAndADetail.answer}
                            />
                        );
                    })}
                </ul>
            </AnimateHeight>
        </article>
    );
};