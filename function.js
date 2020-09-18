var $header_top = $('.header-top');
var $nav = $('nav');
 
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});
 
$('#fullpage').fullpage({
  sectionsColor: ['#348899', 
                '#3dcfa1', '#FF1493', '#FF1493', '#FF1493', '#FF1493', 
                '#FF1493', '#FF1493', '#FF1493', '#ff5757',
                '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', 
                '#ff5757'],
  sectionSelector: '.vertical-scrolling',
  navigation: false,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['zerothSection', 
            'firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 
            'sixthSection', 'seventhSection', 'eighthSection', 'ninethSection',
            'irisSection', 'magnoliaSection', 'proteaseSection', 'heliconiaSection',
            'iconSection'],
  menu: '#menu',
 
  afterLoad: function(anchorLink, index) {
    $header_top.css('background', 'rgba(0, 47, 77, .3)');
    $nav.css('background', 'rgba(0, 47, 77, .25)');
    if (index == 5) {
        $('#fp-nav').hide();
      }
  },
 
  onLeave: function(index, nextIndex, direction) {
    if(index == 5) {
      $('#fp-nav').show();
    }
  },
 
 
});