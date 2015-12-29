$(document).ready(function(){

	$("#toggle").click(function(){
		$('#nav-bar').slideToggle(400);
	});

	$('#photography-tab').click(function(){
        $("#artwork").fadeOut(600);
        $("#music").fadeOut(600);
        $("#photography").fadeIn(600);
        $('#artwork-tab').css("color","#333333");
        $('#music-tab').css("color","#333333");
        $('#photography-tab').css("color","#006666");
        $('#photography-tab').css("text-decoration","underline");
        $('#artwork-tab').css("text-decoration","none");
        $('#music-tab').css("text-decoration","none");
    });

	$('#artwork-tab').click(function(){
        $("#photography").fadeOut(600);
        $("#music").fadeOut(600);
        $("#artwork").fadeIn(600);
        $('#photography-tab').css("color","#333333");
        $('#music-tab').css("color","#333333");
        $('#artwork-tab').css("color","#006666");
        $('#artwork-tab').css("text-decoration","underline");
        $('#photography-tab').css("text-decoration","none");
        $('#music-tab').css("text-decoration","none");
    });

	$('#music-tab').click(function(){
        $("#photography").fadeOut(600);
        $("#artwork").fadeOut(600);
        $("#music").fadeIn(600);
        $('#photography-tab').css("color","#333333");
        $('#artwork-tab').css("color","#333333");
        $('#music-tab').css("color","#006666");
        $('#music-tab').css("text-decoration","underline");
        $('#photography-tab').css("text-decoration","none");
        $('#artwork-tab').css("text-decoration","none");
    });

jQuery(window).on('load', function(){ 
		var $ = jQuery;
		$('.photo-grid').masonry({
		itemSelector : '.photo', 
		gutter: 20});
	});
$('#photography-tab').click(function() {
	var container = document.querySelector('.photo-grid');
	// initialize Masonry after all images have loaded
	imagesLoaded( container, function() {
	  $('.photo-grid').masonry({
		itemSelector : '.photo', 
		gutter: 20});
});
});
$('#artwork-tab').click(function() {
	var container = document.querySelector('.photo-grid');
	// initialize Masonry after all images have loaded
	imagesLoaded( container, function() {
	  $('.photo-grid').masonry({
		itemSelector : '.photo', 
		gutter: 20});
});
});



});