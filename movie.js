var movies = [
    {
        title: "naruto",
        hasWatched: true,
        rating: 5
    },
    {
        title: "doremon",
        hasWatched: false,
        rating: 3
    },
    {
        title: "pokemon",
        hasWatched: false,
        rating: 4
    },
    {
        title: "HXH",
        hasWatched: true,
        rating: 4.9
    }
]

movies;

movies.forEach(function(movie){
    var result = "you have ";
    if(movie.hasWatched){
        result += "watched ";
    }
    else{
        result += "not seen "
    }
    result += "\""+ movie.title+ "\" - ";
    result += movie.rating;
    result += " stars";
    console.log(result);
})

