$(document).ready(function() {

    //Einmal beim Laden und dann immer bei resize
    let height = parseFloat($(".slide .grid").height()) * 1.5;
    $(".carousel").css("height", ""+height+"px");

    $( window ).resize(function() {
        let height = parseFloat($(".slide .grid").height()) * 1.5;
        $(".carousel").css("height", ""+height+"px");
    });

});