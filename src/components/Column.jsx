import React from 'react';
import PT from 'prop-types';
import classnames from 'classnames';

const Column = ({ children, xs, sm, md, lg, xlg, className }) => {
    const xsmallColSize = `col-${xs}`;
    const smallColSize = `col-sm-${sm}`;
    const mediumColSize = `col-md-${md}`;
    const largeColSize = `col-lg-${lg}`;
    const xlargeColSize = `col-xl-${xlg}`;

    return (
        <div
            className={
                classnames(
                    xsmallColSize,
                    smallColSize,
                    mediumColSize,
                    largeColSize,
                    xlargeColSize,
                    className
                )}
        >
            {children}
        </div>
    );
};

Column.propTypes = {
    children: PT.node.isRequired,
    xs: PT.oneOfType([PT.string, PT.number]).isRequired,
    sm: PT.oneOfType([PT.string, PT.number]),
    md: PT.oneOfType([PT.string, PT.number]).isRequired,
    lg: PT.oneOfType([PT.string, PT.number]),
    xlg: PT.oneOfType([PT.string, PT.number]),
    className: PT.string
};

export default Column;
