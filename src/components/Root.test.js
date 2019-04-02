import React from 'react'
import { shallow } from 'enzyme'

import Root from './Root'
import SlotMachine from './SlotMachine'

describe('<Root />', () => {
    test('should render component SlotMachine', () => {
        const wrapper = shallow(<Root />)

        expect(wrapper.find(SlotMachine).length).toBe(1)
    })
})
