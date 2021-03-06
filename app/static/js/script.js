$(document).ready(function(){

	$("#toggle").click(function(){
		$('#nav-bar-mobile').slideToggle(400);
	});

	$('#artwork-tab').click(function(){
        $("#photography").fadeOut(600);
        $("#music").fadeOut(600);
        $("#artwork").fadeIn(600);
        $('#photography-tab').css("color","#333333");
        $('#photography-tab').css("text-decoration","none");
        $('#music-tab').css("color","#333333");
        $('#music-tab').css("text-decoration","none");
        $('#artwork-tab').css("color","#006666");
        $('#artwork-tab').css("text-decoration","underline");
    });

	$('#photography-tab').click(function(){
        $("#artwork").fadeOut(600);
        $("#music").fadeOut(600);
        $("#photography").fadeIn(600);
        $('#artwork-tab').css("color","#333333");
        $('#artwork-tab').css("text-decoration","none");
        $('#music-tab').css("color","#333333");
         $('#music-tab').css("text-decoration","none");
        $('#photography-tab').css("color","#006666");
        $('#photography-tab').css("text-decoration","underline"); 
    });

	$('#music-tab').click(function(){
        $("#photography").fadeOut(600);
        $("#artwork").fadeOut(600);
        $("#music").fadeIn(600);
        $('#photography-tab').css("color","#333333");
        $('#photography-tab').css("text-decoration","none");
        $('#artwork-tab').css("color","#333333");
         $('#artwork-tab').css("text-decoration","none");
        $('#music-tab').css("color","#006666");
        $('#music-tab').css("text-decoration","underline");
    });

jQuery(window).on('load', function(){ 
		var $ = jQuery;
		$('.photo-grid').masonry({
		itemSelector : '.photo', 
		gutter: 0});
	});

$('#artwork-tab').click(function() {
	var container = document.querySelector('.photo-grid');
	// initialize Masonry after all images have loaded
	imagesLoaded( container, function() {
	  $('.photo-grid').masonry({
		itemSelector : '.photo', 
		gutter: 0});
});
});
$('#photography-tab').click(function() {
	var container = document.querySelector('.photo-grid');
	// initialize Masonry after all images have loaded
	imagesLoaded( container, function() {
	  $('.photo-grid').masonry({
		itemSelector : '.photo', 
		gutter: 0});
});
});

$("#starfire-tab").click(function(){
		$('#starfire-content').slideToggle(400);
	});
$("#mighty-tab").click(function(){
		$('#mighty-content').slideToggle(400);
	});
$("#data-tab").click(function(){
		$('#data-content').slideToggle(400);
	});
$("#arpa-tab").click(function(){
		$('#arpa-content').slideToggle(400);
	});
$("#wwr-tab").click(function(){
		$('#wwr-content').slideToggle(400);
	});
$("#martial-tab").click(function(){
		$('#martial-content').slideToggle(400);
	});
$("#slammm-tab").click(function(){
		$('#slammm-content').slideToggle(400);
	});
$("#academic-tab").click(function(){
		$('#academic-content').slideToggle(400);
	});
});
