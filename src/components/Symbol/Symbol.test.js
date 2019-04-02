import React from 'react'
import { shallow } from 'enzyme'

import Symbol from './Symbol'

describe('<Symbol />', () => {
    test('should render component', () => {
        const wrapper = shallow(<Symbol type="banana" />)

        expect(wrapper.find('.symbol--banana').length).toBe(1)
    })
})
