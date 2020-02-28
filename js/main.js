$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.tooltipped').tooltip();
  $('.materialboxed').materialbox();
});

function closeSidenav() {
  let smallScreenMediaQuery = window.matchMedia("(max-width : 992px)");
  if (smallScreenMediaQuery.matches){
    $('.sidenav').sidenav('close');
  }
}
