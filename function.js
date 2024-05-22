document.getElementById('sideNavButton').addEventListener('click', function() {
    var sideNav = document.getElementById('sideNav');
    if (sideNav.style.left === '-180px') {
        sideNav.style.left = '0px';
    } else {
        sideNav.style.left = '-180px';
    }
});
