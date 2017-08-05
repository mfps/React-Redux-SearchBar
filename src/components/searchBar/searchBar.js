import React from 'react';

import { filterList } from '../../actions/listActionCreators';
import { filterArray as filter } from '../../helper/helper';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  filterList(event) {
    let filteredList = this.props.offers.list;
    filteredList = filter(filteredList, event.target.value);
    this.props.dispatch(filterList(filteredList));
  }

  render() {
    return (
      <section>
        <input
          className="header__input"
          type="search"
          placeholder="Search"
          onChange={this.filterList.bind(this)}
        />
      </section>
    );
  }
}

export default SearchBar;
