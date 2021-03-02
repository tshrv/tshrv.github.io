function toggleNavbarIcon() {
    $('#navbar-open-icon').toggleClass('visually-hidden');
    $('#navbar-close-icon').toggleClass('visually-hidden');
}

function collapseNavbar() {
    $(".navbar-collapse").collapse('hide');
    toggleNavbarIcon();
}

$('.navbar-collapse a').click(collapseNavbar);
$('.navbar-brand').click(collapseNavbar);
$('.navbar-toggler').click(toggleNavbarIcon);
