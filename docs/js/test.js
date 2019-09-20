var menu_visible = false;

function closeMenu() {
    console.log( 'closeMenu' );
    document.querySelectorAll( '.menu-toggle-show-hide' )
        .forEach( ( item ) => {
            item.classList.add( 'menu-hide' );
        } );

}

function showMenu() {
    document.querySelectorAll( ".menu-toggle-show-hide" )
        .forEach( ( item ) => {
            item.classList.remove( 'menu-hide' );
        } );

}

function helloworld() {
    alert( 'helloworld' );
}

function clickImport() {
    console.log( 'clickImport' );
    hideMenu();
}

function clickExport() {
    console.log( 'clickExport' );
    hideMenu();
}

function clickSettings() {
    hideMenu();
}

function clickLogin() {
    hideMenu();
}

function clickLogout() {
    hideMenu();
}

// true=showmenu, false=hidemenu
const menu_show = true;
const menu_hide = false;
var menu_state = menu_hide;

function toggleMenuButton() {
    if ( menu_state == menu_show ) {
        hideMenu();
    } else {
        showMenu();
    }
}

function showMenu() {
    console.log( 'showMenu' );
    document.querySelector( '.hamburger' ).classList.add( 'is-active' );
    document.querySelector( '.nav-menu' ).classList.add( 'nav-menu-active' );
    document.querySelector( '.nav-empty' ).classList.add( 'nav-empty-active' );
    menu_state = menu_show;
}


function hideMenu() {
    console.log( 'hideMenu' );
    document.querySelector( '.hamburger' ).classList.remove( 'is-active' );
    document.querySelector( '.nav-menu' ).classList.remove( 'nav-menu-active' );
    document.querySelector( '.nav-empty' ).classList.remove( 'nav-empty-active' );
    menu_state = menu_hide;
}


// window.onload = function () {
//     showAbout();
// };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0ZXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtZW51X3Zpc2libGUgPSBmYWxzZTtcblxuZnVuY3Rpb24gY2xvc2VNZW51KCkge1xuICAgIGNvbnNvbGUubG9nKCAnY2xvc2VNZW51JyApO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcubWVudS10b2dnbGUtc2hvdy1oaWRlJyApXG4gICAgICAgIC5mb3JFYWNoKCAoIGl0ZW0gKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoICdtZW51LWhpZGUnICk7XG4gICAgICAgIH0gKTtcblxufVxuXG5mdW5jdGlvbiBzaG93TWVudSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBcIi5tZW51LXRvZ2dsZS1zaG93LWhpZGVcIiApXG4gICAgICAgIC5mb3JFYWNoKCAoIGl0ZW0gKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoICdtZW51LWhpZGUnICk7XG4gICAgICAgIH0gKTtcblxufVxuXG5mdW5jdGlvbiBoZWxsb3dvcmxkKCkge1xuICAgIGFsZXJ0KCAnaGVsbG93b3JsZCcgKTtcbn1cblxuZnVuY3Rpb24gY2xpY2tJbXBvcnQoKSB7XG4gICAgY29uc29sZS5sb2coICdjbGlja0ltcG9ydCcgKTtcbiAgICBoaWRlTWVudSgpO1xufVxuXG5mdW5jdGlvbiBjbGlja0V4cG9ydCgpIHtcbiAgICBjb25zb2xlLmxvZyggJ2NsaWNrRXhwb3J0JyApO1xuICAgIGhpZGVNZW51KCk7XG59XG5cbmZ1bmN0aW9uIGNsaWNrU2V0dGluZ3MoKSB7XG4gICAgaGlkZU1lbnUoKTtcbn1cblxuZnVuY3Rpb24gY2xpY2tMb2dpbigpIHtcbiAgICBoaWRlTWVudSgpO1xufVxuXG5mdW5jdGlvbiBjbGlja0xvZ291dCgpIHtcbiAgICBoaWRlTWVudSgpO1xufVxuXG4vLyB0cnVlPXNob3dtZW51LCBmYWxzZT1oaWRlbWVudVxuY29uc3QgbWVudV9zaG93ID0gdHJ1ZTtcbmNvbnN0IG1lbnVfaGlkZSA9IGZhbHNlO1xudmFyIG1lbnVfc3RhdGUgPSBtZW51X2hpZGU7XG5cbmZ1bmN0aW9uIHRvZ2dsZU1lbnVCdXR0b24oKSB7XG4gICAgaWYgKCBtZW51X3N0YXRlID09IG1lbnVfc2hvdyApIHtcbiAgICAgICAgaGlkZU1lbnUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaG93TWVudSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2hvd01lbnUoKSB7XG4gICAgY29uc29sZS5sb2coICdzaG93TWVudScgKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmhhbWJ1cmdlcicgKS5jbGFzc0xpc3QuYWRkKCAnaXMtYWN0aXZlJyApO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcubmF2LW1lbnUnICkuY2xhc3NMaXN0LmFkZCggJ25hdi1tZW51LWFjdGl2ZScgKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLm5hdi1lbXB0eScgKS5jbGFzc0xpc3QuYWRkKCAnbmF2LWVtcHR5LWFjdGl2ZScgKTtcbiAgICBtZW51X3N0YXRlID0gbWVudV9zaG93O1xufVxuXG5cbmZ1bmN0aW9uIGhpZGVNZW51KCkge1xuICAgIGNvbnNvbGUubG9nKCAnaGlkZU1lbnUnICk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5oYW1idXJnZXInICkuY2xhc3NMaXN0LnJlbW92ZSggJ2lzLWFjdGl2ZScgKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLm5hdi1tZW51JyApLmNsYXNzTGlzdC5yZW1vdmUoICduYXYtbWVudS1hY3RpdmUnICk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5uYXYtZW1wdHknICkuY2xhc3NMaXN0LnJlbW92ZSggJ25hdi1lbXB0eS1hY3RpdmUnICk7XG4gICAgbWVudV9zdGF0ZSA9IG1lbnVfaGlkZTtcbn1cblxuXG4vLyB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuLy8gICAgIHNob3dBYm91dCgpO1xuLy8gfTtcbiJdLCJmaWxlIjoidGVzdC5qcyJ9
