import React, { Component } from 'react';
import 'fullpage.js/vendors/scrolloverflow';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';

import Page1 from './categories/Page1';
import Page2 from './categories/Page2';
import Category1 from './categories/Category1/Category1';
import Page4 from './categories/Page4';

class App extends Component {
  componentDidMount() {
    new fullpage('#fullpage', {
      verticalCentered: false,
      scrollOverflow: false,
      scrollBar: false,
      navigation: true,
      navigationPosition: 'right',
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
        <Category1 />
        <Page4 />
      </div>
    );
  }
}

export default App;
