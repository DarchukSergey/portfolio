$('#fullpage').fullpage({
	anchors:['Page1', 'Page2', 'Page3','Page4', 'Page5', 'Page6', 'Page7'],
	menu: '#mainMenu',
	navigation: true,
	navigationTooltips: ['Главная', 'ТХ','Состав','Бонусы','Купить','Отзывы','Гарантия'],
	showActiveTooltip: true,
	controlArrows: false,
	slidesNavigation: true,   //Включает навигацию по сайтам
	slidesNavPosition: 'bottom',  //определяет положение навигации
	continuousVertical: true,
	easingcss3:'cubic-bezier(1.000, -0.430, 0.10, 1.470)',
});

$(function(){
  //default is 700. 
  $.fn.fullpage.setScrollingSpeed(1500); // скролл страницы 2000мс
});

 (function() {
  var removeSuccess;

  removeSuccess = function() {
    return $('.button').removeClass('success');
  };

  $(document).ready(function() {
    return $('.button').click(function() {
      $(this).addClass('success');
      return setTimeout(removeSuccess, 3000);
    });
  });

}).call(this);



                  