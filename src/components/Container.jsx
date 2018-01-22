import React from 'react';
import PT from 'prop-types';
import classnames from 'classnames';

const Container = ({ children, className }) => (
    <div className={classnames('container', className)}>
        {children}
    </div>
);

Container.propTypes = {
    children: PT.node.isRequired,
    className: PT.string
};

export default Container;
