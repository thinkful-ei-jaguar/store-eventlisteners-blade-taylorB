import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

describe('Accordion component', () => {


  it('renders without crashing', () => {

    const div = document.createElement('div');
    ReactDOM.render(<Accordion section={sections} />, div);
    ReactDOM.unmountComponentAtNode(div);

  });

  it('Renders an empty li when sections is not supplied', () => {
    const wrapper = shallow(<Accordion section={[]} />)
    expect(toJson(wrapper)).toMatchSnapshot()

  })

  it('Component renders no sections as active by default', () => {
    const wrapper = shallow(<Accordion section={sections} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  } )

  it('The component opens a clicked section', () => {
    const wrapper = shallow(<Accordion section={sections} />)
    wrapper.find('button').at(2).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  } )

  it('The component only opens the last section when multiple sections have been clicked', () => {
    const wrapper = shallow(<Accordion section={sections} />)
    wrapper.find('button').at(1).simulate('click')
    wrapper.find('button').at(2).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  } )
})