$(document).ready(function() {
    $("#music1").click(function() {
     document.getElementById("audio1").play();
	 document.getElementById("audio2").pause();
	 document.getElementById("audio3").pause();
	 document.getElementById("audio4").pause();
    });
    $("#music2").click(function() {
     document.getElementById("audio2").play();
	 document.getElementById("audio1").pause();
	 document.getElementById("audio3").pause();
	 document.getElementById("audio4").pause();
    });
	$("#music3").click(function() {
     document.getElementById("audio3").play();
	 document.getElementById("audio1").pause();
	 document.getElementById("audio2").pause();
	 document.getElementById("audio4").pause();
    });
	$("#music4").click(function() {
     document.getElementById("audio4").play();
	 document.getElementById("audio1").pause();
	 document.getElementById("audio2").pause();
	 document.getElementById("audio3").pause();
    });
	$("#stop").click(function() {
     document.getElementById("audio1").pause();
	 document.getElementById("audio2").pause();
	 document.getElementById("audio3").pause();
	 document.getElementById("audio4").pause();
    });

});