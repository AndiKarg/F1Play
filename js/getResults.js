const help = ["Nummer", "Position", "Punkte", "Vorname", "Nachname", "Geburtsdatum", "Nationalität", "Rennstall", "Rennstallherkunft", "Startposition", "Runden", "Status"];

$(document).ready(function() {

    $("#show").click(loadDoc);


    function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            $("#tab").html("");
              let resulte = [];
              resulte = JSON.parse(this.responseText).MRData.RaceTable.Races[0].Results;
              console.log(resulte);

              $("#tab").append("<div class='row tabrow'><div class='cell item'></div><div class='cell item'>Position</div><div class='cell item'>Nummer</div><div class='cell item'>Vorname</div><div class='cell item'>Nachname</div><div class='cell item'>Punkte</div></div>");

              resulte.forEach(e => {
                $("#tab").append("<div class='row tabrow' id='"+e.position+"'><div class='cell tableitem'><img class='f1driverspic'src='./img/f1drivers/"+e.number+".png'></div><div class='cell tableitem'>"+e.position+"</div><div class='cell tableitem'>"+e.number+"</div><div class='cell tableitem'>"+e.Driver.givenName+"</div><div class='cell tableitem'>"+e.Driver.familyName+"</div><div class='cell tableitem'>"+e.points+"</div></div>");
              });

            //   $(".tabrow").hover(function() {
            //     $(".tabrow").css("box-shadow", "none");
            //     $(".tabrow").css("background-color", "rgb(30, 30, 50)");
            //     let rid = $(this).attr('id');
            //     $("#"+rid+"").css("background-color", "#338ed0");
            //     $("#"+rid+"").css("box-shadow", "0 0 12px 0px #0478ca");
            // });
            // hier drüber sieht man wie blöd ich teilweise bin...

            $(".tabrow").click(function() {

              $(".row").css("background-color", "none");

              let counter = 0;

              $(".driverinfo .row").html("");

              $("#tab").css("filter", "blur(15px)");

              $(".driverinfo").css("display", "block");

              let rid = $(this).attr('id');

              resulte.forEach(el => {
                if (el.position == rid) {
                  for (const key in el) {
                    if (typeof el[key] === 'object') {
                      for (k in el[key]) {
                        if (k == "givenName" || k == "familyName" || k == "dateOfBirth" || k== "nationality" || k == "name") {
                          $(".driverinfo .grid").append("<div class='row'><div class='cell key'>"+help[counter]+"</div><div class='cell value'>"+el[key][k]+"</div></div>");
                          counter += 1;
                        }
                      }
                    } else if (key != "positionText") {
                      $(".driverinfo .grid").append("<div class='row'><div class='cell key'>"+help[counter]+"</div><div class='cell value'> "+el[key]+"</div></div>");
                      counter += 1;
                      if (key == "number") {
                        $(".driverinfo").css("background-image", "url('./img/f1drivers/"+el[key]+".png')");
                      }
                    }
                  }
                  }
              });

              $("#closeinf").click(function() {
                $(".driverinfo").css("display", "none");
                $("#tab").css("filter", "none");
              });

            })


          }
        };
        xhttp.open("GET", "https://ergast.com/api/f1/current/last/results.json", true);
        xhttp.send();
      }

});