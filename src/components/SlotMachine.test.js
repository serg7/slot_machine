import React from 'react'
import { shallow } from 'enzyme'

import SlotMachine from './SlotMachine'
import Buttons from './Buttons/Buttons'
import Wheel from './Wheel/Wheel'

describe('<SlotMachine />', () => {
    test('should render component with buttons and 3 Wheels', () => {
        const wrapper = shallow(<SlotMachine />)

        expect(wrapper.find(Buttons).length).toEqual(1)
        expect(wrapper.find(Wheel).length).toEqual(3)
    })

    test('should set isSpinning to true when click on start button', () => {
        const wrapper = shallow(<SlotMachine />)

        wrapper
            .find(Buttons)
            .dive()
            .find('.btn-start')
            .simulate('click')

        expect(wrapper.state('isSpinning')).toBe(true)
        expect(wrapper.state('intervalId')).toBeGreaterThan(0)
    })

    test('should set isSpinning to false when click on stop button', () => {
        const wrapper = shallow(<SlotMachine />)

        wrapper
            .find(Buttons)
            .dive()
            .find('.btn-stop')
            .simulate('click')

        expect(wrapper.state('isSpinning')).toBe(false)
        expect(wrapper.state('intervalId')).toBe(0)
    })

    test('should invoke setTimeout after mounting component', () => {
        jest.useFakeTimers()
        shallow(<SlotMachine />)

        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000)
    })

    test('should run setInterval with 300 inverval when click on start button', () => {
        jest.useFakeTimers()
        const wrapper = shallow(<SlotMachine />)

        wrapper
            .find(Buttons)
            .dive()
            .find('.btn-start')
            .simulate('click')

        expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 300)
    })
})
