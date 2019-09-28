import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import SearchResults from '../SearchResults'
describe('Test case for testing SearchResults component', () => {
  const wrapper = shallow(<SearchResults />);

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('able to get results', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'getResults');
    instance.handleChange();
    expect(instance.getResults).toHaveBeenCalled();
  });

  
  test('query change check', () => {
    wrapper.find('input[type="text"]').simulate('change', { target: { query: 'white' });
    expect(wrapper.state('query')).toEqual('white');
    expect(wrapper.state('results')).toBe(true);
  })
  
  test('click check', () => {
    wrapper.find('input[type="text"]').simulate('click');
    expect(wrapper.state('suggestionOptions')).toBe(true);
    expect(wrapper.state('searchClicked')).toBe(true);
    expect(wrapper.state('trending')).toBe(true);
  })
  test('there should be 2 results', () => {
    expect(wrapper.props('results').children).toHaveLength(3);
  });
})