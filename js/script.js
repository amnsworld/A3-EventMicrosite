var $mobileMenu = window.document.querySelector('#hamburger-mobile-view');
var $navMenu = window.document.querySelector('#navigation-menu');
var $navMenuList =  window.document.querySelector('#nav-menu');


function onClickMenu(){
    // alert("test");
    $navMenu.classList.toggle('nav-click');
    $navMenuList.classList.toggle('nav-list-onclick');
}
$mobileMenu.addEventListener('click', onClickMenu);

//ref: last semester's group project of rocco