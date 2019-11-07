import React from 'react'


import './Rectangle.css'


const Rectangle = ({compter, currentTime, feedback, onClick, index}) => (
    <div className={`rectangle ${feedback}`} onClick={() => onClick(index)} key={index}>
        <span className="compter">{compter}</span>
    </div>
)

// Rectangle.prototype = {
//     card: PropTypes.string.isRequired,
//     feedback: PropTypes.oneOf([
//         'visible',
//         'justMatched',
//         'justMismatched' 
//     ]).isRequired, 
//     onClick: PropTypes.func.isRequired,
//     index: PropTypes.number.isRequired
// }

export default Rectangle