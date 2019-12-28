$(document).ready(function() {

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              let resulte = [];
              resulte = JSON.parse(this.responseText).MRData.RaceTable.Races[0].Results;

            resulte.forEach(e => {
                $("<div class='driver col-sm' id='"+e.number+"'><img class='driverpic' src='./img/f1drivers/"+e.number+".png'/><div class='drivername'><span>"+e.Driver.givenName+" "+e.Driver.familyName+"</span></div></div>").draggable({
                  connectToSortable: "#sortable",
                  containment: ".content",
                  revert: "invalid"
                }).appendTo($('.pickcontainer').sortable());
            });

          }
        };
        xhttp.open("GET", "https://ergast.com/api/f1/current/last/results.json", true);
        xhttp.send();

});