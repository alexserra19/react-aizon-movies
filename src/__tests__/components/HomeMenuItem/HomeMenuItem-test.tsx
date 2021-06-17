import React from 'react';
import { HomeMenuItem } from '../../../components/HomeMenuItem/HomeMenuItem';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

jest.useFakeTimers()

describe('HomeMenuItem', () => {

  const mockProps = {
    text: 'text',
    image: 'image',
    link: '/movies'
  }

  it('should match the snapshot', () => {
    const wrapper = render(
      <Router>
        <HomeMenuItem  {...mockProps} />
      </Router>
    );
    expect(wrapper).toMatchSnapshot();
  })

  it('should the HomeMenuItem with the correct title', () => {
    const wrapper = render(
      <Router>
        <HomeMenuItem  {...mockProps} />
      </Router>
    );

    expect(wrapper.getByText('text')).toBeInTheDocument();
  })
});
