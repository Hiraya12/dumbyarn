
function showTab(tabName) {
    // Check if the clicked tab is already active
    var selectedTabContent = document.getElementById(tabName);


    // Hide all tab contents
    var tabContents = document.getElementsByClassName("active-tab-content");
    for (var i = 0; i < tabContents.length; i++) {
      tabContents[i].classList.remove("active-tab-content");
    }

    // Hide all active links
    var navLinks = document.getElementsByClassName("active-link");
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove("active-link");
    }

    // Show the selected tab content
    if (selectedTabContent) {
      selectedTabContent.classList.add("active-tab-content");
    }

    // Add active class to the clicked link
    var clickedNavLink = document.querySelector('a[href="#' + tabName + '"]');
    if (clickedNavLink) {
      clickedNavLink.parentNode.classList.add("active-link");
    }
  }



  document.addEventListener('DOMContentLoaded', function() {
    var sideNav = document.getElementById('sideNav');
    var sideNavButton = document.getElementById('sideNavButton');

    // Set the initial state of the sideNav
    sideNav.style.left = '-130px';

    sideNavButton.addEventListener('click', function() {
        if (sideNav.style.left === '-130px') {
            sideNav.style.left = '0px';
        
        } else {
            sideNav.style.left = '-130px';
            sideNavButton.textContent = '>'; // Change button text to '>' when the sideNav is closed
        }
    });
});
