import * as React from 'react';
import { CategoryCollapse } from './CategoryCollapse';
import FAQData from '../../../static/FAQ-Data.json';
// import FAQDataTsx from '../../../static/FAQ-Data-TSX';

const Accordion = () => {
    // const dataFile = FAQDataTsx();

    return (
        <div className="container container--xtiny">
            {FAQData.map((FAQDetail, index) => {
                return <CategoryCollapse key={index} {...FAQDetail} />;
            })}
        </div>
    );
};

export default Accordion;