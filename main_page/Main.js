let movies = [
  {
    title: "The Terminator",
    year: 1984,
    poster:
      "http://www.pixelartshop.com/uploads/9/2/0/8/920811/terminatorpatgrid_orig.png",
    trailer:
      "https://i.pinimg.com/originals/77/0d/2e/770d2e2e931ca2db4ab5abcaccd3ca87.png",

    description:
      "A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity's future salvation.",

    actors: "Arnold Schwarzenegger, Michael Biehn, Linda Hamilton",
    director: "James Cameron ",
  },
  {
    title: "Batman",
    year: 1989,
    poster:
      "http://www.pixelartshop.com/uploads/9/2/0/8/920811/batmanpatgrid_orig.png",
    trailer:
      "https://preview.redd.it/nv4bp8x3wih71.gif?format=png8&s=e3cdbc880004927e99dbfb958442e5e41ded22ec",

    description:
      "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
    actors: "Michael Keaton , Jack Nicholson , Kim Basinger",
    director: "Tim Burton",
  },
  {
    title: "Kill Bill",
    year: 2003,
    poster:
      "http://www.pixelartshop.com/uploads/9/2/0/8/920811/killbillpatgrid_orig.png",
    trailer: "https://miro.medium.com/max/1400/0*LOIV8YfkutXYVXYo.jpg",

    description:
      "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
    actors: "Uma Thurman , David Carradine , Daryl Hannah",
    director: "Quentin Tarantino ",
  },
  {
    title: "Indiana Jones and the Raiders of the Lost Ark",
    year: 1981,
    poster:
      "http://www.pixelartshop.com/uploads/9/2/0/8/920811/raiderspatgrid_orig.png",
    trailer:
      "https://i.pinimg.com/originals/de/e0/0b/dee00bb59762e96b39880a3ed0a6827f.jpg",

    description:
      "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler's Nazis can obtain its awesome powers.",
    actors: "Harrison Ford , Paul Freeman , Ronald Lacey",
    director: "Steven Spielberg",
  },
  {
    title: "Jurassic Park",
    year: 1993,
    poster:
      "http://www.pixelartshop.com/uploads/9/2/0/8/920811/jurassicparkpattern_orig.png",
    trailer:
      "http://pm1.narvii.com/6947/dfe67668f2b0602bde597ff71a48a23a9a04040ar1-640-640v2_uhq.jpg",

    description:
      "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
    actors: "Sam Neil , Laura Dern , Jeff Goldblum",
    director: "Steven Spielberg",
  },
  {
    title: "Jaws",
    year: 1984,
    poster:
      "http://www.pixelartshop.com/uploads/9/2/0/8/920811/jawspattern_orig.png",
    trailer:
      "http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/1c3eeb4077a03fc.png",

    description:
      "When a killer shark unleashes chaos on a beach community off Long Island, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
    actors: "Roy Scheider , Richard Dreyfuss , Murray Hamilton",
    director: "Steven Spielberg",
  },
  {
    title: "Alien",
    year: 1975,
    poster:
      "http://www.pixelartshop.com/uploads/9/2/0/8/920811/alienpattern_orig.png",
    trailer:
      "https://www.kindpng.com/picc/m/21-213250_transparent-xenomorph-png-alien-queen-pixel-art-png.png",

    description:
      "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",
    actors: "Sigourney Weaver , Tom Skerritt , John Hurt",
    director: "Ridley Scott",
  },
  {
    title: "Back To The Future",
    year: 1985,
    poster:
      "http://www.pixelartshop.com/uploads/9/2/0/8/920811/bttfpattern_orig.png",
    trailer:
      "https://cdn.dribbble.com/users/810165/screenshots/3889492/delorean1.png",

    description:
      "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
    actors: "Michael J. Fox , Christopher Lloyd , Lea Thompson",
    director: "Robert Zemeckis",
  },
  {
    title: "E.T. the Extra-Terrestrial",
    year: 1982,
    poster:
      "http://www.pixelartshop.com/uploads/9/2/0/8/920811/etpattern_orig.png",
    trailer:
      "https://i.pinimg.com/originals/ca/1e/d0/ca1ed0ec9927f19764c3b1e72b9a2a70.png",

    description:
      "A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.",
    actors: "Henry Thomas , Drew Barrymore , Peter Coyote",
    director: "Steven Spielberg",
  },
  {
    title: "Ghostbusters",
    year: 1984,
    poster:
      "http://www.pixelartshop.com/uploads/9/2/0/8/920811/ghostbusterspattern_orig.png",
    trailer:
      "http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/06d9a2fce6f6c75.png",

    description:
      "Three parapsychologists forced out of their university funding set up shop as a unique ghost removal service in New York City, attracting frightened yet skeptical customers.",
    actors: "Bill Murray , Dan Aykroyd , Sigourney Weaver",
    director: "Ivan Reitman",
  },
  {
    title: "Star Wars",
    year: 1984,
    poster:
      "http://www.pixelartshop.com/uploads/9/2/0/8/920811/starwarspattern_orig.png",
    trailer:
      "https://steamuserimages-a.akamaihd.net/ugc/773972778297664774/323661E5BFFC1339FEC263E9DE8E87623910F0E1/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",

    description:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
    actors: "Mark Hamill , Harrison Ford , Carrie Fisher",
    director: "George Lucas",
  },
  {
    title: "The Thing",
    year: 1982,
    poster:
      "http://www.pixelartshop.com/uploads/9/2/0/8/920811/thingpatgrid_orig.png",
    trailer: "https://live.staticflickr.com/3862/18859671976_94dc521ee7_w.jpg",

    description:
      "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
    actors: "Kurt Russel , Wilford Brimley , Keith David",
    director: "John Carpenter",
  },
];

