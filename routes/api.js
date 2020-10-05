const express = require('express')
const apiRoute = express.Router()
const Movie = require('../models/movie_schema')
const Show = require('../models/show_schema')
const WatchLater = require('../models/watchLSchema_schema')
const Favorite = require('../models/favorite_schema')
const Recent = require('../models/recent_schema')

apiRoute.get('/movie', async (req, res) => {
    const { page = 1, limit = 5 } = req.query;
    const sort = {}
try {
    const movies = await Movie.find()
    .sort({updated: -1})
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .exec();
    const count =  await Movie.countDocuments();
    res.json({movies, page, totalPages: Math.ceil(count / limit),})
} catch (err) {
    res.json({message: err})
}
})

apiRoute.get('/show', async (req, res) => {
    const { page = 1, limit = 5 } = req.query;
    const sort = {}
try {
    const shows = await Show.find()
    .sort({title: 1})
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .exec();
    const count =  await Show.countDocuments();
    res.json({shows, page, totalPages: Math.ceil(count / limit),})
} catch (err) {
    res.json({message: err})
}
})

apiRoute.get('/movie/featured', async (req, res) => {
    try {
        const movies = await Movie.find({featured: 1})
        res.json(movies)
    } catch (err) {
        res.json({message: err})
    }
})


apiRoute.get('/movie/:id', async (req, res) => {
    const movieId = Number(req.params.id)
    try {
        const movie = await Movie.find({id: movieId})
        res.json(movie)
    } catch (err) {
        res.json({message: err})
    }
}); 

apiRoute.get('/show/:id', async (req, res) => {
    const showId = Number(req.params.id)
    try {
        const movie = await Show.find({id: showId})
        res.json(movie)
    } catch (err) {
        res.json({message: err})
    }
}); 

apiRoute.get('/watchlater/get', async (req, res) => {
    username = req.headers.username.toLowerCase()  
    console.log(username)      
   try {
     const watchlater = await WatchLater.find({user: username})
res.json(watchlater)
} catch (err) {
    res.json({message: err})
    console.log(err)
}
}); 

apiRoute.get('/recent/get', async (req, res) => {

   let username = req.headers.username.toLowerCase()
    try {
      const recent = await Recent.find({user: username}, function(err, docs){

      })
 res.json(recent)
 } catch (err) {
     res.json({message: err})
     console.log(err)
 }
 }); 

apiRoute.get('/favorite/get', async (req, res) => {
    username = req.headers.username.toLowerCase()
    console.log(username)
    try {
       const favorite = await Favorite.find({user: username}, function(err, docs){
       })
       res.json(favorite)

 } catch (err) {
     res.json({message: err})
     console.log(err)
 }
 }); 



apiRoute.post('/movie/add', async (req, res) => {
    m = req.body
    const movie = new Movie({
        id: m.id,
        vip: m.vip,
        featured: m.featured, 
        title: m.title,
        poster: m.poster,
        background: m.background,
        overview: m.overview,
        year: m.year,
        trailer: m.trailer,
        release: m.release,
        genres: [m.genres],
        imdbId: m.imdb,
        tmdbId: m.tmdb,
        on_server: m.on_server,
        server: m.server,
        drive: m.drive,
        file: m.file, 
        created: m.created, 
        updated: m.updated
    })
    try {
        const savedMovie = await Movie.create(movie)
        res.json(savedMovie)
        res.json({ result: "success", message: `Successfully added ${m.id} - ${m.title}` })

    } catch (err) {
        res.json({ message: err})
    }
    }
)


apiRoute.post('/show/add', async (req, res) => {
    s = req.body
    const show = new Show({
        id: s.id,
        featured: s.featured, 
        title: s.title,
        poster: s.poster,
        background: s.background,
        overview: s.overview,
        year: s.year,
        genres: [s.genres],
        imdbId: s.imdb,
        tmdbId: s.tmdb,
    })
    try {
        const savedShow = await Show.create(show)
        res.json(savedShow)
        res.json({ result: "success", message: `Successfully added ${s.id} - ${s.title}` })

    } catch (err) {
        res.json({ message: err})
    }
    }
)

apiRoute.put('/watchlater/add', async (req, res) => {
    m = req.body
    const watchLater = new WatchLater({
        id: m.id,
        title: m.movie.title,
        trailer: m.movie.trailer,
        poster: m.movie.poster,
        tmdbId: m.movie.tmdbId,
        imdbId: m.movie.imdbId,
        last_watched: null,
        on_server: m.movie.on_server,
        user: m.user.toLowerCase()
    })
    try {
         await WatchLater.create(watchLater)
        res.json({ result: "success", message: `Successful` })

    } catch (err) {
console.log(err)    }

    })

    apiRoute.put('/favorite/add', async (req, res) => {
        m = req.body
        const favorite = {
            id: m.id,
            title: m.movie.title,
            trailer: m.movie.trailer,
            poster: m.movie.poster,
            tmdbId: m.movie.tmdbId,
            imdbId: m.movie.imdbId,
            last_watched: null,
            on_server: m.movie.on_server,
            user: m.user.toLowerCase()
        }
        try {
             await Favorite.create(favorite)
            res.json({ result: "success", message: `Successful` })
    
        } catch (err) {
    console.log(err)    }
    
        })

        apiRoute.patch('/recent/add', (req, res) => {
            let r = req.body.headers
            username = req.body.headers.username.toLowerCase()         
console.log(r)
            const recent = {
                id: r.id,
                title: r.title,
                trailer: r.trailer,
                poster: r.poster,
                background: r.background,
                tmdbId: r.tmdbId,
                user: username,
                episode: r.episode,
                season: r.season
            }
            try {
                 Recent.find({user: username, tmdbId: r.tmdbId, season: r.season, episode: r.episode}, function(err, docs){
                    if(docs.length === 0) {
                         Recent.create(new Recent(recent))
                         console.log('new movie added')
                    }
                    else {return console.log(docs)}
                }) 
                res.json({ result: "success", message: `Successful` })
        
            } catch (err) {
        console.log(err)    }
        
            })

apiRoute.delete('/movie/delete/:id', async (req, res) => {
    console.log('here')
    movieId = Number(req.params.id)
try {
await Movie.deleteOne({ id: movieId})
.exec()
res.json({ result: "success", message: `Successfully removed ${movieId}` })
} catch (err) {
    res.json({message: err})
}}); 


apiRoute.delete('/watchlater/delete',  (req, res) => {
    username = req.headers.username.toLowerCase()
    tmdbId = req.headers.tmbid



try {
 WatchLater.deleteOne({ tmdbId: tmdbId, user: username})
.exec()
res.json({ result: "success" })
console.log('deleted')

} catch (err) {
    res.json({message: err})
}})


apiRoute.delete('/favorite/delete',  (req, res) => {
    username = req.headers.username.toLowerCase()
    tmdbId = req.headers.tmbid


try {
 Favorite.deleteOne({ tmdbId: tmdbId, user: username})
.exec()
res.json({ result: "success" })
console.log('successfully deleted')

} catch (err) {
    res.json({message: err})
}})


module.exports = apiRoute