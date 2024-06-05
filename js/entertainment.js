let movies = [
  {
    image: "contagion.jfif",
    name: "'Contagion' (2011)",
    description: "PG-13 2011, Mystery & thriller/Drama, 1h 46m",
    Director: "Steven Soderbergh",
    Stars:
      " Matt Damon · Mitch Emhoff , Kate Winslet · Dr. Erin Mears , Jude Law · Alan Krumwiede",
    About:
      "This thriller, directed by Steven Soderbergh, tells the story of an international team of doctors, coordinated by the World Health Organization (WHO), who have to deal with the rapid spread of a deadly pandemic virus.",
    Ratings: {
      imdb: "6.8",
      tomatoes: "85",
    },
  },
  {
    image: "28days.jpg",
    name: "'28 Days Later' (2002) & '28 Weeks Later' (2007)",
    description: " 2002/2007, Mystery & thriller/Drama, 1h 53m",
    Director: "Danny Boyle",
    Stars:
      "Cillian Murphy , Naomie Harris , Brendan Gleeson , Christopher Eccleston",
    About:
      "A highly contagious, aggression-inducing virus called Rage is unleashed in Great Britain after an infected chimpanzee is freed from a laboratory in Cambridge by a group of eco-terrorists. It spreads rapidly and becomes an epidemic, resulting in societal collapse.",
    Ratings: {
      imdb: "7.5",
      tomatoes: "87",
    },
  },

  {
    image: "outbreak.jpg",
    name: "'Outbreak' (1995)",
    description: " 1995, Mystery & thriller/Drama, 2h 7m",
    Director: " Wolfgang Petersen",
    Stars:
      "Dustin Hoffman , Rene Russo , Morgan Freeman , Kevin Spacey , Cuba Gooding Jr.",
    About:
      "n 1967, during the Stanleyville mutinies, a virus called Motaba, which causes a deadly fever, is discovered in the African jungle. To keep the virus a secret, U.S. Army officers Donald McClintock and William Ford destroy the camp where soldiers were infected.",
    Ratings: {
      imdb: "6.6",
      tomatoes: "59",
    },
  },

  {
    image: "rec.jfif",
    name: "'REC' (2007)",
    description: " 2007, Mystery & thriller/Drama, 1h 18m",
    Director: "Jaume Balagueró, Paco Plaza.",
    Stars:
      "Manuela Velasco · Ángela , Ferran Terraza · Manu , Jorge-Yamam Serrano · Policía joven , Pablo Rosso · Pablo",
    About:
      "The film stars Manuela Velasco as a reporter who, with her cameraman, accompany a group of firefighters on an emergency call to an apartment building to discover an infection spreading inside, with the building being sealed up and all occupants ordered to follow a strict quarantine.",
    Ratings: {
      imdb: "7.4",
      tomatoes: "90",
    },
  },

  {
    image: "strain.jpg",
    name: "'The Andromeda Strain' (1971)",
    description: " 1971, Mystery & thriller/Drama, 2h 10m",
    Director: "Robert Wise",
    Stars:
      "James Olson · Dr. Mark Hall , Arthur Hill · Dr. Jeremy Stone , David Wayne · Dr. Charles Dutton , Kate Reid · Dr. Ruth Leavitt , Paula Kelly · Karen Anson.",
    About:
      "A team of top scientists work feverishly in a secret, state-of-the-art laboratory to discover what has killed the citizens of a small town and learn how this deadly contagion can be stopped.",
    Ratings: {
      imdb: "7.2",
      tomatoes: "67",
    },
  },

  {
    image: "virus.jpg",
    name: "'Virus: The End' (1980)",
    description: " 1980, Mystery & thriller/Drama, 2h 36m",
    Director: "Kinji Fukasaku",
    Stars:
      "Masao Kusakari · Dr. Shûzô Yoshizumi , Tsunehiko Watase · Yasuo Tatsuno , Isao Natsuyagi · Cmdr. Nakanishi , Shin'ichi Chiba · Dr. Yamauchi",
    About:
      "After a virus devastates the global human population, survivors in Antarctica desperately try to find a cure and save the human race. After a virus devastates the global human population, survivors in Antarctica desperately try to find a cure and save the human race.",
    Ratings: {
      imdb: "6.2",
      tomatoes: "55",
    },
  },

  {
    image: "quarantine.jfif",
    name: "Quarantine (2008)",
    description: "R Horror, Sci-Fi, Thriller | 89 min |",
    Director: "John Erick Dowdle",
    Stars:
      "Jennifer Carpenter, Steve Harris, and Columbus Short",
    About:
      "A television reporter and her cameraman are trapped inside a  building quarantined by the CDC, after the outbreak of a mysterious virus which turns humans into bloodthirsty killers.",
      Ratings: {
      imdb: "5.9",
      tomatoes: "56",
    },
  },

  {
    image: "iamlegand.jfif",
    name: " I Am Legend (2007)",
    description: "PG-13 Action, Drama, Sci-Fi | 101 min |",
    Director: " Francis Lawrence ",
    Stars:
      "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
    About:
      "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
      Ratings: {
      imdb: "7.2",
      tomatoes: "68",
    },
  },

  {
    image: "traintobusan.jfif",
    name: "Train to Busan (2016)",
    description: "R Action, Horror, Thriller | 118 min | ",
    Director: "Sang-ho Yeon  ",
    Stars:
      "Gong Yoo, Yu-mi Jung, Ma Dong-seok, Su-an Kim",
    About:
      "While a zombie virus breaks out in South Korea, passengers struggle to survive on the train from Seoul to Busan.",
      Ratings: {
      imdb: "7.6",
      tomatoes: "94",
    },
  },
];


