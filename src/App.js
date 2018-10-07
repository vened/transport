import React, { Component } from 'react';
import {
  ScrollToTopOnMount,
  SectionsContainer,
  Section,
  Header,
  Footer,
} from 'react-fullpage';
import './App.css';

class App extends Component {
  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
      scrollBar:            false,
      navigation:           false,
      verticalAlign:        false,
      arrowNavigation:      true
    };

    return (
        <div>
          <SectionsContainer className="container" {...options}>
            <Section color="#69D2E7">Page 1</Section>
            <Section color="#A7DBD8">Page 2</Section>
            <Section color="#E0E4CC">Page 3</Section>
          </SectionsContainer>
        </div>
    );
  }
}

export default App;
