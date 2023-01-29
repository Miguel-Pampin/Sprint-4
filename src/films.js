// Exercise 1: Get the array of all directors.

function getAllDirectors(movies) {
  let result = movies.map(movie => movie.director);//Creamos un nuevo array con los nombres de los directores.
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let result = movies.filter(movie => movie.director.includes(director));//Filtramos las peliculas de un determinado director.
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
let result = 0;
function moviesAverageOfDirector(movies, director) {
 let moviesFiltered = movies.filter(movie => movie.director.includes(director));//Filtramos las peliculas de un determinado director.
  moviesAverage(moviesFiltered);//llamamos a funcion moviesAverage.
  console.log("EXERCICE 3 ->", result);
  return result;
}

function moviesAverage(moviesFiltered) { //creamos la función para poder usarla en el ejercicio 6(recibe el parametro moviesFiltered).
  let filmSc = moviesFiltered.map(movie => movie.score);//creamos un nuevo array con las puntuaciones.
  let sumaScore = filmSc.reduce(function (a, b) { return a + b });//sumamos todas las puntuaciones.
  let average = sumaScore / filmSc.length; //dividimos el total por el número de elementos para calcular la media.
  result = Number(average.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let copyMovies = movies.map(movie => movie.title).sort();//creamos un nuevo array con lo títulos de las películas y las ordenamos con sort().
  let result = copyMovies.slice(0, 20);//con slice le pedimos que seleccione desde la posición 0 las 20 primeras del array.
  console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let moviesNew = [...movies];//copiamos el array en uno nuevo.
  let result = moviesNew.sort((a, b) => {
    if (a.year > b.year) { return 1 };//ordenamos primero por año.
    if (a.year < b.year) { return -1 };
    if(a.year == b.year){
      if (a.title > b.title) {//ordenamos por título.
          return 1;
      }
        if (a.title < b.title) {
          return -1;
      }
      return 0;
  }
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
   moviesAverage(moviesFiltered);
   console.log(result);
   return result; */
 let moviesGenre = movies.filter((movie)=> movie.genre.includes(genre));//filtramos por categoría.
 let moviesScore=[];
  moviesGenre.map((movie) => (movie.score !== "") ? moviesScore.push(movie) : "");//si movie.score es diferente de vacio envia el objeto al array moviesScore.
  let sumaScore = moviesScore.reduce((total, movie) => { return total + movie.score }, 0);//sumamos las puntuaciones de las peliculas.
  let average = sumaScore / moviesScore.length;//dividimos el total entre los elementos del array.
  result = Number(average.toFixed(2));
  console.log("EXERCICE 6 ->", result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  let result =movies.map((movie) => {//creamos un nuevo array.
    let durationMovie = movie.duration.split(' '); //separamos el parametro duration con split mediante el espacio.
    let durationMinutes =(parseInt(durationMovie[0]) * 60 || 0) + (parseInt(durationMovie[1]) || 0);//multiplicamos la primera posicion (horas) por 60 min y sumamos la segunda posición.
    let movieMinutes = { ...movie,  duration: durationMinutes };//asignamos el resultado al parámetro duration.
    return movieMinutes;
  });
  console.log("EXERCICE 7->", result);;
  return result;

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies) {
  let bestOfYear = movies.filter( movie => movie.year); //filtramos por año.
  let orderedByScore = bestOfYear.sort(function (a, b) {//ordenamos por año.
    if (a.score < b.score) {
      return 1;
    }
    if (a.score > b.score) {
      return -1;
    }
    if(a.score == b.score){
        if (a.title > b.title) {//ordenamos por título.
            return 1;
        }
          if (a.title < b.title) {
            return -1;
        }
        return 0;
    }
    return 0;});
  let result = orderedByScore.slice(0,1);//de la posición 0 cogemos el primer elemento.
  console.log("EXERCICE 8 ->", result);
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
