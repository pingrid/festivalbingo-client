import { connect } from 'react-redux';
import { postNewUser } from './../../ducks';
import RegisterUser from './RegisterUser';


const mapDispatchToProps = {
    postNewUser
};

export default connect(null, mapDispatchToProps)(RegisterUser);
