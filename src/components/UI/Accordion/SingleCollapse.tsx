import * as React from 'react';
import Icon from '../Shared/Icon';

type props = {
    question: string;
    answer: string;
}

const SingleCollapse = ({question, answer}: props) => {


    const [active, setActive] = React.useState('notActive');
    const [isTrue, setTrue] = React.useState(false);


    const toggleAccordion = () => {
        setActive(active === 'notActive' ? 'active' : 'notActive');
        setTrue(!isTrue)
    };

    return (
        <li onClick={toggleAccordion} className='question' aria-expanded={isTrue}>
            <h4 onClick={toggleAccordion} aria-expanded={isTrue}>
                {question}
                <Icon name="arrow-right-thin" className='icon__svg' />
            </h4>
            <div className={`answer ${active}`}>
                <p className='answer__body' dangerouslySetInnerHTML={{__html: answer}}/>
            </div>
        </li>
    );
};

export default SingleCollapse;