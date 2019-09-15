
var menu_visible = false;

function helloworld () {
    alert( 'helloworld' );
}

function toggle_menu_body () {
    console.log( 'toggle_menu' );

    menu_visible = !( menu_visible );

    if ( menu_visible ) {
        document.querySelectorAll( ".menu-toggle-show-hide" )
            .forEach( ( item ) => {
                item.style.visibility = 'visible';
                item.style.opacity = '1';

            })

    } else {
        document.querySelectorAll( '.menu-toggle-show-hide' )
            .forEach( ( item ) => {
                item.style.visibility = 'hidden';
                item.style.opacity = '0';
            })
    }

}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0ZXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxudmFyIG1lbnVfdmlzaWJsZSA9IGZhbHNlO1xuXG5mdW5jdGlvbiBoZWxsb3dvcmxkICgpIHtcbiAgICBhbGVydCggJ2hlbGxvd29ybGQnICk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZV9tZW51X2JvZHkgKCkge1xuICAgIGNvbnNvbGUubG9nKCAndG9nZ2xlX21lbnUnICk7XG5cbiAgICBtZW51X3Zpc2libGUgPSAhKCBtZW51X3Zpc2libGUgKTtcblxuICAgIGlmICggbWVudV92aXNpYmxlICkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBcIi5tZW51LXRvZ2dsZS1zaG93LWhpZGVcIiApXG4gICAgICAgICAgICAuZm9yRWFjaCggKCBpdGVtICkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG5cbiAgICAgICAgICAgIH0pXG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLm1lbnUtdG9nZ2xlLXNob3ctaGlkZScgKVxuICAgICAgICAgICAgLmZvckVhY2goICggaXRlbSApID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgICAgICB9KVxuICAgIH1cblxufVxuIl0sImZpbGUiOiJ0ZXN0LmpzIn0=
