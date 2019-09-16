
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

function showMenu () {
    console.log( 'showMenu' );
    document.querySelector( '.hamburger' ).classList.add( 'is-active' );
    document.querySelector( '.nav-menu' ).classList.add( 'nav-menu-active' );
    document.querySelector( '.nav-empty' ).classList.add( 'nav-empty-active' );
    menu_state = menu_show;
}


function hideMenu () {
    console.log( 'hideMenu' );
    document.querySelector( '.hamburger' ).classList.remove( 'is-active' );
    document.querySelector( '.nav-menu' ).classList.remove( 'nav-menu-active' );
    document.querySelector( '.nav-empty' ).classList.remove( 'nav-empty-active' );
    menu_state = menu_hide;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0ZXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxudmFyIG1lbnVfdmlzaWJsZSA9IGZhbHNlO1xuXG5mdW5jdGlvbiBjbG9zZU1lbnUgKCkge1xuICAgIGNvbnNvbGUubG9nKCAnY2xvc2VNZW51JyApO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcubWVudS10b2dnbGUtc2hvdy1oaWRlJyApXG4gICAgLmZvckVhY2goICggaXRlbSApID0+IHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCAnbWVudS1oaWRlJyApO1xuICAgIH0gKTtcbn1cblxuZnVuY3Rpb24gc2hvd01lbnUgKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoIFwiLm1lbnUtdG9nZ2xlLXNob3ctaGlkZVwiIClcbiAgICAuZm9yRWFjaCggKCBpdGVtICkgPT4ge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoICdtZW51LWhpZGUnICk7XG4gICAgfSApO1xufVxuXG5mdW5jdGlvbiBoZWxsb3dvcmxkICgpIHtcbiAgICBhbGVydCggJ2hlbGxvd29ybGQnICk7XG59XG5cbi8vIHRydWU9c2hvd21lbnUsIGZhbHNlPWhpZGVtZW51XG5jb25zdCBtZW51X3Nob3cgPSB0cnVlO1xuY29uc3QgbWVudV9oaWRlID0gZmFsc2U7XG52YXIgbWVudV9zdGF0ZSA9IG1lbnVfaGlkZTtcblxuZnVuY3Rpb24gdG9nZ2xlTWVudUJ1dHRvbigpIHtcbiAgICBpZiAoIG1lbnVfc3RhdGUgPT0gbWVudV9zaG93ICkge1xuICAgICAgICBoaWRlTWVudSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dNZW51KCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaG93TWVudSAoKSB7XG4gICAgY29uc29sZS5sb2coICdzaG93TWVudScgKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmhhbWJ1cmdlcicgKS5jbGFzc0xpc3QuYWRkKCAnaXMtYWN0aXZlJyApO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcubmF2LW1lbnUnICkuY2xhc3NMaXN0LmFkZCggJ25hdi1tZW51LWFjdGl2ZScgKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLm5hdi1lbXB0eScgKS5jbGFzc0xpc3QuYWRkKCAnbmF2LWVtcHR5LWFjdGl2ZScgKTtcbiAgICBtZW51X3N0YXRlID0gbWVudV9zaG93O1xufVxuXG5cbmZ1bmN0aW9uIGhpZGVNZW51ICgpIHtcbiAgICBjb25zb2xlLmxvZyggJ2hpZGVNZW51JyApO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuaGFtYnVyZ2VyJyApLmNsYXNzTGlzdC5yZW1vdmUoICdpcy1hY3RpdmUnICk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5uYXYtbWVudScgKS5jbGFzc0xpc3QucmVtb3ZlKCAnbmF2LW1lbnUtYWN0aXZlJyApO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcubmF2LWVtcHR5JyApLmNsYXNzTGlzdC5yZW1vdmUoICduYXYtZW1wdHktYWN0aXZlJyApO1xuICAgIG1lbnVfc3RhdGUgPSBtZW51X2hpZGU7XG59XG4iXSwiZmlsZSI6InRlc3QuanMifQ==
