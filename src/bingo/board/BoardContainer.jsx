import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { getBoard } from '../../ducks';
import Board from './Board';


class BoardContainer extends Component {
    componentWillMount() {
        this.props.getBoard();
    }
    render() {
        const { name, board, tiles } = this.props;
        if (!board) {
            return <noscript />;
        }
        return (
            <Board
                name={name}
                board={board}
                tiles={tiles}
            />
        );
    }
}

BoardContainer.propTypes = {
    getBoard: PT.func.isRequired,
    name: PT.string.isRequired,
    board: PT.object,
    tiles: PT.arrayOf(PT.object)
};

const mapStateToProps = (state, ownProps) => {
    const name = ownProps.match && ownProps.match.params ? ownProps.match.params.userName : '';

    const boardId = 'oya2018';
    const { board, tiles } = state.entities;

    const currentBoard = board[boardId];
    const boardTiles = currentBoard && currentBoard.tiles ? currentBoard.tiles.map(id => tiles[id]) : [];

    return {
        name,
        boardId,
        board: currentBoard,
        tiles: boardTiles
    };
};

const mapDispatchToProps = {
    getBoard
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
