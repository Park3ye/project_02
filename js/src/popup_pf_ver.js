//popup_pf_ver.js

(function($) {

var body = $('body');
//body내부에 팝업상자 만들기
body.prepend('<div id="popupBox"><div class="pop_in"><p></p><button tabindex="0" type="button">닫기</button></div></div');
//바디 안에 팝업박스를 만들고, 그안에 팝인을 만들고, 그 안에 p태그와 버튼태그를 넣었습니다.
var popup = $('#popupBox');
var popIn = popup.children('.pop_in');
popup.css({position:'fixed', top:0, left:0, zIndex:5000, backgroundColor:'rgba(255,255,255,0.7)',
           boxShadow:'0 0.3rem 0.3rem #333', width:'100%', height:'auto', 
           boxSizing:'border-box', padding:'1rem'});
popIn.css({width:'auto',maxWidth:'960px', margin:'auto'});

//버튼태그의 Css와 포커스시, 포커스 해제시, 클릭시 css 또는 기능 부여
var closeBtn = popIn.find('button');
closeBtn.css({padding:'0.5rem', backgroundColor:'#f06', color:'#fff', fontWeight:'bold',
              borderRadius:'0.3rem', float:'right'});
closeBtn.on('focus',function(){ $(this).css({backgroundColor:'#0ac'}) });
closeBtn.on('blur',function(){ $(this).css({backgroundColor:'#f06'}); });
closeBtn.on('click',function(e) {   e.preventDefault(); popup.remove(); });

// p태그 안의 기입 내용 작성
var narr = popIn.find('p');
narr.html('본 사이트는 어떠한 경우라도 상업 및 영리를 목적으로 제작된 페이지가 아니며, <br />취업을 목적으로 한 개인포트폴리오 사이트임을 알려드립니다.조치가 필요하시면 연락 주시기 바랍니다.<br /> 사용된 이미지의 출처는 아래 링크를 통해 확인하세요.<br /><a href="./imageLink.html" target="_blank">이미지 출처 확인하기</a>');
narr.find('a').css({color:'#f06', fontWeight:'bold',});
// p태그 안 포커스시, 포커스 해제 시 css 부여
narr.find('a').on('focus',function() { 
  $(this).css({color:'#fff', outline:0, padding:'0.3rem', borderRadius:'0.2rem'});
});
narr.find('a').on('blur',function() {
  $(this).css({color:'#f06'});
});

$(window).on('scroll',function(){
  var scrollResult = $(this).scrollTop();
  (scrollResult >= 50) ? popup.slideUp(300) : popup.slideDown(300);
});


})(jQuery);

