import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Landing from '../Landing';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from '../../reducers';

const DashBoard = () => <h1>DashBoard</h1>;
const SurveyNew = () => <h1>SurveyNew</h1>;
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

it('shows a Landing Page', () => {
  expect(wrapper.find(Landing).length).toEqual(1);
});
