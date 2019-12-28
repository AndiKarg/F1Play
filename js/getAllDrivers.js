$(document).ready(function() {


        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              let resulte = [];
              resulte = JSON.parse(this.responseText).MRData.RaceTable.Races[0].Results;

            resulte.forEach(e => {
                $(".pickrow").append("<div class='driver col-sm' id='"+e.number+"'><img class='driverpic' src='./img/f1drivers/"+e.number+".png'/>"+e.Driver.givenName+" "+e.Driver.familyName+"</span></div>");
            });

          }
        };
        xhttp.open("GET", "https://ergast.com/api/f1/current/last/results.json", true);
        xhttp.send();

});