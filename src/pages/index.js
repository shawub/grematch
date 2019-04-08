import React from "react";
import { Provider } from "react-redux";
import Count from '../components/count';
import store from '../components/store';


const Root = () => (
  <Provider store={store}>
    <Count />
  </Provider>
);

export default () => Root();
