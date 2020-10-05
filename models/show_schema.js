const mongoose = require('mongoose');

const showSchema = mongoose.Schema({
id: { type: Number, default: null },
featured: { type: Number, default: null },
title: { type: String, default: null },
poster: { type: String, default: null },
background: { type: String, default: null },
overview: { type: String, default: null },
year: { type: String, default: null },
genres: { type: Array, default: null },
imdbId: { type: String, default: null },
tmdbId: { type: String, default: null },
created: { type: Date, default: Date.now },
updated: { type: Date, default: Date.now }
})

showSchema.index({ id: 1 }, { unique: true });

module.exports = mongoose.model('shows', showSchema)