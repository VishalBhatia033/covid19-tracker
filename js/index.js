// https://corona.lmao.ninja/v2/countries






// world data api -------------------------------------
fetch("https://covid-api.com/api/reports/total")
  .then((apidata) => {
    return apidata.json();
  })
  .then((jsondata) => {
    lastupdated.textContent = jsondata.data.last_update;
    let x = jsondata.data.confirmed_diff;
    let y = jsondata.data.deaths_diff;
    NewConfirmed.textContent = x.toLocaleString("en-US");
    NewDeaths.textContent = y.toLocaleString("en-US");
    let tt = parseInt(jsondata.data.confirmed);
    total.textContent = Math.trunc(tt / 10000000);
    let ttt = Math.trunc(tt / 10000000);
    let per = (ttt / 788) * 100;
    percent.textContent = Math.trunc(per);
    totalcases.textContent = jsondata.data.confirmed.toLocaleString("en-US");
    totaldeaths.textContent = jsondata.data.deaths.toLocaleString("en-US");
    totalrecovered.textContent = jsondata.data.active.toLocaleString("en-US");
  });
// .catch(error => {
//     document.body.innerHTML=`<p class="text-center text-danger h5 mt-5">this page is not working try after some time</p>`;

// });

// contries table api ---------------------------------
function fetchh() {
  $.get(
    "https://covid-api.com/api/reports",

    function (apidata) {
      // console.log(data.Global);
      let n = apidata.data.length;
      var tablebody = document.getElementById("tablebody");

      for (var i = 1; i < n; i++) {
        var x = tablebody.insertRow();
        x.insertCell(0);
        tablebody.rows[i].cells[0].innerHTML = i;
        x.insertCell(1);
        tablebody.rows[i].cells[1].innerHTML = apidata.data[i - 1].region.name;

        x.insertCell(2);
        tablebody.rows[i].cells[2].innerHTML =
          apidata.data[i - 1].region.province;

        x.insertCell(3);
        tablebody.rows[i].cells[3].innerHTML =
          apidata.data[i - 1].confirmed.toLocaleString("en-US");

        x.insertCell(4);
        tablebody.rows[i].cells[4].innerHTML =
          apidata.data[i - 1].confirmed_diff.toLocaleString("en-US");

        x.insertCell(5);
        tablebody.rows[i].cells[5].innerHTML =
          apidata.data[i - 1].deaths.toLocaleString("en-US");

        x.insertCell(6);
        tablebody.rows[i].cells[6].innerHTML =
          apidata.data[i - 1].deaths_diff.toLocaleString("en-US");

        x.insertCell(7);
        tablebody.rows[i].cells[7].innerHTML =
          apidata.data[i - 1].recovered.toLocaleString("en-US");

        // backgroundColors for records greater than zero
        // console.log(tablebody.rows[i].cells[3].textContent)
        let num = tablebody.rows[i].cells[4].textContent;
        let numm = parseInt(num);
        if (numm > 0) {
          tablebody.rows[i].cells[4].style.backgroundColor = "#FFEEAA";
        }

        let num2 = tablebody.rows[i].cells[6].textContent;
        let numm2 = parseInt(num2);
        if (numm2 > 0) {
          tablebody.rows[i].cells[6].style.backgroundColor = "red";
        }
      }
    }
  );
}

 




// https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=57f529c0c3ad474f969a7a83aa96f1af
function getnews() {
  $.get(
    "https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=57f529c0c3ad474f969a7a83aa96f1af",

    function (data) {
      let container1 = document.getElementById("newscontainer");
      let container2 = document.getElementById("newscontainer2");
      for (let i = 0; i < 10; i++) {
        container1.innerHTML += ` <div class="col-2 m-2 mb-4 p-3 id=${i}  " style=" cursor:pointer; height:100%;" onclick="sendto('${i}')">
        <marquee class="text-light bg-danger fw-bolder" behavior="" direction="">news</marquee>
        <p  style="font-family: Playfair Display;"  class="underline">${data.articles[i].title}</p>
        <p class="fw-bold"  style="font-family: Playfair Display;"  class="underline">Author:  ${data.articles[i].author}</p>

      
      </div>`;
      // container2.innerHTML += ` <div class="col m-2 mb-4 p-3   " style="  cursor:pointer; height:100%; " onclick="sendto('${i+10}')">
      // <img class="img-fluid img" src="${data.news[i+10].image}" alt="can't load image" />
      // <p  style="font-family: Playfair Display;" class="underline">${data.articles[i+10].title}</p>
     
      // </div>`;
      }
      
    }
  );
}
function sendto(id){
  $.get(
    "https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=57f529c0c3ad474f969a7a83aa96f1af",
  
    function (data) {
      let i=id;
      let linktopag = data.articles[i].url;
      location.href = linktopag;
    }
  );
}



// search box funtion --------------------------
const searchfun = () => {
  let filter = document.getElementById("search").value.toUpperCase();
  let mytable = document.getElementById("tablebody");
  let tr = mytable.getElementsByTagName("tr");
  for (var i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      let textvalue = td.textContent || td.innerHTML;
      if (textvalue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};


// suffered countries

// fetch("https://api.covid19api.com/summary")
//   .then((apidata) => {
//     return apidata.json();
//   })
//   .then((jsondata) => {
//     // console.log(jsondata.Countries);
//     //  US\

//     indianew.textContent =
//     jsondata.Countries[77].NewConfirmed.toLocaleString("en-US");

//     // US

//     //   jsondata.Global.TotalDeaths.toLocaleString("en-US");
//   });
