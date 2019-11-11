import React from 'react'
import {shallow} from 'enzyme'
import App, {SYMBOLS} from './App'
import { expect } from 'chai'
import Rectangle from './Rectangle'
import sinon from 'sinon'
import changeShape from './changeShape'

Rectangle
describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('Rectangle'))
  })

  it('contain Rectangle is blue', () => {
    const wrapper = shallow(<Rectangle compter={40} feedback={changeShape(40)} />).getElement()

    expect(wrapper).to.matchSnapshot()
  })

  it('contain Rectangle is orange', () => {
    const wrapper = shallow(<Rectangle compter={20} feedback={changeShape(20)} />).getElement()

    expect(wrapper).to.matchSnapshot()
  })

  it('contain Rectangle is red', () => {
        const wrapper = shallow(<Rectangle compter={12} feedback={changeShape(12)} />).getElement()
        expect(wrapper).to.matchSnapshot()
  })

  it('under 10 we still have 2 numbers', () => {
    const wrapper = shallow(<Rectangle compter={8} feedback={changeShape(8)} />).getElement()
    expect(wrapper).to.matchSnapshot()
})
})
