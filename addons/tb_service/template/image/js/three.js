$(document).ready(function(){
	$("#get1").click(function(){
    $(this).addClass('nav-hover');
    $("#record1").css('display','block');
    $("#get2").removeClass('nav-hover');
    $("#get3").removeClass('nav-hover');
    $("#record2").css('display','none');
    $("#record3").css('display','none');
  });
  $("#get2").click(function(){
    $(this).addClass('nav-hover');
    $("#record2").css('display','block');
    $("#get1").removeClass('nav-hover');
    $("#record1").css('display','none');
    $("#get3").removeClass('nav-hover');
    $("#record3").css('display','none');
  });
  $("#get3").click(function(){
    $(this).addClass('nav-hover');
    $("#record3").css('display','block');
    $("#get1").removeClass('nav-hover');
    $("#record1").css('display','none');
    $("#get2").removeClass('nav-hover');
    $("#record2").css('display','none');
  });
});