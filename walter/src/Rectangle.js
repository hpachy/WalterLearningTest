import React from 'react'
import PropTypes from 'prop-types';

import './Rectangle.css'


const Rectangle = ({compter, currentTime, feedback}) => (
    <div className={`rectangle ${feedback}`}>
        <span className="compter">{('0' + compter).slice(-2)}</span>
    </div>
)

Rectangle.prototype = {
    card: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf([
        'visible',
        'justMatched',
        'justMismatched' 
    ]).isRequired, 
}

export default Rectangle