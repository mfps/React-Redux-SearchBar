import React, { Component } from 'react';

import ListItem from './listItem';

import { getData } from '../../services/apiServices';
import { getList } from '../../actions/listActionCreators';

class OffersList extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.offersList();
  }

  offersList() {
    const url = '../src/data/offers.json';
    getData(url).then(offers => {
      this.props.dispatch(getList(offers));
    });
  }

  render() {
    const offers = this.props.offers.filter;

    console.log(offers);

    return (
      <main>
        <ul className="offers">
          {offers.length > 0
            ? offers.map(city => {
                return <ListItem key={city.id} city={city} />;
              })
            : <li className="offers__item">
                <b>
                  Oops, we currently do not have any places that match your search.
                </b>s
              </li>}
        </ul>
      </main>
    );
  }
}

export default OffersList;
