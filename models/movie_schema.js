const mongoose = require('mongoose');

const moviesSchema = mongoose.Schema({
id: { type: Number, default: null },
vip: { type: Number, default: null },
featured: { type: Number, default: null },
title: { type: String, default: null },
poster: { type: String, default: null },
background: { type: String, default: null },
overview: { type: String, default: null },
year: { type: String, default: null },
trailer: { type: String, default: null },
release: { type: String, default: null },
genres: { type: Array, default: null },
imdbId: { type: String, default: null },
tmdbId: { type: String, default: null },
on_server: { type: Boolean, default: false }, 
server: { type: String, default: null },
drive: { type: String, default: null },
file: { type: String, default: null },
created: { type: Date, default: Date.now },
updated: { type: Date, default: Date.now }
})

moviesSchema.index({ id: 1 }, { unique: true });

module.exports = mongoose.model('movies', moviesSchema)