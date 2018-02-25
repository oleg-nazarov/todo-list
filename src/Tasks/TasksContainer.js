import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { taskToggleDone } from '../redux/actions/tasksActions'
import Tasks from './Tasks';

const mapStateToProps = state => ({
  list: state.tasks.list
});

const mapDispatchToProps = dispatch => bindActionCreators({
  taskToggleDone
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
