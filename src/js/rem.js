//锚点效果

$(function () {
  //锚点跳转滑动效果
  $('a[href*=#],area[href*=#]').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var $target = $(this.hash);
          $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
          if ($target.length) {
              var targetOffset = $target.offset().top;
              $('html,body').animate({
                      scrollTop: targetOffset
                  },
                  300);
              return false;
          }
      }
  });
})




var oMenu = document.getElementById('menu');
var oBtn = oMenu.getElementsByTagName('a')[0];
var oLeftBar = document.getElementById('leftBar');
oBtn.onclick = function () {
  if (oLeftBar.offsetLeft == 0) {
    oLeftBar.style.left = -249 + 'px';
  } else {
    oLeftBar.style.left = 0 + 'px';
  }
  if (document.documentElement.clientWidth <= 481) {
    document.onclick = function () {
      if (oLeftBar.offsetLeft == 0) {
        oLeftBar.style.left = -249 + 'px';
      }
    }
  }
}
var oNavItem = document.getElementById('navItem');
var aA = oNavItem.getElementsByTagName('a');
for (var i = 0; i < aA.length; i++) {
  aA[i].onclick = function () {
    for (var j = 0; j < aA.length; j++) {
      aA[j].className = '';
    }
    this.className = 'active';
  }
}

localStorage.clear();
