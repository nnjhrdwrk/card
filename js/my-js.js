$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.menu-list').toggleClass('active');				
	});
});



$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".menu-list.active"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
      div.hide(".menu-list.active", {direction: "left"} , 1000);
    }
  });




