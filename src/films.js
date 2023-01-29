// Exercise 1: Get the array of all directors.

function getAllDirectors(movies) {
  let result = movies.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let result = movies.filter(movie => movie.director.includes(director));
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
let moviesFiltered = [];
let result = 0;
function moviesAverageOfDirector(movies, director) {
  moviesFiltered = movies.filter(movie => movie.director.includes(director));
  moviesAverage();
  console.log("EXERCICE 3 ->", result);
  return result;
}
function moviesAverage() {
  let filmSc = moviesFiltered.map(movie => movie.score);
  let sumaScore = filmSc.reduce(function (a, b) { return a + b });
  let average = sumaScore / filmSc.length;
  result = Number(average.toFixed(2));
}
// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let copyMovies = movies.map(movie => movie.title).sort();
  let result = copyMovies.slice(0, 20);
  console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let moviesNew = [...movies];
  let result = moviesNew.sort((a, b) => {
    if (a.year > b.year) { return 1 };
    if (a.year < b.year) { return -1 };
    if (a.title > b.title) { return 1 };
    if (a.title < b.title) { return -1 }
    else { return 0 };
  });
  console.log("EXERCICE 5 ->", result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
let genre = "Sci-Fi";
function moviesAverageByCategory(movies, genre) {
  /*  moviesGenre = movies.filter(movie => movie.genre.includes(genre));
   moviesGenre.map(movie => (movie.score !== "") ? moviesFiltered.push(movie) : "");
   moviesAverage();
   console.log(moviesFiltered, result);
   return result; */
 let moviesGenre = movies.filter((movie)=> movie.genre.includes(genre));
 let moviesScore=[];
  moviesGenre.map((movie) => (movie.score !== "") ? moviesScore.push(movie) : "");
  let sumaScore = moviesScore.reduce((total, movie) => { return total + movie.score }, 0);
  let average = sumaScore / moviesScore.length;
  result = Number(average.toFixed(2));
  console.log("EXERCICE 6 ->", result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  let result =movies.map((movie) => {
    let durationMovie = movie.duration.split(' ');
    let durationMinutes =(parseInt(durationMovie[0]) * 60 || 0) + (parseInt(durationMovie[1]) || 0);
    let movieMinutes = { ...movie,  duration: durationMinutes };
    return movieMinutes;
  });
  console.log("EXERCICE 7->", result);;
  return result;

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies) {
  let bestOfYear = movies.filter( movie => movie.year); 
  let orderedByScore = bestOfYear.sort(function (a, b) {
    if (a.score < b.score) {
      return 1;
    }
    if (a.score > b.score) {
      return -1;
    }
    if(a.score == b.score){
        if (a.title > b.title) {
            return 1;
        }
          if (a.title < b.title) {
            return -1;
        }
        return 0;
    }
    return 0;});
  let result = orderedByScore.slice(0,1);
  console.log("EXERCICE 8 ->",bestOfYear, result);
  return result;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
