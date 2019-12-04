window.onload = function() {

	//make count variables
	var telleider1 = 0; // kim il un
	var telleider2 = 0;	// kim jung il
	var telleider3 = 0;	// kim jung un

	// get elementen
	var leider1 = document.getElementById("a");
	var leider2 = document.getElementById("b");
	var leider3 = document.getElementById("c");
	var textcontent = document.getElementById("infocontent");
	var teller1 = document.getElementById("teller1");
	var teller2 = document.getElementById("teller2");
	var teller3 = document.getElementById("teller3");

	// shuffle array contents so the index will be random each time it boots up
	shuffle(leider1array);
	shuffle(leider2array);
	shuffle(leider3array);
	// declare variabls for using in the functions
	var i1 = 0;
	var i2 = 0;
	var i3 = 0;

	var rand1 = "";
	var rand2 = "";
	var rand3 = "";
	// array for random yelling when ending the info array
	var end =["Auw!", "Stop!","Ouch!"];
	var randend = "";


function endClicking(content) {
	randend = end[Math.floor(Math.random() * end.length)];
	content.innerHTML = randend;
}

function changeTextLeider1(tellert) {

	// make it introduce himself on first click
	if (tellert == 1 ) {
		textcontent.innerHTML = "Mijn naam is kim il sun!";
	}
	else if (tellert <= leider1array.length){
		rand1 = leider1array[i1];
		textcontent.innerHTML = rand1;	
		i1++;
	}
	else {
		endClicking(textcontent);
	}

}

//function for changing second leader info
function changeTextLeider2(tellert) {
	if (tellert == 1 ) {
		textcontent.innerHTML = "Mijn naam is kim jung il!";
	}
	else if (tellert <= leider2array.length){
		rand2 = leider2array[i2];
		textcontent.innerHTML = rand2;
		i2++;
	}
	else {
		endClicking(textcontent);
	}

}
//function for changing third leader info

function changeTextLeider3(tellert) {
	if (tellert == 1 ) {
		textcontent.innerHTML = "Mijn naam is kim jung un!"
	}
	else if (tellert <= leider3array.length){
		rand3 = leider3array[i3];
		textcontent.innerHTML = rand3;
		i3++;
	} 
	else {
		endClicking(textcontent);
	}	

}


// $('.twitter-share-button').attr('data-text', 'Ik heb zojuist ' + telleider1 + ' | ' + telleider2 + ' | ' + telleider3 + 'aantal keer geklikt op de noord-korea clicker van NOS');
// make image transform
function spiegelAfb(afb,nmr) {
	afb.style.oTransform = "scaleX(-1)";
	afb.style.webkitTransform ="scaleX(-1)";
	afb.style.transform = "scaleX";
	afb.style.filter = "FlipH";
	afb.style.msFilter = "FlipH";

		if (nmr == 1) {
		afb.style.background = "rgba(0,0,0,0.1"
		leider2.style.background = "";
		leider3.style.background = "";
	} else if (nmr == 2){
		afb.style.background = "rgba(0,0,0,0.1"
		leider1.style.background = "";
		leider3.style.background = "";
	} else if (nmr == 3) {
		afb.style.background = "rgba(0,0,0,0.1"
		leider1.style.background = "";
		leider2.style.background = "";	
	}
	
}

// make image go back
function rechtAfb(afb, nmr) {
	afb.style.oTransform = "";
	afb.style.webkitTransform ="";
	afb.style.transform = "";
	afb.style.filter = "";
	afb.style.msFilter = "";

	if (nmr == 1) {
		afb.style.background = "rgba(0,0,0,0.1"
		leider2.style.background = "";
		leider3.style.background = "";
	} else if (nmr == 2){
		afb.style.background = "rgba(0,0,0,0.1"
		leider1.style.background = "";
		leider3.style.background = "";
	} else if (nmr == 3) {
		afb.style.background = "rgba(0,0,0,0.1"
		leider1.style.background = "";
		leider2.style.background = "";	
	}
}

function tellerSteady(teller) {
	teller.style.oTransform = "";
	teller.style.webkitTransform ="";
	teller.style.transform = "";
	teller.style.filter = "";
	teller.style.msFilter = "";
}

// make the image function
function teller(teller, leider, nmr) {
	if (teller % 2 == 0) {

			rechtAfb(leider, nmr);
		} else {
			spiegelAfb(leider, nmr);
		}
}

// click on pictures to add count
$('#leider1').click(function(){
	telleider1++;
	teller1.innerHTML = telleider1;
	teller(telleider1, leider1,1);
	changeTextLeider1(telleider1);
	tellerSteady(teller1);

});
$('#leider2').click(function(){
	telleider2++;
	teller2.innerHTML = telleider2;	
	teller(telleider2, leider2,2);
	changeTextLeider2(telleider2);
});
$('#leider3').click(function(){
	telleider3++;
	teller3.innerHTML = telleider3;
	teller(telleider3, leider3,3);
	changeTextLeider3(telleider3);
});


//shuffle array so text will be random
function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

}



// make constructor for the info
	function info(nmr, leider, content) {
		// unique number
		this.nmr = nmr;
		// which leider
		this.leider = leider;
		// content of didyouknow
		this.content = content;

		this.getNmr = function() {
			return this.nmr;
		}
		this.getLeider = function() {
			return this.leider;
		}
		this.getContent = function() {
			return this.content;
		}
	}
