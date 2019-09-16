
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
