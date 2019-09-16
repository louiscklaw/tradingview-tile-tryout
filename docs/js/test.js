
var menu_visible = false;

function closeMenu () {
    console.log( 'closeMenu' );
    document.querySelectorAll( '.menu-toggle-show-hide' )
    .forEach( ( item ) => {
        item.classList.add( 'menu-hide' );
    } );
}

function showMenu () {
    document.querySelectorAll( ".menu-toggle-show-hide" )
    .forEach( ( item ) => {
        item.classList.remove( 'menu-hide' );
    } );
}

function helloworld () {
    alert( 'helloworld' );
}

function toggle_menu_body () {
    console.log( 'toggle_menu' );

    menu_visible = !( menu_visible );

    if ( menu_visible ) {
        document.querySelectorAll( ".menu-toggle-show-hide" )
            .forEach( ( item ) => {
                item.classList.remove( 'menu-hide' );
            } );

    } else {
        document.querySelectorAll( '.menu-toggle-show-hide' )
            .forEach( ( item ) => {
                item.classList.add( 'menu-hide' );
            } );
    }

}
var menu_state = true;

function toggleMenuButton() {
    menu_state = !( menu_state );
    if ( menu_state ) {
        document.querySelector( '.hamburger' ).classList.remove( 'is-active' );
    } else {
        document.querySelector( '.hamburger' ).classList.add( 'is-active' );
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0ZXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxudmFyIG1lbnVfdmlzaWJsZSA9IGZhbHNlO1xuXG5mdW5jdGlvbiBjbG9zZU1lbnUgKCkge1xuICAgIGNvbnNvbGUubG9nKCAnY2xvc2VNZW51JyApO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcubWVudS10b2dnbGUtc2hvdy1oaWRlJyApXG4gICAgLmZvckVhY2goICggaXRlbSApID0+IHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCAnbWVudS1oaWRlJyApO1xuICAgIH0gKTtcbn1cblxuZnVuY3Rpb24gc2hvd01lbnUgKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoIFwiLm1lbnUtdG9nZ2xlLXNob3ctaGlkZVwiIClcbiAgICAuZm9yRWFjaCggKCBpdGVtICkgPT4ge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoICdtZW51LWhpZGUnICk7XG4gICAgfSApO1xufVxuXG5mdW5jdGlvbiBoZWxsb3dvcmxkICgpIHtcbiAgICBhbGVydCggJ2hlbGxvd29ybGQnICk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZV9tZW51X2JvZHkgKCkge1xuICAgIGNvbnNvbGUubG9nKCAndG9nZ2xlX21lbnUnICk7XG5cbiAgICBtZW51X3Zpc2libGUgPSAhKCBtZW51X3Zpc2libGUgKTtcblxuICAgIGlmICggbWVudV92aXNpYmxlICkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBcIi5tZW51LXRvZ2dsZS1zaG93LWhpZGVcIiApXG4gICAgICAgICAgICAuZm9yRWFjaCggKCBpdGVtICkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSggJ21lbnUtaGlkZScgKTtcbiAgICAgICAgICAgIH0gKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcubWVudS10b2dnbGUtc2hvdy1oaWRlJyApXG4gICAgICAgICAgICAuZm9yRWFjaCggKCBpdGVtICkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCggJ21lbnUtaGlkZScgKTtcbiAgICAgICAgICAgIH0gKTtcbiAgICB9XG5cbn1cbnZhciBtZW51X3N0YXRlID0gdHJ1ZTtcblxuZnVuY3Rpb24gdG9nZ2xlTWVudUJ1dHRvbigpIHtcbiAgICBtZW51X3N0YXRlID0gISggbWVudV9zdGF0ZSApO1xuICAgIGlmICggbWVudV9zdGF0ZSApIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5oYW1idXJnZXInICkuY2xhc3NMaXN0LnJlbW92ZSggJ2lzLWFjdGl2ZScgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmhhbWJ1cmdlcicgKS5jbGFzc0xpc3QuYWRkKCAnaXMtYWN0aXZlJyApO1xuICAgIH1cbn1cbiJdLCJmaWxlIjoidGVzdC5qcyJ9
