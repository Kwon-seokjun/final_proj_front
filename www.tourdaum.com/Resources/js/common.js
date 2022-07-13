$(function(){
	
	var top = $('#gotop');

	function gotop(){
		if($(window).scrollTop() > 900){
			top.addClass('active');
		}else{
			top.removeClass('active');
		}
	}

	gotop();

	top.on('click',function(){
		$('body,html').animate({
            scrollTop:0
        },100);
	});

	$(window).on('scroll',function(){
		gotop();
	});

	$('.view_tab li a').click(function(){
		$('.view_tab li a').removeClass('on');
		$(this).addClass('on');
	});
	
	
	$('.list_detail li a').click(function() {	
		$('.list_detail li a').removeClass('on');
		$('.list_detail li > div').slideUp(150);
		if ($('+div',this).css('display') =='none')
		{									
			$(this).addClass('on');									
			$(this).next('div').stop().slideDown(150);
		}					
	});

	$('.faq td > a').click(function() {	
		$('.faq td > a').removeClass('on');
		$('.faq td > div').slideUp(150);
		if ($('+div',this).css('display') =='none')
		{									
			$(this).addClass('on');									
			$(this).next('div').stop().slideDown(150);
		}					
	});
	
	$(".pay_way li > label").click(function() {	
		$('.pay_way li').removeClass('on');
		$(this).parent('li').addClass('on');
		$('.pay_way li div').removeClass('on');
		$(this).next('div').addClass('on');
	});

});


function tabView(obj, id) {
		$('.tab_cnt').hide();
		$(document.getElementById(id)).show().focus();
		$('.tab_cnt').removeClass('on');
		$(document.getElementById(id)).addClass('on');
}
