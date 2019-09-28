import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Login from '../Login.js'

describe('Test case for testing Login component', () => {
  test('query change check', () => {
    wrapper.find('input[type="text"]').simulate('change', { target: { query: 'white' });
    expect(wrapper.state('query')).toEqual('white');
    expect(wrapper.state('results')).toBe(true);
  })
  it("check moused state", () => {
    const wrapper = shallow(<Login />);
    // Testing Initial State
    expect(wrapper.state("XMoused")).toBe(false);
    wrapper.simulate("mouseleave");

    // Testing state after mouseleave
    expect(wrapper.state("XMoused")).toBe(false);

    // Testing state after mouseover
    wrapper.simulate("mouseover");
    expect(wrapper.state("XMoused")).toBe(true);
  });
});
