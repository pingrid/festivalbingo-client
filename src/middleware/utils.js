import { schema } from 'normalizr';

const artistSchema = new schema.Entity('artists', {}, {
    idAttribute: artist => artist.name
});

const tilesSchema = new schema.Entity('tiles', {}, {
    idAttribute: tile => tile.tileId
});

const boardSchema = new schema.Entity('board', {
    tiles: [tilesSchema],
    artists: [artistSchema]
}, {
    idAttribute: board => board.id
});


export default {
    BOARD: boardSchema
};
