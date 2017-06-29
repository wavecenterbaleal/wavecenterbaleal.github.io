function showMenu() {
  var menu = document.getElementById('menu')

  menu.className = 'navbar show'
}

function hideMenu() {
  var menu = document.getElementById('menu')

  menu.className = 'navbar'
}

var scrollPosition = 0;

window.addEventListener('scroll', function() {
  if (scrollPosition == 0) {
    document.getElementById('menu').className += ' navbar--solid';
    scrollPosition = 1;
  }
  else if (window.pageYOffset == 0) {
    var navClass = document.getElementById('menu').className;
    navClass = navClass.replace('navbar--solid', '');
    document.getElementById('menu').className = navClass;
    scrollPosition = 0;
  }
});
