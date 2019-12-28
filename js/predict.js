$(document).ready(function() {

    podMalen();

    $('.grid').on('click', '.driver', function() {
        let did = 0;
        did = $(this).attr('id');
        console.log(did);
        if (!localStorage.getItem("first")) {
            localStorage.setItem("first", did);
        } else if (!localStorage.getItem("second")) {
            localStorage.setItem("second", did);
        } else if (!localStorage.getItem("third")){
            localStorage.setItem("third", did);
        } else {
            alert("Sie haben bereits Ihre 3 Tipps abgegeben!");
        }
        podMalen();
      })

      function podMalen() {
        $('.first').text(localStorage.getItem("first"));
        $('.second').text(localStorage.getItem("second"));
        $('.third').text(localStorage.getItem("third"));
      };


    
});