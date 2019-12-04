console.log('test');
function changeText1(){
document.getElementById('regeltext').innerHTML = '<b>Geboren in de verkeerde familie</b><p> Als je in Noord-Korea een regel overtreedt dan moet jij niet alleen boeten voor je daden, maar ook je familie. Dit geldt tot aan 3 generaties. Stel je bent geboren als kind van een misdadiger, dan bestaat er een kans dat je wordt geboren in een strafkamp, en dat je daar je hele leven vast zal blijven zitten. Veel kinderen die worden geboren in zo n strafkamp weten niet beter. Ze werken tot hun dood en halen vaak hun 50e levensjaar niet.</p>';
}

function changeText2(){
document.getElementById('regeltext').innerHTML = '<b>voorouders uit midde-klasse tijdens Japanse bezetting </b><p>Er zijn 3 hoofdklassen in Noord-Korea. De "core-klasse, de twijfel-klasse en de vijandige klassen. De hoogste status, ofwel de core-klasse, is alleen te bereiken als je voorouders verzetstrijders waren in de tijd van de Japanse bezetting. Als je voorouders deel waren van de hoge-middeklassen tijdens deze periode, en de staat komt daar achter loop je de kans dat ook jij zal boeten voor hun daden. </p>';
}

function changeText3(){
document.getElementById('regeltext').innerHTML = '<b>Verboden informatie</b><p>Noord-Korea is het meest gecensureerde land ter wereld. Op het kijken van Amerikaanse films staan zware straffen. Vaak moeten dit soort films illegaal worden verkregen. Maar niet alleen films: Noord-Koreanen beschikken niet over internet zoals wij dat kennen. Een kleine laag elite beschikt over internet, maar dat is erg beperkt. En ook het lezen van boeken is verboden, tenzij het boek goed is gekeurd door de staat.  </p>';
}

function changeText4(){
document.getElementById('regeltext').innerHTML = '<b>Andere ideologie</b><p>Het uitspreken van je mening is verboden, tenzij deze ten goede is van de Leider en de staat. Er is geen vrijheid van meningsuiting in Noord-Korea. Kwaad spreken over de leider kan betekenen dat je levenslang naar een van de strafkampen moet. Ook kritiek over het regime en andere politieke ideeën worden niet getolereerd. </p>';
}


$("button").click(function () {
  $("#mydiv").fadeIn();
  $("button").css("visibility", "hidden");
  $(".timeHover").css("visibility", "hidden");
  $(".returnHover").css("visibility", "visible");
});

$(".close").click(function () {
  $("#mydiv").fadeOut();
  $("button").css("visibility", "visible");
  $(".timeHover").css("visibility", "visible");
  $(".returnHover").css("visibility", "hidden");
});
