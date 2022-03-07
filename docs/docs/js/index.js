console.clear();

$('body > .section-1').imagesLoaded(function() {
  $('.loading').remove();
  AOS.init();
});

// 스크롤하면서 내려가서 하나만 로딩되면 화면나오게 설정 section1만 보이면 로딩끝.