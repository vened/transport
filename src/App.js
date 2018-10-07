import React, { Component } from 'react';
import 'fullpage.js/vendors/scrolloverflow';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';

import Page1 from './categories/Page1';

import './css/white.css';
import './css/main.css';

class App extends Component {
  componentDidMount() {
    new fullpage('#fullpage', {
      verticalCentered: true,
      scrollOverflow: true,
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    });

    /* eslint-disable */
    fullpage_api.setAllowScrolling(true);
  }

  render() {
    return (
      <div className="App" id="fullpage">
        <Page1 />
        <div className="section" id="section1">
          <div className="intro">white.css
            <h1>Section 2</h1>
          </div>
        </div>
        <div className="section" id="section2">
          <div className="intro">
            <h1>Section 3</h1>
            <p>Scroll down to see auto-height sections</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
