import { string, func } from 'prop-types';
import {Blue, Default} from './kinds';

export const Button = ({kind, onClick, children}) => {
    let button = null;
    switch (kind) {
        case 'blue' :
            button = <Blue type="button" onClick={onClick}>{children}</Blue>;        
            break;
        default :
            button = <Default type="button" onClick={onClick}>{children}</Default>;
    }

    return button;
}

Button.propType = {
    kind: string.isRequired,
    onClick: func
}

