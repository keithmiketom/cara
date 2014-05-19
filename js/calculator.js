var Calculator = (function () {
    // simple calculator for + - * and / 
    // aria ca2 
    return {

		AddTwoNumbers: function (a, b) {

		      var x = parseInt(a);
			  var y = parseInt(b);

			  if (isNaN(x) == true){
			    throw new Error ("Not a number");
			  }
	          if (isNaN(y) == true){
			    throw new Error ("Not a number");
			  }

			  if (x > 100000000000){
			    throw new Error ("First number is out of range");
			  }
			  if (y > 100000000000){
			    throw new Error ("Second number is out of range");
			  }
			  var z = x + y;
			  return z;
		},

		MinusTwoNumbers: function (a, b) {

		      var x = parseInt(a);
			  var y = parseInt(b);

			  if (isNaN(x) == true){
			    throw new Error ("Not a number");
			  }
	          if (isNaN(y) == true){
			    throw new Error ("Not a number");
			  }

			  if (x > 100000000000){
			    throw new Error ("First number is out of range");
			  }
			  if (y > 100000000000){
			    throw new Error ("Second number is out of range");
			  }

			  var z = x - y;
			  return z;
		},

		MulTwoNumbers: function (a, b) {

		      var x = parseInt(a);
			  var y = parseInt(b);

			  if (isNaN(x) == true){
			    throw new Error ("Not a number");
			  }
	          if (isNaN(y) == true){
			    throw new Error ("Not a number");
			  }
			  if (x > 100000000000){
			    throw new Error ("First number is out of range");
			  }
			  if (y > 100000000000){
			    throw new Error ("Second number is out of range");
			  }

			  var z = x * y;
			  return z;
		},

		DivideTwoNumbers: function (a, b) {

		      var x = parseInt(a);
			  var y = parseInt(b);

			  if (isNaN(x) == true){
			    throw new Error ("Not a number");
			  }
	          if (isNaN(y) == true){
			    throw new Error ("Not a number");
			  }
			  if (y == 0){
			    throw new Error ("Can't be divided by 0");
			  }
			  if (x > 100000000000){
			    throw new Error ("First number is out of range");
			  }
			  if (y > 100000000000){
			    throw new Error ("Second number is out of range");
			  }
			  var z = x / y;
			  return z;
		}

    };

})();
$(document).ready(function() {
    
	$("#add").click(function() {
        var firstnumber = $("#firstnumber").val();
        var secondnumber = $("#secondnumber").val();


        if ((firstnumber.length == 0) || (secondnumber.length == 0)) {
            alert("Please input TWO numbers to calculate");
        }
		
		else if (firstnumber > 100000000000){
		     alert("First number is out of range");
			 }
		else if (secondnumber > 100000000000){
		     alert("Second number is out of range");
			 }	 
       
        else {
            $("#result").html("<h1>The result is </h1>" + Calculator.AddTwoNumbers(firstnumber,secondnumber));
        }
    });
	
	$("#minus").click(function() {
        var firstnumber = $("#firstnumber").val();
        var secondnumber = $("#secondnumber").val();


        if ((firstnumber.length == 0) || (secondnumber.length == 0)) {
            alert("Please input TWO numbers to calculate");
        }
		
		else if (firstnumber > 100000000000){
		     alert("First number is out of range");
			 }
		else if (secondnumber > 100000000000){
		     alert("Second number is out of range");
			 }	 
       
        else {
            $("#result").html("<h1>The result is </h1>" + Calculator.MinusTwoNumbers(firstnumber,secondnumber));
        }
    });
	
	$("#mul").click(function() {
        var firstnumber = $("#firstnumber").val();
        var secondnumber = $("#secondnumber").val();


        if ((firstnumber.length == 0) || (secondnumber.length == 0)) {
            alert("Please input TWO numbers to calculate");
        }
		
		else if (firstnumber > 100000000000){
		     alert("First number is out of range");
			 }
		else if (secondnumber > 100000000000){
		     alert("Second number is out of range");
			 }	 
       
        else {
            $("#result").html("<h1>The result is </h1>" + Calculator.MulTwoNumbers(firstnumber,secondnumber));
        }
    });
	
	$("#divide").click(function() {
        var firstnumber = $("#firstnumber").val();
        var secondnumber = $("#secondnumber").val();

        if ((firstnumber.length == 0) || (secondnumber.length == 0)) {
            alert("Please input TWO numbers to calculate");
        }
		
		else if (firstnumber > 100000000000){
		     alert("First number is out of range");
			 }
		else if (secondnumber > 100000000000){
		     alert("Second number is out of range");
			 }	 
		
        else if (secondnumber ==0){
		     alert("Nothing can be divide by 0");
		}
       
        else {
            $("#result").html("<h1>The result is </h1>" + Calculator.DivideTwoNumbers(firstnumber,secondnumber));
        }
    });
	
	$("#clearinput").click(function() {
        $("#firstnumber").val('');
        $("#secondnumber").val('');
		$("#result").text('Result will display here !');		
    });
	
});	