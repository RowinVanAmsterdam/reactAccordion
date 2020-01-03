import * as React from 'react';
import Icon from '../Shared/Icon';
import SingleCollapse from './SingleCollapse';

type props = {
    title: string;
    qAndA: {question: string, answer: string}[];
}

const CategoryCollapse = (FAQDetail: props) => {
    const [active, setActive] = React.useState('notActive');
    const [isTrue, setTrue] = React.useState(false);


    const toggleAccordion = () => {
        setActive(active === 'notActive' ? 'active' : 'notActive');
        setTrue(!isTrue)
    };

    return (
        <article className='faq__block' id='content-1'>
            <h3 onClick={toggleAccordion} aria-expanded={isTrue}>
                {FAQDetail.title}
                <Icon name='arrow-right-thick' className='icon__svg' />
            </h3>


            <ul className={active} id='questions-0' aria-expanded={isTrue}>
                {FAQDetail.qAndA.map((qAndADetail) => {
                    return <SingleCollapse question={qAndADetail.question} answer={qAndADetail.answer}/>
                })}
            </ul>
        </article>
    )
}

export default CategoryCollapse;