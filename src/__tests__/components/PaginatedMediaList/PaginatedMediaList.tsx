import React from 'react';
import { PaginatedMediaList } from '../../../components/PaginatedMediaList/PaginatedMediaList';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

jest.useFakeTimers()

describe('PaginatedMediaList', () => {

  const mockProps = {
    title: 'title',
    mediaList: [],
    isLoading: true
  }

  it('should match the snapshot', () => {
    const wrapper = render(
      <Router>
        <PaginatedMediaList  {...mockProps} />
      </Router>
    );
    expect(wrapper).toMatchSnapshot();
  })

  it('should render without the loading wheel', () => {

    const props = {
      ...mockProps,
      isLoading: false
    }
    const wrapper = render(
      <Router>
        <PaginatedMediaList  {...props} />
      </Router>
    );

    expect(wrapper.queryByText('Active loading indicator')).toBeNull();
  })
});
