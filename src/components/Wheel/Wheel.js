import React, { Component } from 'react'
import FlipMove from 'react-flip-move'
import PropTypes from 'prop-types'

import Symbol from '../Symbol/Symbol'

class Wheel extends Component {
    render() {
        const { symbols } = this.props
        return (
            <FlipMove className="wheel">
                {symbols.map(type => (
                    <Symbol type={type} key={type} />
                ))}
            </FlipMove>
        )
    }
}

Wheel.propTypes = {
    symbols: PropTypes.array.isRequired
}

export default Wheel
