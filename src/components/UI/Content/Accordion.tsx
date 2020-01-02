import * as React from 'react';
import Icon from '../Shared/Icon';
import SingleCollapse from './SingleCollapse';
import FAQData from '../../../static/FAQ-Data.json';

const Accordion = () => {

    const [active, setActive] = React.useState('notActive');
    const [isTrue, setTrue] = React.useState(false);

    const toggleAccordion = () => {
        setActive(active === 'notActive' ? 'active' : 'notActive');
        setTrue(!isTrue)
    };

    return (
        <div className='container container--xtiny'>
            {FAQData.map((FAQDetail) => {
                return <article key={FAQDetail.title} className='faq__block' id='content-1'>
                <h3 onClick={toggleAccordion} aria-expanded={isTrue}>
                    {FAQDetail.title}
                    <Icon name='arrow-right-thick' className='icon__svg' />
                </h3>


                <ul className={active} id='questions-0' aria-expanded={isTrue}>
                    <SingleCollapse 
                    question='Ik heb geen bevestigingsscherm gezien en ik heb ook geen e-mail ontvangen. Is mijn reservering wel verwerkt?' 
                    answer='Als je geen bevestigingsscherm met reserveringsnummer hebt gezien na het afronden van je reservering is er iets misgegaan in het reserveringsproces en krijg je ook geen bevestigingsmail. Stuur in dit geval een mail naar'/>
                    <SingleCollapse question='question' answer='answer' />
                    <SingleCollapse question='question' answer='answer' />
                </ul>
            </article>

            })}
        </div>
        // <div className='container container--xtiny'>
        //     <article className='faq__block' id='content-1'>
        //         <h3 onClick={toggleAccordion} aria-expanded={isTrue}>
        //             Reserveringen
        //             <Icon name='arrow-right-thick' className='icon__svg' />
        //         </h3>
        //         <ul className={active} id='questions-0' aria-expanded={isTrue}>
        //             <SingleCollapse
        //                 question='Ik heb geen bevestigingsscherm gezien en ik heb ook geen e-mail ontvangen. Is mijn reservering wel verwerkt?'
        //                 answer='Als je geen bevestigingsscherm met reserveringsnummer hebt gezien na het afronden van je reservering is er iets misgegaan in het reserveringsproces en krijg je ook geen bevestigingsmail. Stuur in dit geval een mail naar'/>
        //             <SingleCollapse question='question' answer='answer' />
        //             <SingleCollapse question='question' answer='answer' />
        //         </ul>
        //     </article>
        // </div>

    );
};

export default Accordion;