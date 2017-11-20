$(function() {

  // your code will go here

  	$.ajax({
  		url: "https://www.codeschool.com/users/ivan82cs.json", 
  		dataType: 'jsonp',
  		success: function(response){

    		var completed = response.courses.completed;
    		$.each(completed, function(index, item) {
    			$("#badges ").append(
    				"<div class='course'>" + 
    					"<h3>" + item.title + "</h3>" +
    					"<img src='" + item.badge + "' alt='Codeschool " + item.title + " Badge'>" + 
    					"<a href='" + item.url + "' target='_blank' class='btn btn-primary'>See Course</a>" + 
    				"</div>"
    			);

			});
			
  		}
	});











});
