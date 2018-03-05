import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TaskCreatingPanel from './TaskCreatingPanel';
import { addTask } from '../redux/actions/tasksActions'

const mapDispatchToProps = dispatch => bindActionCreators({
  addTask
}, dispatch);

export default connect(null, mapDispatchToProps)(TaskCreatingPanel);