function showUpperMovie() {
  let i = 0;
  let movieTitle = movies[i].title;
  let moviePoster = movies[i].poster;
  let movieDesc = movies[i].description;
  let movieActor = movies[i].actors;
  let movieDirector = movies[i].director;
  let movieYear = movies[i].year;
  document.body.innerHTML += `
   <div class="featured_movie">
      <div class="poster_left">
        <h1>${movieTitle} (${movieYear})</h1>
        <img
          src="${moviePoster}"
          alt=""
        />
      </div>
      <div class="description-right_container">
        <div class="description">
          <span>Plot:</span>
          <p>
           ${movieDesc}
          </p>
          <br />
          <span>Director:</span>
          <p>${movieDirector}</p>
          <br />
          <span>Actors:</span>
          <p>${movieActor}</p>
        </div>
      </div>
    </div>
    <div class="middlebar">
      <div class="icons_left">
        <div class="house_icon">
          <i class="fa-solid fa-house"></i>
          <p>Home</p>
        </div>
        <div class="house_icon">
          <i class="fa-solid fa-user"></i>
          <p>Profile</p>
        </div>
        <div class="house_icon">
          <i class="fa-solid sharing fa-share">
            <div class="sharing_media">
              <a href="https://facebook.com/" target="_blank""><img src="/all_assets/fb_PA.png"></a>
              <a href="https://twitter.com/"  target="_blank"><img src="http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/2a810f7dca91c29.png"></a>
              <a href="https://instagram.com/"  target="_blank"><img src="/all_assets/tw_PA.png"></a>
            </div>
          </i>
          <p>Share</p>
        </div>
      </div>
    </div> 
  `;
}
showUpperMovie();

function showAllMovies() {
  for (let j = 1; j < movies.length; j++) {
    let movieTitle = movies[j].title;
    let moviePoster = movies[j].poster;
    let movieDesc = movies[j].description;
    let movieActor = movies[j].actors;
    let movieDirector = movies[j].director;
    let movieYear = movies[j].year;
    let movieTrailer = movies[j].trailer;

    document.body.innerHTML += `
       <div class="movie_container">
        <div class="movie_title">
          <h1>${movieTitle}</h1>
        </div>
        <div class="movie_description_container">
          <img
            src="${moviePoster}"
            alt=""
          />
          <div class="movie_description">
            <span>Year:</span>
            <p>${movieYear}</p>
            <span>Director:</span>
            <p>${movieDirector}</p>
            <span>Actors:</span>
            <p>${movieActor}<br></p>
          </div>
        </div>
        <div class="movie_plot">
          <span>Plot :</span>
          <br />
          <p>
            ${movieDesc}
          </p>
          <div class="buttons">
            <button id="watch_movie">Watch Movie
              <div class="watchMovie">
              <img src="${movieTrailer}">
              <i class="fa-solid playBtn fa-circle-play fa-3x"></i>
              </div>
            </button>
            <button id="watch_trailer">Watch Trailer
            </button>
          </div>
        </div>
      </div>
      
    `;
  }
}
showAllMovies();


let searchMovContainer = document.querySelector(".search_movies_container");
console.log(searchMovContainer)
searchMovContainer.addEventListener('click', () => {
  console.log('hello')
})


