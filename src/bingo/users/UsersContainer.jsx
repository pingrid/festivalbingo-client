import { connect } from 'react-redux';
import Users from './Users';

const mapStateToProps = state => (
    {
        users: state.bingo.users
    }
);

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
