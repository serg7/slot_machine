import React from 'react'
import { shallow } from 'enzyme'

import Wheel from './Wheel'
import Symbol from '../Symbol/Symbol'

describe('<Wheel />', () => {
    test('should render component with 4 Symbols', () => {
        const symbols = ['strawberry', 'banana', 'orange', 'monkey']
        const wrapper = shallow(<Wheel symbols={symbols} />)

        expect(wrapper.find('.wheel').length).toBe(1)
        expect(wrapper.find(Symbol).length).toBe(4)
    })
})
