let isOpen = false;

function toggleNavbar() {
    let navbarStyle = document.querySelector('.navbar-wrapper').style;
    if (isOpen) {
        navbarStyle.right = '-100vw';

    } else {
        navbarStyle.right = '0vw'
    }
    // isOpen = !isOpen
}

function nameButtonX() {
    let navbarStyle = document.querySelector('.navbar-wrapper').style;
    if (isOpen) {
        navbarStyle.right = '100vw';

    } else {
        navbarStyle.right = '-100vw'
    }
    // isOpen = !isOpen
}