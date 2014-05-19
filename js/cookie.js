function createCookie ( name, value, days ) {
	var expires;
	/* This is a generic, reusable function for writing cookies
	   It takes 3 arguments - the name of the cookie to write, the value for that cookie, 
	   and optionally a number of days after which the cookie should expire */
	if ( days ) {
		/* If the function is given a number of days it uses this to calculate the expiration date,
		   puts the expiration date in the correct format (.toGMTString()) */
		var date = new Date();
		date.setTime ( date.getTime() + (days*24*60*60*1000) );
		expires = "; expires=" + date.toGMTString();
	} else {
		expires = "";
	}
	// Write the cookie
	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie ( name ) {
	/* This is a generic, reusable function for reading cookies
	   It takes a single argument: the name of the cookie whose value we want */
	/* Create a string consisting of the name of the cookie and an equals sign
       Remember all cookies are of the form name=value, so if we could remove the name= then we're left with the value */	
	var nameEquals = name + "=";
	// Individual cookies delineated by semi-colons so use the string object method split to separate them and store them in an array called ca
	var cookieArray = document.cookie.split ( ';' ); 

	// For each separate cookie in the cookieArray array
	for ( var i=0; i < cookieArray.length; i++ ) {
		var c = cookieArray[i];

		// Trim any white space at the start of the cookie
		while ( c.charAt ( 0 ) == ' ' ) {
			c = c.substring ( 1, c.length );
		}
		
		/* See if this cookie has our name= string at the start
		   If it does, we can take the rest of the cookie by using the string object method substring()
		   This will be the value part of the cookie which is what we want */
		if ( c.indexOf ( nameEquals ) === 0 ) {
			return c.substring ( nameEquals.length, c.length );
		}
	}
	return null;
}