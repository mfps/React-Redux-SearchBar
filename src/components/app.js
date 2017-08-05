import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Main from './main';

function mapStateToProps(state) {
  return {
    header: state.header,
    offers: state.offers
  };
}

const App = connect(mapStateToProps)(Main);

export default App;
