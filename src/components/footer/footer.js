import React from 'react';

import Store from '../../store';
import { changeColor } from '../../actions/headerActionCreators';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  colorChange(e) {
    const headerState = e.target.value;
    this.props.dispatch(changeColor(headerState));
  }

  render() {
    return (
      <footer className="footer">
        <label>Header colour:</label>
        <input
          type="color"
          value={this.props.header.color}
          onChange={this.colorChange.bind(this)}
        />
      </footer>
    );
  }
}

export default Footer;
