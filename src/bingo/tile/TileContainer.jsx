import { connect } from 'react-redux';
import Tile from './Tile';
import { openTileModal } from '../../ducks/bingo';

const mapStateToProps = (state, ownProps) => {
    const { tile } = ownProps;

    return {
        fields: tile.fields
    };
};

const mapDispatchToProps = {
    openTileModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Tile);
