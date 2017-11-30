$(function(){
	var c=0
	function run(){
		c++
		if(c==3){
			c=0
		}
		$("#pic").stop().animate({"marginLeft":-1940*c},500)
		$("#banner-bg ul li").eq(c).css({"background":"red"}).siblings("li").css({"background":"#000"})
	}
	var timer=setInterval(run,1500)
	$("#banner-bg ul li").mouseenter(function(){
		clearInterval(timer)
		var i=$(this).index()
		$("#pic").stop().animate({"marginLeft":-1940*i},500)
		$("#banner-bg ul li").eq(i).css({"background":"red"}).siblings("li").css({"background":"#000"})
	}).mouseleave(function(){
		timer=setInterval(run,1500)
	})
	$(".bot-top-pic .top").hover(function(){
		$(this).stop().animate({"marginTop":"-159px"},300)
	},function(){
		$(this).stop().animate({"marginTop":"0px"},300)
	})
	$(".main-left-top ul li").click(function(){
		var i=$(this).index()
		$(".main-left-bot div").eq(i).show().siblings("div").hide()
		$(this).css({"color":"red"}).siblings("li").css({"color":"#000"})
	})
})