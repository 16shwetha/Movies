var movieNameEle=document.getElementById("movie-name");
var searchbtn=document.getElementById("btn");
var movieWrapper=document.getElementById("movie-wrapper");
var moviestatus=document.getElementById("movie-status");

searchbtn.addEventListener("click",function(){
    movieWrapper.innerHTML = ""
    moviestatus.innerText="Loading......"
    $.get(`https://www.omdbapi.com/?apikey=45f0782a&s=${movieNameEle.value}`,function(response){
        moviestatus.innerText = ""
        //console.log(response);
        if(response.Response == "True"){
        var movies = response.Search;
        //console.log(movies);
        moviestatus.innerText=" ";
        for(var i = 0; i < movies.length; i++ ){
            movieWrapper.innerHTML += `
            <div id="movie-card">
            <img class="movie-image"
             src= "${movies[i].Poster}"
             />
            <p><b>Title:</b> ${movies[i].Title} </p>
             <p><b>Release Year:</b> ${movies[i].Year} </p>
         
     </div>
     `

        }
    }else{
        moviestatus.innerText = "404 Movies not found"
    }
    
    });
});
//<div id="movie-card">
       // <img class="movie-image"
       // src="https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg">
       // <p><b>Title:</b>  Friends</p>
       // <p><b>Release Year:</b>  1994</p>
    
//</div>