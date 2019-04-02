import React from 'react'
import PropTypes from 'prop-types'

const Buttons = ({ isDisabled, handleStartClick, handleStopClick }) => {
    return (
        <div className="buttons">
            <button className="btn-start" onClick={() => handleStartClick()} disabled={isDisabled}>
                Start
            </button>
            <button className="btn-stop" onClick={() => handleStopClick()}>
                Stop
            </button>
        </div>
    )
}

Buttons.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    handleStartClick: PropTypes.func.isRequired,
    handleStopClick: PropTypes.func.isRequired
}

export default Buttons
