import React from 'react';

import Store from '../../store';
import SearchBar from './../searchBar/searchBar';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <header
        className="header"
        style={{ backgroundColor: this.props.header.color }}
      >
        <h1 className="header__title">search Bar</h1>
        <SearchBar {...this.props} />
      </header>
    );
  }
}

export default Header;
