import * as React from 'react';
import { CategoryCollapse } from './CategoryCollapse';
import FAQData from '../../../static/FAQ-Data.json';

type AccordionProps = {
    openFirstCategory: boolean;
};

const Accordion = ({openFirstCategory}: AccordionProps) => {

    return (
        <div className="container container--xtiny">
            {FAQData.map((faqDetail, index) => {
                let shouldOpenFirstCategory = false; 

                if (openFirstCategory && index === 0) {
                    shouldOpenFirstCategory = true; 
                }
                
                return <CategoryCollapse key={index} {...faqDetail}  shouldOpenFirstCategory={shouldOpenFirstCategory} />;
            })}
        </div>
    );

};

export default Accordion;