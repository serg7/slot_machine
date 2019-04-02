import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Symbol extends Component {
    render() {
        return <div className={`symbol symbol--${this.props.type} `} />
    }
}

Symbol.propTypes = {
    type: PropTypes.string.isRequired
}

export default Symbol
