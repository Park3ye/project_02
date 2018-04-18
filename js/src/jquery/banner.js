// banner.js
// 2018.02.21 슬라이드베너인데  jQ로 1번을 마지막번쨰에 복사하는 방법을 이용한 베너 
(function($) {
  /* 
  // step 1 ----------------------------------------------- 
  //  1. tabindex
  //  2. 인디케이터 클릭시 처리
  //  3. 좌우 버튼을 클릭
  //  4. 자동슬라이드기능( setInterval(), clearInterval() )
  // step 2 ------------------------------------------
  //  1. banner 마지막부분 첫이미지 복제삽입( clone() )
  //  2. indicator 마지막부분 배너와 동일하게 처리( clone() ) 및, 마지막 요소 숨김
  //  3. 좌우 배너클릭시 이동처리(오른쪽 마지막에서는 처음으로, 처음에서는 마지막이동 후 다음행동 처리)
  */
// ----------------------------------------------------------
// 변수지정
  var bannerBox  = $('#bannerBox');
// banner이미지 영역 
  var bannerWrap = bannerBox.find('.ad_box');
  var bannerUl   = bannerWrap.children('ul');
  var bannerLi   = bannerUl.children('li');
// 인디케이트 영역
  var indi       = bannerBox.find('.indicator');
  var indiLi     = indi.find('li');

// 배너 및 인디케이트 첫요소 복제 후 마지막 요소로 이동
  var bannerClone = bannerLi.first().clone(true);
      bannerUl.append(bannerClone);
  var indiClone   = indiLi.first().clone(true);
      indi.append(indiClone);

// 변수내용 재설정
      bannerWrap = bannerBox.find('.ad_box');
      bannerUl   = bannerWrap.children('ul');
      bannerLi   = bannerUl.children('li');
// 인디케이트 영역
      indi       = bannerBox.find('.indicator');
      indiLi     = indi.find('li');

  // var indiP      = indi.find('p');
  // var indiNow    = indiP.find('.now');
  // var indiTotal  = indiP.find('.total');
  var playBtn    = $('.play_btn').find('button');

// 좌,우 버튼영역
  var btn        = bannerBox.find('.btn');
  var lbtn       = btn.find('.left_btn');
  var rbtn       = btn.find('.right_btn');
// 자동 슬라이드에 대한 변수지정
  var myAutoSlide;
  var startSlide; 
  var stopSlide;
  var timed      = 3000;

// 가로형 슬라이드형태로 변경
bannerBox.css({overflow:'hidden'});
var bannerLiLength = bannerLi.length;
// console.log(bannerLiLength);
bannerUl.css({width:bannerLiLength*100+'%'});
var bannerW = bannerUl.innerWidth();
// console.log(bannerW);
bannerLi.css({float:'left', width:bannerW/bannerLiLength });
// ----------------------------------------------------------------------



// -----------------------------------------------------------
// - tabindex 제거(첫번째 배너의 링크는 tabindex를 0으로 처리하여 사용)

// 버튼 클릭시 숫자가 오르거나 내려가게 해서 공통 수치를 얻도록 처리
var myIndex = 0;

var bannerSlideI = function(i) {
  if(i < 0){ 
      i = bannerLiLength-1; //현위치가 0값보다 작을때, 마지막녀석의 값을 가져와 그 위치로 이동
      bannerUl.stop().css({marginLeft:-i*100+'%'}); // 0보다 작을때 -500%
      i--;
      bannerUl.stop().animate({marginLeft:-i*100+'%'}); //5번째  -400%
      }else if(i >= bannerLiLength-1){ 
    //현재위치가 마지막녀석의 값보다 크거나 같을떄, 값을 초기값으로 변경 : 0
      i = 0;
      // 콜백함수
      bannerUl.stop().animate({marginLeft:-(bannerLiLength-1)*100+'%'}, function() {
        bannerUl.stop().css({marginLeft:0});
      });
  }else{ //이를 제외한 다른 모든경우에...
    bannerUl.stop().animate({marginLeft:-i*100+'%'});
  }
  // console.log(i);
  indiLi.removeClass('focus'); 
  var bannerIndex =  bannerLi.eq(i);
  indiLi.eq(i).addClass('focus');


  // indiNow.text(i+1);
  console.log(i);
  myIndex = i;
  return myIndex;
};

// indicator 배너갯수파악(배너숫자표기)
  // indiNow.text('1');
  // indiTotal.text(bannerLi.length-1);

// - 1. 인디케이터 클릭시 fade효과
// .첫인디케이트, (.focus)
  indiLi.eq(0).addClass('focus');
  indiLi.eq(-1).hide();

  indiLi.on('click', ['a'], function(e) {
    e.preventDefault();
    myIndex = $(this).index();
    bannerSlideI(myIndex);
  });

// - 2. 좌,우 버튼을 클릭시 배너의 내용이 나타나게 만들기
  btn.find('button').on('click',function(e) {
    e.stopPropagation();
    e.preventDefault();
    var _this = $(this);
    // (_this[0] == lbtn[0]) ? myIndex-- : myIndex++;

    if(_this[0] == lbtn[0]){
      myIndex--;
    } else {
      myIndex++;
    }
//  -------------------------------------
// 버튼 클릭시 최대 배너 마지막수치 최소 처음수치로 이동(각 값은 무한으로 변경)



    // console.log(myIndex);
    bannerSlideI(myIndex);

    // 배너 이동처리
// var myPercent = -myIndex*100;
// bannerUl.animate({marginLeft:myPercent+'%'},timed/20);
  // indi.find('li').eq(myIndex).find('i').addClass('active');
  // indi.find('li').eq(myIndex).find('i').siblings().removeClass('active');
  
  indi.find('li').eq(myIndex).find('i').removeClass('far');
  indi.find('li').eq(myIndex).find('i').addClass('fas');
  indi.find('li').eq(myIndex).siblings().find('i').addClass('far');
  indi.find('li').eq(myIndex).siblings().find('i').removeClass('fas');
  // indi.

  });



// 자동 슬라이드 배너처리

var startSlide = function() 
{ myAutoSlide = setInterval(function() 
  { rbtn.trigger('click');}, timed*2); };

var stopSlide = function() 
{ clearInterval(myAutoSlide); };

startSlide();

// playBtn 상태를 확인하고, 재생버튼에 대한 내용 처리
var btnStatus = function(has) {
  var _thisI = playBtn.find('i');
  var nowPause = has | false;
  // 변수 nowPause는 일반적으론, has의 인자값을 결과값으로 사용하지만, 만약 그 값이 선택되어있지 않다면, hss나 또는 false를 그 값으로 사용한다.
console.log(nowPause);
if(nowPause){
  _thisI.removeClass('fa-pause-circle');
  _thisI.addClass('fa-play-circle');
  stopSlide();
}else{
  _thisI.addClass('fa-pause-circle');
  _thisI.removeClass('fa-play-circle');
  startSlide();
 }
};

// // 플레이 버튼활용하기
playBtn.on('click',['button'], function(e) {
  e.preventDefault();
  var nowPause = playBtn.find('i').hasClass('fa-pause-circle');
  btnStatus(nowPause);
});

bannerBox.on({'mouseenter': stopSlide, 'mouseleave':btnStatus});
bannerBox.find('a').on('focus',function() {stopSlide()});
bannerBox.find('button').on('focus',function() {stopSlide()});
bannerBox.find('a').eq(-1).on('blur',function() {startSlide()});



})(this.jQuery);