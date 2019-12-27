import * as React from 'react';
import Icon from '../Shared/Icon';
import '../../../assets/css/base/_grid.scss';
import '../../../assets/css/layout/_icons.scss';
import '../../../assets/css/components/_faq.scss';

const Accordion = () => {

    const [collapsed, setCollapse] = React.useState(true);

    const addClass = () => {
        setCollapse(false);
    };

    return (
        <div className='container container--xtiny'>
            <article className='faq__block' id='content-1' onClick={addClass}>
                <h3 className={collapsed ? 'true' : ''} data-toggle='collapse' data-target='#questions-0' aria-expanded='true'>
                    Reserveringen
                    <Icon name='arrow-right-thick' className='icon__svg'/>
                </h3>
                <ul>

                </ul>
            </article>
        </div>
    );
};

export default Accordion;