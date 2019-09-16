
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

var menu_state = true;

function toggleMenuButton() {
    menu_state = !( menu_state );
    if ( menu_state ) {
        document.querySelector( '.hamburger' ).classList.remove( 'is-active' );
        document.querySelector( '.nav-menu' ).classList.remove( 'nav-menu-active' );
        console.log( 'three' );

    } else {
        document.querySelector( '.hamburger' ).classList.add( 'is-active' );
        console.log( 'close' );
        document.querySelector( '.nav-menu' ).classList.add( 'nav-menu-active' );
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0ZXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxudmFyIG1lbnVfdmlzaWJsZSA9IGZhbHNlO1xuXG5mdW5jdGlvbiBjbG9zZU1lbnUgKCkge1xuICAgIGNvbnNvbGUubG9nKCAnY2xvc2VNZW51JyApO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcubWVudS10b2dnbGUtc2hvdy1oaWRlJyApXG4gICAgLmZvckVhY2goICggaXRlbSApID0+IHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCAnbWVudS1oaWRlJyApO1xuICAgIH0gKTtcbn1cblxuZnVuY3Rpb24gc2hvd01lbnUgKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoIFwiLm1lbnUtdG9nZ2xlLXNob3ctaGlkZVwiIClcbiAgICAuZm9yRWFjaCggKCBpdGVtICkgPT4ge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoICdtZW51LWhpZGUnICk7XG4gICAgfSApO1xufVxuXG5mdW5jdGlvbiBoZWxsb3dvcmxkICgpIHtcbiAgICBhbGVydCggJ2hlbGxvd29ybGQnICk7XG59XG5cbnZhciBtZW51X3N0YXRlID0gdHJ1ZTtcblxuZnVuY3Rpb24gdG9nZ2xlTWVudUJ1dHRvbigpIHtcbiAgICBtZW51X3N0YXRlID0gISggbWVudV9zdGF0ZSApO1xuICAgIGlmICggbWVudV9zdGF0ZSApIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5oYW1idXJnZXInICkuY2xhc3NMaXN0LnJlbW92ZSggJ2lzLWFjdGl2ZScgKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5uYXYtbWVudScgKS5jbGFzc0xpc3QucmVtb3ZlKCAnbmF2LW1lbnUtYWN0aXZlJyApO1xuICAgICAgICBjb25zb2xlLmxvZyggJ3RocmVlJyApO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5oYW1idXJnZXInICkuY2xhc3NMaXN0LmFkZCggJ2lzLWFjdGl2ZScgKTtcbiAgICAgICAgY29uc29sZS5sb2coICdjbG9zZScgKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5uYXYtbWVudScgKS5jbGFzc0xpc3QuYWRkKCAnbmF2LW1lbnUtYWN0aXZlJyApO1xuICAgIH1cbn1cbiJdLCJmaWxlIjoidGVzdC5qcyJ9
