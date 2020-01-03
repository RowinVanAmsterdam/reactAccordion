import * as React from 'react';
import { CategoryCollapse } from './CategoryCollapse';
import FAQData from '../../../static/FAQ-Data.json';

const Accordion = () => {

    return (
        <div className="container container--xtiny">
            {FAQData.map((FAQDetail, index) => {
                return <CategoryCollapse key={index} {...FAQDetail} />;
            })}
        </div>
    );
};

export default Accordion;