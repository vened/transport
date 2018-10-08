import React, { Component } from 'react';
import 'fullpage.js/vendors/scrolloverflow';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';
import 'antd/dist/antd.css';

import Page1 from './categories/Page1/Page1';
import Page2 from './categories/Page2/Page2';
import Category1 from './categories/Category1/Category1';
import Category2 from './categories/Category2/Category2';
import Category3 from './categories/Category3/Category3';
import Category4 from './categories/Category4/Category4';
import Category5 from './categories/Category5/Category5';

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
        'Page5',
        'Category4',
        'Category5',
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
        <Category2 />
        <Category3 />
        <Category4 />
        <Category5 />
      </div>
    );
  }
}

export default App;
