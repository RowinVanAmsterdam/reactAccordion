import * as React from 'react';
import Icon from '../Shared/Icon';
import '../../../assets/css/base/_grid.scss';
import '../../../assets/css/layout/_icons.scss';
import '../../../assets/css/components/_faq.scss';

const SingleCollapse = () => {

    const [active, setActive] = React.useState('notActive');
    const [isTrue, setTrue] = React.useState(false);


    const toggleAccordion = () => {
        setActive(active === 'notActive' ? 'active' : 'notActive');
        setTrue(!isTrue)
    };

    return (
        <li onClick={toggleAccordion} className='question' aria-expanded={isTrue}>
            <h4 onClick={toggleAccordion} aria-expanded={isTrue}>
                Ik heb geen bevestigingsscherm gezien en ik heb ook geen e-mail ontvangen. Is mijn reservering wel verwerkt?
                    <Icon name='arrow-right-thin' className='icon__svg' />
            </h4>
            <div className={`answer ${active}`}>
                <p className='answer__body'>Als je geen bevestigingsscherm met reserveringsnummer hebt gezien na het afronden van je reservering is er iets misgegaan in het reserveringsproces en krijg je ook geen bevestigingsmail. Stuur in dit geval een mail naar</p>
            </div>
        </li>
    );
};

export default SingleCollapse;