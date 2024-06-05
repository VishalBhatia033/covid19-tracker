
// main indian records 

function getindian() {
    $.get(
      "https://api.rootnet.in/covid19-in/stats/latest",

      function (data) {
        // console.log(data.data.summary);
        totalcases.textContent =
          data.data.summary.confirmedCasesIndian.toLocaleString("en-US");
        totaldeaths.textContent =
          data.data.summary.deaths.toLocaleString("en-US");
        totalrecovered.textContent =
          data.data.summary.discharged.toLocaleString("en-US");
      }
    );
  }

  //   state wise table -=-------------------

  function getstate() {
    $.get(
      "https://api.rootnet.in/covid19-in/stats/latest",

      function (data) {
        // console.log(data.data.regional);
        var tablebody = document.getElementById("tablebody");

        for (var i = 1; i < data.data.regional.length; i++) {
          var x = tablebody.insertRow();
          x.insertCell(0);
          tablebody.rows[i].cells[0].innerHTML = i;
          x.insertCell(1);
          tablebody.rows[i].cells[1].innerHTML =
            data.data.regional[i - 1].loc;
          x.insertCell(2);
          tablebody.rows[i].cells[2].innerHTML =
            data.data.regional[i - 1].totalConfirmed.toLocaleString(
              "en-US"
            );
          x.insertCell(3);
          tablebody.rows[i].cells[3].innerHTML =
            data.data.regional[i - 1].deaths.toLocaleString("en-US");
          x.insertCell(4);
          tablebody.rows[i].cells[4].innerHTML =
            data.data.regional[i - 1].discharged.toLocaleString("en-US");
        }
      }
    );
  }

  // search box funtion --------------------------
const searchfun = () => {
  let filter = document.getElementById("search").value.toUpperCase();
  let mytable = document.getElementById("tablebody");
  let tr = mytable.getElementsByTagName("tr");
  for (var i = 1; i < tr.length; i++) {
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


fetch("https://api.rootnet.in/covid19-in/stats/latest")
  .then((apidata) => {
    return apidata.json();
  })
  .then((jsondata) => {
    // console.log(jsondata.data.regional);
  //  maharastra 
    totalcasesma.textContent =
    jsondata.data.regional[20].confirmedCasesIndian.toLocaleString("en-US");
    totaldeathsma.textContent =
    jsondata.data.regional[20]. deaths.toLocaleString("en-US");
// karnatka 
    totalcaseska.textContent =
    jsondata.data.regional[15].confirmedCasesIndian.toLocaleString("en-US");
    totaldeathska.textContent =
    jsondata.data.regional[15]. deaths.toLocaleString("en-US");
// kerla 
    totalcaseske.textContent =
    jsondata.data.regional[16].confirmedCasesIndian.toLocaleString("en-US");
    totaldeathske.textContent =
    jsondata.data.regional[16]. deaths.toLocaleString("en-US");

    totalcaseshp.textContent =
    jsondata.data.regional[12].confirmedCasesIndian.toLocaleString("en-US");
    totaldeathshp.textContent =
    jsondata.data.regional[12]. deaths.toLocaleString("en-US");
    // totaldeaths.textContent =
    //   jsondata.Global.TotalDeaths.toLocaleString("en-US");
  });