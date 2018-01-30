import { connect } from 'react-redux';
import GuessModal from './GuessModal';
import { postArtist, closeTileModal, openTileModal } from '../../../ducks';

const mapStateToProps = (state, ownProps) => (
    {
        name: ownProps.match && ownProps.match.params ? ownProps.match.params.userName : '',
        tileModalId: state.bingo.tileModalId,
        artists: state.entities.artists
    }
);

const mapDispatchToProps = {
    postArtist,
    openTileModal,
    closeTileModal
};

export default connect(mapStateToProps, mapDispatchToProps)(GuessModal);
