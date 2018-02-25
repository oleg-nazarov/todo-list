import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TaskCreatingPanel from './TaskCreatingPanel';
import { addTask } from '../redux/actions/tasksActions'

const mapStateToProps = state => ({
  list: state.tasks.list
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addTask
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreatingPanel);

