 
 
    var number = 60;
    var intervalId;


    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    function grade() {


        $( "input:checked" ).each(function() {
            

            $("#correct").html(
                parseInt($("#correct").html(), 10) + 
                parseInt($(this).val(), 10));

            
          });

          $("#incorrect").html(
            2 - parseInt($("#correct").html(), 10));
    }

    function decrement() {

      number--;

      $("#show-number").html("<h2>" + number + "</h2>");

      if (number === 0) {

        stop();
        grade();
        alert("Time Up!");
      }
    }

    function stop() {

      clearInterval(intervalId);
    }

    $( document ).ready(function() {
        
              run();
});


    