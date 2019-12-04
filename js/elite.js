$(document).ready(function(){

    $("#popupalgemeen").hide();

    $("#popupvermaak").hide();

    $("#popupbevolking").hide();

    $(".answer").hide();

    $("#algemeenimg").click(function(){
          $("#popupalgemeen").fadeIn(1000);


    });

    $("#vermaakimg").click(function(){
          $("#popupvermaak").fadeIn(1000);


    });

        $("#bevolkingimg").click(function(){
          $("#popupbevolking").fadeIn(1000);


    });



    $(".popupsluiter").click(function(){
        $("#popupalgemeen").fadeOut(1000);
         $("#popupvermaak").fadeOut(1000);

        $("#popupbevolking").fadeOut(1000);
    });


    var antwoord1 = document.getElementById("answer1");

    var antwoord2 = document.getElementById("answer2");

    var antwoord3 = document.getElementById("answer3");


    //algemeen
    $("#antwoord1algemeenli").click(function(){

        antwoord1.innerHTML = "<p>fout</p>";

        $(".answer").fadeIn(1500);
        setTimeout(function(){
             $(".answer").fadeOut(1500);
        }, 2500);
    });

        $("#antwoord2algemeenli").click(function(){

        antwoord1.innerHTML = "<p>goed</p>";

                    $(".answer").fadeIn(1500);
        setTimeout(function(){
             $(".answer").fadeOut(1500);
        }, 2500);
    });

        $("#antwoord3algemeenli").click(function(){

        antwoord1.innerHTML = "<p>fout</p>";

                    $(".answer").fadeIn(1500);
        setTimeout(function(){
             $(".answer").fadeOut(1500);
        }, 2500);
    });


    //vermaak

    $("#antwoord1vermaakli").click(function(){

        antwoord2.innerHTML = "<p>fout</p>";

        $(".answer").fadeIn(1500);
        setTimeout(function(){
             $(".answer").fadeOut(1500);
        }, 2500);
    });

        $("#antwoord2vermaakli").click(function(){

        antwoord2.innerHTML = "<p>goed</p>";

                    $(".answer").fadeIn(1500);
        setTimeout(function(){
             $(".answer").fadeOut(1500);
        }, 2500);
    });

        $("#antwoord3vermaakli").click(function(){

        antwoord2.innerHTML = "<p>fout</p>";

                    $(".answer").fadeIn(1500);
        setTimeout(function(){
             $(".answer").fadeOut(1500);
        }, 2500);
    });

    //economie

    $("#antwoord1bevolking").click(function(){

        antwoord3.innerHTML = "<p>goed</p>";

        $(".answer").fadeIn(1500);
        setTimeout(function(){
             $(".answer").fadeOut(1500);
        }, 2500);
    });

        $("#antwoord2bevolking").click(function(){

        antwoord3.innerHTML = "<p>fout</p>";

                    $(".answer").fadeIn(1500);
        setTimeout(function(){
             $(".answer").fadeOut(1500);
        }, 2500);
    });

        $("#antwoord3bevolking").click(function(){
       
        antwoord3.innerHTML = "<p>fout</p>";

                    $(".answer").fadeIn(1500);
        setTimeout(function(){
             $(".answer").fadeOut(1500);
        }, 2500);
    });

});