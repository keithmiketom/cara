

//++++++++++++++++++++++++++++++++++++++++++++++//
//		ext links						//
//++++++++++++++++++++++++++++++++++++++++++++++//

function externalLinks() {
 if (!document.getElementsByTagName) return;			//checks to see there are HTML tags
 
 var anchors = document.getElementsByTagName("a");		//targets anchor elements
 for (var i=0; i<anchors.length; i++) {
   		var anchor = anchors[i];
   		if (anchor.getAttribute("href") &&
       		anchor.getAttribute("rel") == "external") 	//checks to see if the link will be an external site
     		anchor.target = "_blank";					//opens the link in a new window
		 }		
	}
							//not necessary but good practice
//++++++++++++++++++++++++++++++++++++++++++++++//
//		Swop Stylesheets						//
//++++++++++++++++++++++++++++++++++++++++++++++//

   
var defaultStyleLink, otherStyleLink;

defaultStyleLink = document.getElementById( "default" );
otherStyleLink = document.getElementById( "other" );


function setActiveStyleSheet ( styleId ) {

	var i = 0;
	var linkItem, linkArray;
	
	linkArray = document.getElementsByTagName( "link" );
	
	for ( i = 0; i < linkArray.length; i++ ) {
		
		linkItem = linkArray[i];
			
		if ( linkItem.getAttribute( "rel" ).indexOf( "style" ) != -1 && linkItem.getAttribute( "title" ) ) {
			linkItem.disabled = true;
				
			if ( linkItem.getAttribute( "title" ) === styleId ) {
				linkItem.disabled = false;
			}
		}
	}
}

function getActiveStyleSheet () {

	var i = 0; // Loop counter
	var linkItem, linkArray; // Will refer to an individual link item from the array
	
	linkArray = document.getElementsByTagName( "link" );
	
	// As before
	for ( i = 0; i < linkArray.length; i++ ) {
		
		linkItem = linkArray[i];
		/* Is it a style sheet, and is it preferred or alternate, and is it NOT disabled? 
		   Then it must be the active style sheet and we can return its title */
		if ( linkItem.getAttribute( "rel" ).indexOf( "style" ) != -1 && linkItem.getAttribute( "title" ) && !linkItem.disabled ) {
			return linkItem.getAttribute( "title" );
		}
	}
	return null;
}


//++++++++++++++++++++++++++++++++++++++++++++++//
//		Cookies for Persistance					//
//++++++++++++++++++++++++++++++++++++++++++++++//

function createCookie(name, value, days) {
	/* This is a generic, reusable function for writing cookies
	   It takes 3 arguments - the name of the cookie to write, the value for that cookie, 
	   and optionally a number of days after which the cookie should expire */
	if (days) {
		/* If the function is given a number of days it uses this to calculate the expiration date,
		   puts the expiration date in the correct format (.toGMTString()) */
		var date = new Date();
		date.setTime ( date.getTime() + ( days*24*60*60*1000 ) );
		var expires = "; expires=" + date.toGMTString();
	} else {
		expires = "";
	}
	// Write the cookie
	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
	/* This is a generic, reusable function for reading cookies
	   It takes a single argument: the name of the cookie whose value we want */
	/* Create a string consisting of the name of the cookie and an equals sign
       Remember all cookies are of the form name=value, so if we could remove the name= then we're left with the value */	
	var nameEquals = name + "=";
	// Individual cookies delineated by semi-colons so use the string object method split to separate them and store them in an array called ca
	var cookieArray = document.cookie.split ( ';' ); 

	// For each separate cookie in the ca array
	for ( var i=0; i < cookieArray.length; i++) {
		var c = cookieArray[i];

		// Trim any white space at the start of the cookie
		while ( c.charAt ( 0 ) == ' ' ) {
			c = c.substring ( 1, c.length );
		}
		
		/* See if this cookie has our name= string at the start
		   If it does, we can take the rest of the cookie by using the string object method substring()
		   This will be the value part of the cookie which is what we want */
		if ( c.indexOf ( nameEquals ) == 0 ) {
			return c.substring ( nameEquals.length, c.length );
		}
	}
	return null;
}

defaultStyleLink.onclick = function() {
	setActiveStyleSheet( this.id );
};

otherStyleLink.onclick = function() {
	setActiveStyleSheet( this.id );
};

// The window.onload event fires when the web page is completely finished loading
window.onload = function() {
	// We get the stored cookie indicating the user's preference
	 externalLinks()
	var cookie = readCookie ( "style" );
	/* We set the title equal to this cookie value, if it exists
	   Else we use the getPreferredStyleSheet() function to retrieve the title of that and use it instead */
	var title;

	if ( cookie ) {
		title = cookie;
		setActiveStyleSheet ( title );
		
	}
}

// The window.onunload event fires when the web page is closed or navigated away from
window.onunload = function() {
	// We assume that the style sheet current when the user leaves is their preferred style and store it in the cookie
	var title = getActiveStyleSheet();
	createCookie( "style", title, 30 );
}

//++++++++++++++++++++++++++++++++++++++++++++++//
//		Image Rollover							//
//++++++++++++++++++++++++++++++++++++++++++++++//


						//not necessary but good practice

	