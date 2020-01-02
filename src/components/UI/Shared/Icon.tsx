import * as React from 'react';
import IconSprite, { sprite } from './IconSprite';

export interface IconProps {
    name: keyof typeof sprite;
    className?: string;
}

const Icon: React.SFC<IconProps> = ({name, className}) => {
    let iconClass = `icon__svg icon__svg--${name} ${className ? className : ''}`;

    return (
        <IconSprite className={iconClass} name={name} />
    );
};

export default Icon;