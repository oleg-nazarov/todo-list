import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Tasks from './Tasks';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
