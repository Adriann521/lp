const mongoose = require('mongoose');

const favoriteSchema = mongoose.Schema({
    id: { type: String, default: null },
    title: { type: String, default: null },
    trailer: { type: String, default: null },
    poster: { type: String, default: null },
    tmdbId: { type: String, default: null },
    imdbId: { type: String, default: null },
    last_watched: {type: Date, default: null},
    on_server: { type: Boolean, default: false }, 
    user: { type: String, default: null },
    created: { type: Date, default: Date.now },
})

favoriteSchema.index({ user: 1, id: 1 }, { unique: true });

module.exports = mongoose.model('favorites', favoriteSchema)