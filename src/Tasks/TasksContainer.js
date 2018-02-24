import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Tasks from './Tasks';

const mapStateToProps = state => ({
  list: state.tasks.list
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
