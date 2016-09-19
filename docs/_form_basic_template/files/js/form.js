// UTF-8

/*----------------------------------------------
*
* 	jQuery ready
*
----------------------------------------------*/

$(function(){

		$("input[type='text'],textarea").focus(function(){
			$(this).addClass("focus");
		})
		.blur(function(){
			$(this).removeClass("focus");
		});


});
