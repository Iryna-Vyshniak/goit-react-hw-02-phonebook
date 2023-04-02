//import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Section title="Phonebook">
          <div>App</div>
          <GlobalStyle />
        </Section>
      </Layout>
    );
  }
}
