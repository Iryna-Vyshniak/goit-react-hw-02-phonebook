//import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

export default class App extends Component {
  render() {
    return (
      <Layout>
        <>
          <div>App</div>
          <GlobalStyle />
        </>
      </Layout>
    );
  }
}
