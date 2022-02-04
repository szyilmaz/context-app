import React, { Component } from 'react';
import LanguageProvider from './contexts/LanguageContext';
import ThemeProvider from './contexts/ThemeContext';
import Form from "./Form";
import Navbar from "./Navbar";
import PageContent from './PageContent';

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <LanguageProvider>
          <PageContent>
            <Navbar />
            <Form />
          </PageContent>
        </LanguageProvider>
      </ThemeProvider>
    );
  }
}

export default App;
