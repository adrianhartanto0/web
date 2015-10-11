$(document).ready(function(){
   
   var selected;
	var contentMap = {
		team:'.members',
		project:'.project-description',
		deliverables:'.deliverables',
		minutes:'.minutes'
	}

	function changeContent(content){

		var bottomTopPosition = $(contentMap[content]).offset().top;	
		if(selected == undefined){
				console.log("asdasd");
				selected = contentMap[content];
		}else{
				$(selected).css("background","none");		
		
		}
		$(contentMap[content]).css("background","rgba(39,117,82,0.5)");
		selected = contentMap[content];
		$("html body").animate({
				scrollTop:bottomTopPosition
		},1000,function () {});
		
	}

	$(".tab-link").on("click",function(){
				console.log($(this).attr("id"));
				changeContent($(this).attr("id"));
	})


})