import React, { Component } from 'react';
import PromoHeader from './PromoHeader.js';
import SiteHeader from './SiteHeader.js';
import MainNavigation from './MainNavigation.js';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div id="body">
        <PromoHeader />
        <SiteHeader />
        <MainNavigation />
        
  </div>
    )
  }
}