import { connect } from 'react-redux';
import { closeTileModal, openTileModal } from '../../ducks/bingo';
import Board from './Board';


const mapStateToProps = state => (
    {
        tileModalId: state.bingo.tileModalId,
        modalTile: state.bingo.tile
    }
);

const mapDispatchToProps = {
    openTileModal,
    closeTileModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
