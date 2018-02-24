import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './Header';

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(null, mapDispatchToProps)(Header);
