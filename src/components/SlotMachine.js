import React, { Component } from 'react'
import { shuffle, uniq } from 'lodash'

import Wheel from './Wheel/Wheel'
import Buttons from './Buttons/Buttons'

const DEFAULT_SET = ['strawberry', 'banana', 'orange', 'monkey']
const NON_CONSECUTIVE_SYMBOLS_MESSAGE = 'You won $10!'
const CONSECUTIVE_SYMBOLS_MESSAGE = 'You won $20!'
const ALL_EQUAL_MESSAGE = 'You won $100!'

class SlotMachine extends Component {
    state = {
        symbols: [DEFAULT_SET, DEFAULT_SET, DEFAULT_SET],
        intervalId: 0,
        isSpinning: false,
        result: ''
    }

    handleStartClick = () => {
        this.setState({ result: '' })
        this.setShuffleInterval()
    }

    handleStopClick = () => {
        this.setState({ isSpinning: false })
        this.setState({ intervalId: 0 })
        window.clearInterval(this.state.intervalId)
        this.checkResult()
    }

    setShuffleInterval = () => {
        const intervalId = window.setInterval(() => {
            const shuffledSymbols = this.state.symbols.map(set => shuffle(set))
            this.setState(() => ({ symbols: shuffledSymbols }))
        }, 300)

        this.setState({ isSpinning: true })
        this.setState({ intervalId })
    }

    checkResult = () => {
        const { symbols } = this.state
        const values = [symbols[0][2], symbols[1][2], symbols[2][2]]
        const uniqueValuesCount = uniq(values).length

        // check if we have at least two identical symbols
        if (uniqueValuesCount < values.length) {
            if (uniqueValuesCount === 1) {
                this.showResult(ALL_EQUAL_MESSAGE)
            } else {
                if (values[0] === values[1] || values[1] === values[2]) {
                    this.showResult(CONSECUTIVE_SYMBOLS_MESSAGE)
                } else {
                    this.showResult(NON_CONSECUTIVE_SYMBOLS_MESSAGE)
                }
            }
        }
    }

    showResult = message => {
        this.setState({ result: message })
    }

    componentDidMount() {
        this.setShuffleInterval()
        window.setTimeout(() => {
            this.setState({ isSpinning: false })
            window.clearInterval(this.state.intervalId)
            this.checkResult()
        }, 10000)
    }

    render() {
        const { symbols, isSpinning, result } = this.state

        return (
            <div className="slot-machine">
                <div className="wheels">
                    <Wheel symbols={symbols[0]} />
                    <Wheel symbols={symbols[1]} />
                    <Wheel symbols={symbols[2]} />
                </div>
                <Buttons
                    isDisabled={isSpinning ? true : false}
                    handleStartClick={this.handleStartClick}
                    handleStopClick={this.handleStopClick}
                />
                <div className="overlay" />
                <div className={`result ${!result ? 'hide' : ''}`}>{result}</div>
            </div>
        )
    }
}

export default SlotMachine
