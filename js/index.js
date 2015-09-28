$(document).ready(function(){

	var contentMap = {
		team:'.members',
		project:'.project-description',
		deliverable:'.deliverables'
	}

	function changeContent(content){
		$(".visible1").removeAttr("style");
		$(".visible1").addClass("hidden1");
		$(".visible1").removeClass("visible1");
		$(content).animate({opacity:1.0},800,function(){});
		$(content).addClass("visible1");
		$(content).removeClass("hidden1");
	}

	$(".btn").on("click",function(){
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
		var attr = $(this).attr("id");
		changeContent(contentMap[attr]);

	})


})