import 'react-native'
import renderer from 'react-test-renderer'
import React from 'react'
import Icon from '@components/Icon'
jest.mock('react-native-svg', () => 'Icon')

describe('Shared component: <Icon />', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <Icon />
    ).toJSON()
    expect(component).toMatchSnapshot()
  })
})
