var bool = true;

$("#mailSubmit").on("click",function(){ 	
   	$("#mailForm").fadeToggle(400);
   	$("#mailSuccess").fadeToggle(500);
});

$("#formSubmit").on("click",function(){
   	$("#formSuccess").fadeToggle(400);
   	$("#form").fadeToggle(500);
});