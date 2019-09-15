
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
