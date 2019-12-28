$(document).ready(function() {

const prediction = [];
prediction.podium = [];

$('.droppable').droppable({
    drop: function( event, ui ) {
        let divid = event.toElement.id;
        if ($(this).html().length <= 0) {
            $(this).html($('#'+divid).html());
            $('div').remove('#'+divid);
        } else {
            let reproducingid = $(this).html().split('/')[3].split('.')[0];
            let reproducinghtml = $(this).html();
            $(this).html($('#'+divid).html());
            $('div').remove('#'+divid);
            $('.pickcontainer').append("<div class='driver col-sm' id='"+reproducingid+"'>"+reproducinghtml+"</div>");
        }
      }
});


});