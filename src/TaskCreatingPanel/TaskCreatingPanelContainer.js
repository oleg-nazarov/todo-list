import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TaskCreatingPanel from './TaskCreatingPanel';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreatingPanel);

