import React from 'react';
import PT from 'prop-types';
import classnames from 'classnames';

const Row = ({ children, className }) => (
    <div className={classnames('row', className)}>
        {children}
    </div>
);

Row.propTypes = {
    children: PT.node.isRequired,
    className: PT.string
};

export default Row;
