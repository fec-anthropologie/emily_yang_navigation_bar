import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import SiteHeader from '../SiteHeader.js'
describe('Test case for testing SiteHeader component',() =>{
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