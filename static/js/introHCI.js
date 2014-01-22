'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
 function initializePage() {
 	$("#testjs").click(jumbotronClick);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(submitClick);
	

}

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
  e.preventDefault();

  $(this).css("background-color", "#7fff00");
    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);


    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.css("display") == 'none') { 
    	$(description).fadeIn(); 
    } else { 
    	$(description).fadeOut();
    }
}

function jumbotronClick(e){
	//cancel the default reload
	e.preventDefault();
	$(this).text("Whoa, I'm clicked! ");
	$(".jumbotron h1").text("Run you clever boy. Run.");
	$(".jumbotron p").toggleClass("active");


}

function submitClick(e){
	e.preventDefault();
	var projectId = $("#project").val();
	var newWidth = $("#width").val();
	var newDescription = $("#description").val();
/*
	$(projectId).animate({
		width: newWidth;
	});*/

	console.log(projectId);
	console.log(newWidth);
	console.log(newDescription);

	$(projectId + ".project-description").text(newDescription);
	$(projectId + ".project-description").fadeIn();
	

}

