import React from 'react'
import { shallow } from 'enzyme'
import { noop } from 'lodash'

import Buttons from './Buttons'

const defaultProps = {
    isDisabled: false,
    handleStartClick: noop,
    handleStopClick: noop
}

describe('<Buttons />', () => {
    test('should render component', () => {
        shallow(<Buttons {...defaultProps} />)
    })

    test('should disable start button if isDisabled is true', () => {
        const isDisabled = true
        const props = { ...defaultProps, isDisabled }

        const wrapper = shallow(<Buttons {...props} />)

        expect(wrapper.find('.btn-start').prop('disabled')).toEqual(true)
    })

    test('should disable start button if isDisabled is true', () => {
        const handleStartClickMock = jest.fn()
        const props = { ...defaultProps, handleStartClick: handleStartClickMock }

        const wrapper = shallow(<Buttons {...props} />)
        wrapper.find('.btn-start').simulate('click')

        expect(handleStartClickMock).toHaveBeenCalled()
        expect(handleStartClickMock).toHaveBeenCalledTimes(1)
    })

    test('should disable start button if isDisabled is true', () => {
        const handleStopClickMock = jest.fn()
        const props = { ...defaultProps, handleStopClick: handleStopClickMock }

        const wrapper = shallow(<Buttons {...props} />)
        wrapper.find('.btn-stop').simulate('click')

        expect(handleStopClickMock).toHaveBeenCalled()
        expect(handleStopClickMock).toHaveBeenCalledTimes(1)
    })
})
