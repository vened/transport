import React, { Component } from 'react';
import 'fullpage.js/vendors/scrolloverflow';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';

import Page1 from './categories/Page1';
import Page2 from './categories/Page2';
import Page3 from './categories/Page3';
import Page4 from './categories/Page4';

class App extends Component {
  componentDidMount() {
    new fullpage('#fullpage', {
      verticalCentered: false,
      scrollOverflow: true,
      scrollBar: false,
      paddingTop: '1em',
      paddingBottom: '1em',
      anchors: [
        'Page1',
        'Page2',
        'Page3',
        'Page4',
      ],
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    });

    /* eslint-disable */
    fullpage_api.setAllowScrolling(true);
  }

  render() {
    return (
      <div className="App" id="fullpage">
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
      </div>
    );
  }
}

export default App;
