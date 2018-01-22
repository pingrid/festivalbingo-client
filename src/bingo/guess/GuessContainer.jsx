import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';


class GuessContainer extends Component {
    componentWillMount() {}
    render() {
        const { } = this.props;
        return (
            <div className="GuessContainer">

            </div>
        );
    }
}

GuessContainer.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GuessContainer);
