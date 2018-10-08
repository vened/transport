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
import Category6 from './categories/Category6/Category6';
import Category7 from './categories/Category7/Category7';

class App extends Component {
  componentDidMount() {
    new fullpage('#fullpage', {
      verticalCentered: true,
      scrollOverflow: true,
      scrollBar: false,
      navigation: true,
      navigationPosition: 'right',
      anchors: [
        'Page1',
        'Page2',
        'Category1',
        'Category2',
        'Category3',
        'Category4',
        'Category5',
        'Category6',
        'Category7',
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
        <Category6 />
        <Category7 />
      </div>
    );
  }
}

export default App;