let web=[
  {
    name:"THE WALKING DEAD",
    rating:"4.6",
    year:"2010-2022",
    seasons:"11",
    episodes:"177",
    image:"twd.jpg",
    available_on:"NETFLIX",
    color:"text-danger"
  },
  {
    name:"THE LAST OF US",
    rating:"4.5",
    year:"2023",
    seasons:"1",
    episodes:"9",
    image:"las.jpg",
    available_on:"Disney + Hotstar",
    color:"text-success"

  },
  { 
    name:"THE STAND",
    rating:"2.5",
    year:"2020",
    seasons:"1",
    episodes:"9",
    image:"thestand.jpg",
    available_on:"Amazon Prime Video",
    color:"text-primary"

  },
  {
    name:"CONTAINMENT",
    rating:"4.7",
    year:"2016",
    seasons:"1",
    episodes:"13",
    image:"containment.jpg",
    available_on:"Amazon Prime Video",
    color:"text-primary"

  },
]



function load_webseries() {
  let web_section = document.getElementById("web_section");
  for (let i = 0; i < web.length; i++) {
    web_section.innerHTML += ` <div class="col-md-5 mt-5 mb-5" style="box-shadow: 0 15px 30px 1px black; background-color: beige;">
    <div class="product-details">
      <h1 class="web_name" style="font-family: Bebas Neue, cursive; font-size: 30px">
        ${web[i].name}
      </h1>
      <span class="hint-star star">
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <span> ${web[i].rating}</span>
      </span>
      <p class="information m-0 description_font_size" style="font-family: Bebas Neue;">
      ${web[i].year}
        </p>
      <p class="information m-0" >
        <p class="m-0 description_font_size" style="font-family: Bebas Neue;">seasons:  ${web[i].seasons}</P>
        <p class="m-0 description_font_size d-lg-block  d-none" style="font-family: Bebas Neue;">episodes:  ${web[i].episodes}</P>
        <p class="m-0 description_font_size" style="font-family: Bebas Neue;">Available on : <span class="${web[i].color}"> ${web[i].available_on}</span> </P>
      </p>
    </div>

    <div class="product-image">
      <img class="img img-fluid p-2 web_img" src="./images/${web[i].image}" alt="" />
    </div>
  </div>`;
  }
}

load_webseries();



function load_movies() {
  let movies_container = document.getElementById("movies_container");
  for (let i = 0; i < movies.length; i++) {
    movies_container.innerHTML += ` <div class="container-fluid" style="background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 4%, rgba(115,11,18,1) 41%, rgba(83,10,20,1) 75%);">
        <div class="container pt-5 pb-5">
          <div class="row text-light">
            <div class="col-sm-2 p-0 d-lg-block d-none">
              <img class="img img-fluid" src="./images/${movies[i].image}" alt="">
            </div>
            <div class="col-sm-10 description_font_size">
              <span class="d-md-none d-lg-none d-xl-none d-xxl-none p-1 fw-bold" style="background-color: rgb(9, 203, 9)">${i+1}</span>
              <span class="movie_name h3">${movies[i].name}</span>
              <p>${movies[i].description}</p>
              <p>
                <b> Director:</b>
                <span class="">${movies[i].Director}</span>
              </p>
              <p>
                <b>Stars:</b>
                <span class="">
                ${movies[i].Stars}</span>
              </p>
              <p>${movies[i].About}</p>
            </div>
          </div>
          <div class="row pt-4 rating_row">
            <div class="col-12 text-light rating" style="border-left: 20px solid rgb(9, 203, 9);">
              <p class=" h4 m-0 rating_heading" style="color: rgb(9, 203, 9);">RATINGS :</p>
              <p class="m-0 description_font_size">${movies[i].Ratings.imdb}/10 IMDB</p>
              <p class="m-0 description_font_size">${movies[i].Ratings.tomatoes}% Rotton Tomatoes</p>
            </div>
          </div>
        </div>
    
      </div>`;
  }
}


var j = 0;
var txt = ' Some of The Best Virus-Related Movies Made Well Before The Pandemic.';
var speed = 40; 

function typeWriter() {
  if (j < txt.length) {
    document.getElementById("typertxt").innerHTML += txt.charAt(j);
    j++;
    setTimeout(typeWriter, speed);
  }
}

function chgclor(){
  if (document.documentElement.scrollTop > 30) {
    stick.style.backgroundColor="rgb(2,0,36)";
    stick.style.transition = " 0.7s";
    stick.style.transitionTimingFunction = "ease-out";
    proj.style.color="white";
    flink.style.color="white";
    slink.style.color="white";
    tlink.style.color="white";
    folink.style.color="white";
    filink.style.color="white";
    list6.style.color="white";

  }else{
    stick.style.backgroundColor="white";
    proj.style.color="black";
    flink.style.color="black";
    slink.style.color="black";
    tlink.style.color="black";
    folink.style.color="black";
    filink.style.color="black";
    list6.style.color="black";
  }
  }