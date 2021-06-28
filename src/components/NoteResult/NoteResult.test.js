import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NoteResult from './NoteResult';

describe(`NoteResult component`, () => {
  it('renders the complete form', () => {
    const wrapper = shallow(<NoteResult />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NoteResult />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})