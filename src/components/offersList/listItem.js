import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    return (
      <li className="offers__item">
        <b>{this.props.city.title}</b>(<i>{this.props.city.city}</i>)
      </li>
    );
  }
}

export default ListItem;
