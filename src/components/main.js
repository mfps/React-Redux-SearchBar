import React, { Component } from 'react';

import Header from './header/header';
import OffersList from './offersList/offersList';
import Footer from './footer/footer';

class Main extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <section>
        <Header {...this.props} />
        <OffersList {...this.props} />
        <Footer {...this.props} />
      </section>
    );
  }
}

export default Main;
