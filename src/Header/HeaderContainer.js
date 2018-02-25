import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateList } from '../redux/actions/tasksActions'
import Header from './Header';

const mapStateToProps = state => ({
  list: state.tasks.list
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateList
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
