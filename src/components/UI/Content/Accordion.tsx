import * as React from 'react';
import Icon from '../Shared/Icon';
import SingleCollapse from './SingleCollapse';
import '../../../assets/css/base/_grid.scss';
import '../../../assets/css/layout/_icons.scss';
import '../../../assets/css/components/_faq.scss';

const Accordion = () => {

    const [active, setActive] = React.useState('notActive');
    const [isTrue, setTrue] = React.useState(false);


    const toggleAccordion = () => {
        setActive(active === 'notActive' ? 'active' : 'notActive');
        setTrue(!isTrue)
    };

    return (
        <div className='container container--xtiny'>
            <article className='faq__block' id='content-1'>
                <h3 onClick={toggleAccordion} aria-expanded={isTrue}>
                    Reserveringen
                    <Icon name='arrow-right-thick' className='icon__svg' />
                </h3>
                <ul className={active} id='questions-0' aria-expanded={isTrue}>
                    <SingleCollapse />
                    <li className='question'>FAQ2</li>
                    <li className='question'>FAQ3</li>
                </ul>
            </article>
        </div>
    );
};

export default Accordion;