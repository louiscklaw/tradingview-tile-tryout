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

function showAbout() {
    hideMenu();
    console.log( "show about" );

    // document.querySelector( '.dialog-about-container' ).classList.add("show-dialog");
    Swal.fire( {
        title: `<div style="color: black;">About me</div>`,
        type: 'info',
        html: `
    <div class="swal-container">
        <div class="swal-subject">
            this is a pet project of louiscklaw<br>
            for details please refer to:
        </div>

        <div class="swal-content>
            <div style=" padding-top: 30px; padding-bottom: 30px;">
                <a href="https://github.com/louiscklaw/tradingview-tile-tryout" target="_blank">source on GitHub</a><br><br>
                <a href="http://louiscklaw.github.io" target="_blank"> My homepage </a>
            </div>
        </div>
    </div>
        `,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: 'Close',
        confirmButtonAriaLabel: 'Close dialog',
    } )



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


window.onload = function () {
    showAbout();
};
