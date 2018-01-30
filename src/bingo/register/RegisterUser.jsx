import React from 'react';
import PT from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';

const RegisterUser = ({ history, handleSubmit, postNewUser }) => {
    const submitForm = (values) => {
        postNewUser('oya2018', values.name, values.email);
        history.push('/');
    };

    return (
        <form className="text-sunglow" onSubmit={handleSubmit(submitForm)}>
            <Link to="/"><i className="back-button material-icons">arrow_back</i></Link>
            <h1 className="center-text fancy-title mb-7">Register user</h1>
            <div className="mb-4">
                <label htmlFor="name" className="register-field-label mr-4">Name</label>
                <Field
                    name="name"
                    component="input"
                    type="text"
                    className="register-field"
                />
            </div>
            <div className="mb-7">
                <label htmlFor="email" className="register-field-label mr-4">Email</label>
                <Field
                    name="email"
                    component="input"
                    type="text"
                    className="register-field"
                />
            </div>
            <button type="submit" className="bingo-button">
                Register
            </button>

        </form>
    );
};

RegisterUser.propTypes = {
    history: PT.object.isRequired,
    handleSubmit: PT.func.isRequired,
    postNewUser: PT.func.isRequired
};

export default reduxForm({ form: 'registerUser' })(withRouter(RegisterUser));
