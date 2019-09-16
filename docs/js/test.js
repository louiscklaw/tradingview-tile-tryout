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

function clickImport () {
    console.log( 'clickImport' );
    hideMenu();
}

function clickExport () {
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

function showAbout () {
    hideMenu();
    console.log( "show about" );

    document.querySelector( '.dialog-about-container' ).classList.add("show-dialog");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0ZXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtZW51X3Zpc2libGUgPSBmYWxzZTtcblxuZnVuY3Rpb24gY2xvc2VNZW51KCkge1xuICAgIGNvbnNvbGUubG9nKCAnY2xvc2VNZW51JyApO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcubWVudS10b2dnbGUtc2hvdy1oaWRlJyApXG4gICAgICAgIC5mb3JFYWNoKCAoIGl0ZW0gKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoICdtZW51LWhpZGUnICk7XG4gICAgICAgIH0gKTtcblxufVxuXG5mdW5jdGlvbiBzaG93TWVudSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBcIi5tZW51LXRvZ2dsZS1zaG93LWhpZGVcIiApXG4gICAgICAgIC5mb3JFYWNoKCAoIGl0ZW0gKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoICdtZW51LWhpZGUnICk7XG4gICAgICAgIH0gKTtcblxufVxuXG5mdW5jdGlvbiBoZWxsb3dvcmxkKCkge1xuICAgIGFsZXJ0KCAnaGVsbG93b3JsZCcgKTtcbn1cblxuZnVuY3Rpb24gY2xpY2tJbXBvcnQgKCkge1xuICAgIGNvbnNvbGUubG9nKCAnY2xpY2tJbXBvcnQnICk7XG4gICAgaGlkZU1lbnUoKTtcbn1cblxuZnVuY3Rpb24gY2xpY2tFeHBvcnQgKCkge1xuICAgIGNvbnNvbGUubG9nKCAnY2xpY2tFeHBvcnQnICk7XG4gICAgaGlkZU1lbnUoKTtcbn1cblxuZnVuY3Rpb24gY2xpY2tTZXR0aW5ncygpIHtcbiAgICBoaWRlTWVudSgpO1xufVxuXG5mdW5jdGlvbiBjbGlja0xvZ2luKCkge1xuICAgIGhpZGVNZW51KCk7XG59XG5cbmZ1bmN0aW9uIGNsaWNrTG9nb3V0KCkge1xuICAgIGhpZGVNZW51KCk7XG59XG5cbmZ1bmN0aW9uIHNob3dBYm91dCAoKSB7XG4gICAgaGlkZU1lbnUoKTtcbiAgICBjb25zb2xlLmxvZyggXCJzaG93IGFib3V0XCIgKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuZGlhbG9nLWFib3V0LWNvbnRhaW5lcicgKS5jbGFzc0xpc3QuYWRkKFwic2hvdy1kaWFsb2dcIik7XG5cbn1cblxuLy8gdHJ1ZT1zaG93bWVudSwgZmFsc2U9aGlkZW1lbnVcbmNvbnN0IG1lbnVfc2hvdyA9IHRydWU7XG5jb25zdCBtZW51X2hpZGUgPSBmYWxzZTtcbnZhciBtZW51X3N0YXRlID0gbWVudV9oaWRlO1xuXG5mdW5jdGlvbiB0b2dnbGVNZW51QnV0dG9uKCkge1xuICAgIGlmICggbWVudV9zdGF0ZSA9PSBtZW51X3Nob3cgKSB7XG4gICAgICAgIGhpZGVNZW51KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2hvd01lbnUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNob3dNZW51KCkge1xuICAgIGNvbnNvbGUubG9nKCAnc2hvd01lbnUnICk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5oYW1idXJnZXInICkuY2xhc3NMaXN0LmFkZCggJ2lzLWFjdGl2ZScgKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLm5hdi1tZW51JyApLmNsYXNzTGlzdC5hZGQoICduYXYtbWVudS1hY3RpdmUnICk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5uYXYtZW1wdHknICkuY2xhc3NMaXN0LmFkZCggJ25hdi1lbXB0eS1hY3RpdmUnICk7XG4gICAgbWVudV9zdGF0ZSA9IG1lbnVfc2hvdztcbn1cblxuXG5mdW5jdGlvbiBoaWRlTWVudSgpIHtcbiAgICBjb25zb2xlLmxvZyggJ2hpZGVNZW51JyApO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuaGFtYnVyZ2VyJyApLmNsYXNzTGlzdC5yZW1vdmUoICdpcy1hY3RpdmUnICk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5uYXYtbWVudScgKS5jbGFzc0xpc3QucmVtb3ZlKCAnbmF2LW1lbnUtYWN0aXZlJyApO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcubmF2LWVtcHR5JyApLmNsYXNzTGlzdC5yZW1vdmUoICduYXYtZW1wdHktYWN0aXZlJyApO1xuICAgIG1lbnVfc3RhdGUgPSBtZW51X2hpZGU7XG59XG4iXSwiZmlsZSI6InRlc3QuanMifQ==
