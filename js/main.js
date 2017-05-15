$("div.list").on("click", function() {
	var dropdown = $(this).find(".dropdown-list");
	var change = $(this).find(".plus");

	dropdown.slideToggle();
	change.toggleClass("minus");
});