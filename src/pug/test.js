
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
