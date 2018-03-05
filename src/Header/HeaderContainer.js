import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteDoneTasks } from '../redux/actions/tasksActions'
import Header from './Header';

const mapStateToProps = state => ({
  list: state.tasks.list
});

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteDoneTasks
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
