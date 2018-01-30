import React from 'react';
import PT from 'prop-types';

const InputField = ({ input, type, placeholder = '', meta: { touched, error } }) => (
    <div>
        <input {...input} placeholder={placeholder} type={type} className="guess-field" />
        { touched && error && (
            <div className="input-field-error">
                {error}
            </div>
        )}
    </div>
);


InputField.propTypes = {
    input: PT.object,
    type: PT.string,
    placeholder: PT.string,
    meta: PT.shape({
        touched: PT.bool,
        error: PT.oneOfType([PT.string, PT.object])
    })
};

export default InputField;
