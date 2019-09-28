import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import App from '../App.js';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
  const wrapper = shallow(<App />);

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('components render on page', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'getResults');
    instance.handleChange();
    expect(instance.getResults).toHaveBeenCalled();
  });

});