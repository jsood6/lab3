'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control");
		$("#testjs").text("Please wait...")
		$(".jumbotron p").addClass("active");

	});;

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	
}

function projectClick(e){
	//prevent the page from reloading
	e.preventDefault();
	//in an event handler, $(this) refers to
	// the object that triggered the event  
	//$(this).css("background-color", "#122B5E");
	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    //description.addClass("toggleClass");
    //$(containingProject).append("<div class='project-description' div-id='ifclicked'><p>Description of the project.</p></div>");
    /*if(descriptionIntial.length == 0)
    {
 		$(this).css("background-color", "#122B5E");
    	(containingProject).append("<div class='project-description' div-id='ifclicked'><p>Description of the project.</p></div>");
    }*/

    //var description = descriptionIntial;
    
    if (description.length == 0) {
       $(this).css("background-color", "#122B5E");
       $(containingProject).append("<div class='project-description' div-id='ifclicked'><p>Description of the project.</p></div>");
    } else {
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
       description.toggle();
       if(description.is(":visible"))
       {
       		$(this).css("background-color", "#122B5E");
       }
       else
       {
       		$(this).css("background-color", "#FFFFFF");
       }

    }
}

