// slideBanner_01.js

// 즉시 실행 함수(IIFE)
(function($){
// jQuery
var banner = $('#bannerBox');
var bannerUl = banner.children('ul');//$('.banner>ul');
var bannerLi = bannerUl.children('li');//$('.banner>ul>li');

var bannerLiLength = bannerLi.legnth;

banner.css({overflow:'hidden'});
bannerLi.last().prependTo(bannerUl);
bannerUl.css({width:bannerLiLength*100+'%'});

  // $('.banner>ul>li').last().prependTo('.banner>ul');
  // $('.banner>ul').css({marginLeft:'-100%'});
  // // $('.banner').css({overflow:'hidden'});
var btn = banner.find('.btn');
var leftBtn = btn.find('.left_btn');
var rightBtn = btn.find('.right_btn');

leftBtn.on('click', function(e){
  e.preventDefault(); 
  bannerUl.stop(false,true).animate({marginLeft:0}, function(){
  bannerLi = bannerUl.children('li').last();
  bannerLi.prependTo(bannerUl);
  bannerUl.css({marginLeft:0});
  });
}); //leftBtrn 클릭

rightBtn.on('click', function(event){
  event.preventDefault(); 
 
  bannerUl.stop(false,true).animate({marginLeft:'-200%'}, function(){
    bannerLi = bannerUl.children('li').first();
    bannerLi.appendTo(bannerUl);
    bannerUl.css({marginLeft:'-100%'});
  });
}); //rightBtn 클릭


})(this.jQuery);