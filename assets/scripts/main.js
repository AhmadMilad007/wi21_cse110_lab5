// main.js
var element = document.getElementsByName('radio-sound'); //input audio 
document.getElementById("audio-selection").onchange = function () {visualDisc()};{}
var soundEl = document.getElementById ("horn-sound");
var Audbutton = document.getElementById ("honk-btn");
var volumeN = document.getElementById ('volume-number');
var volumeS = document.getElementById ('volume-slider');
var volumeA = document.getElementById ('horn-sound');
volumeN.onchange = function(e) {
	//e.preventDefault();
	console.log("here");
	volumeNS();
}
volumeS.onchange = function(e) {
	//e.preventDefault();
	console.log("here");
	volumeSN();
}
Audbutton.onclick = function(e) {
	e.preventDefault();
	play();
}

function visualDisc() {

	for ( i  = 0; i < element.length; i++){
		if (element[i].checked){
			if (element[i].id == "radio-air-horn"){
				document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";
				soundEl.src= "./assets/media/audio/air-horn.mp3";
			}
			else if (element[i].id == "radio-car-horn"){
				document.getElementById("sound-image").src = "./assets/media/images/car.svg";
				soundEl.src= "./assets/media/audio/car-horn.mp3";
			}
			else {
				document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
				soundEl.src= "./assets/media/audio/party-horn.mp3";
			}

		}
	}


}

function play() {
	soundEl.play();
	//volumeAL();
}
function volumeNS() {
	volumeS.value = volumeN.value;
	audioIm ();
	audioLv();
}
function volumeSN() {
	volumeN.value = volumeS.value;
	audioIm ();
	audioLv();
	//volumeA.volume =(volumeN.value/100);
}
function audioLv(){
	volumeA.volume =(volumeS.value/100);
}

function audioIm () {
	var level = volumeN.value;
	var imVolume = document.getElementById('volume-image');
	if (level > 66 && level < 101) {
		imVolume.src = "./assets/media/icons/volume-level-3.svg";
	}
	else if (level > 33 && level < 67){
		imVolume.src = "./assets/media/icons/volume-level-2.svg";
	}
	else if (level > 0 && level < 34) {
		imVolume.src = "./assets/media/icons/volume-level-1.svg";
	}
	else {
		imVolume.src = "./assets/media/icons/volume-level-0.svg";
	}
}
// TOD
