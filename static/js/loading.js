$main = $(".tabs");

// Initiates an AJAX request on click
$("#import_button").on(
	"click",
	function() {
		$main.addClass("loading"); 
		$(this).attr('disabled','disabled');
});