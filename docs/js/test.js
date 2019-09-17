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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0ZXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtZW51X3Zpc2libGUgPSBmYWxzZTtcblxuZnVuY3Rpb24gY2xvc2VNZW51KCkge1xuICAgIGNvbnNvbGUubG9nKCAnY2xvc2VNZW51JyApO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcubWVudS10b2dnbGUtc2hvdy1oaWRlJyApXG4gICAgICAgIC5mb3JFYWNoKCAoIGl0ZW0gKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoICdtZW51LWhpZGUnICk7XG4gICAgICAgIH0gKTtcblxufVxuXG5mdW5jdGlvbiBzaG93TWVudSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBcIi5tZW51LXRvZ2dsZS1zaG93LWhpZGVcIiApXG4gICAgICAgIC5mb3JFYWNoKCAoIGl0ZW0gKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoICdtZW51LWhpZGUnICk7XG4gICAgICAgIH0gKTtcblxufVxuXG5mdW5jdGlvbiBoZWxsb3dvcmxkKCkge1xuICAgIGFsZXJ0KCAnaGVsbG93b3JsZCcgKTtcbn1cblxuZnVuY3Rpb24gY2xpY2tJbXBvcnQoKSB7XG4gICAgY29uc29sZS5sb2coICdjbGlja0ltcG9ydCcgKTtcbiAgICBoaWRlTWVudSgpO1xufVxuXG5mdW5jdGlvbiBjbGlja0V4cG9ydCgpIHtcbiAgICBjb25zb2xlLmxvZyggJ2NsaWNrRXhwb3J0JyApO1xuICAgIGhpZGVNZW51KCk7XG59XG5cbmZ1bmN0aW9uIGNsaWNrU2V0dGluZ3MoKSB7XG4gICAgaGlkZU1lbnUoKTtcbn1cblxuZnVuY3Rpb24gY2xpY2tMb2dpbigpIHtcbiAgICBoaWRlTWVudSgpO1xufVxuXG5mdW5jdGlvbiBjbGlja0xvZ291dCgpIHtcbiAgICBoaWRlTWVudSgpO1xufVxuXG5mdW5jdGlvbiBzaG93QWJvdXQoKSB7XG4gICAgaGlkZU1lbnUoKTtcbiAgICBjb25zb2xlLmxvZyggXCJzaG93IGFib3V0XCIgKTtcblxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuZGlhbG9nLWFib3V0LWNvbnRhaW5lcicgKS5jbGFzc0xpc3QuYWRkKFwic2hvdy1kaWFsb2dcIik7XG4gICAgU3dhbC5maXJlKCB7XG4gICAgICAgIHRpdGxlOiBgPGRpdiBzdHlsZT1cImNvbG9yOiBibGFjaztcIj5BYm91dCBtZTwvZGl2PmAsXG4gICAgICAgIHR5cGU6ICdpbmZvJyxcbiAgICAgICAgaHRtbDogYFxuICAgIDxkaXYgY2xhc3M9XCJzd2FsLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3dhbC1zdWJqZWN0XCI+XG4gICAgICAgICAgICB0aGlzIGlzIGEgcGV0IHByb2plY3Qgb2YgbG91aXNja2xhdzxicj5cbiAgICAgICAgICAgIGZvciBkZXRhaWxzIHBsZWFzZSByZWZlciB0bzpcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN3YWwtY29udGVudD5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCIgcGFkZGluZy10b3A6IDMwcHg7IHBhZGRpbmctYm90dG9tOiAzMHB4O1wiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbG91aXNja2xhdy90cmFkaW5ndmlldy10aWxlLXRyeW91dFwiIHRhcmdldD1cIl9ibGFua1wiPnNvdXJjZSBvbiBHaXRIdWI8L2E+PGJyPjxicj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL2xvdWlzY2tsYXcuZ2l0aHViLmlvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+IE15IGhvbWVwYWdlIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAgICAgYCxcbiAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxuICAgICAgICBmb2N1c0NvbmZpcm06IGZhbHNlLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ0Nsb3NlJyxcbiAgICAgICAgY29uZmlybUJ1dHRvbkFyaWFMYWJlbDogJ0Nsb3NlIGRpYWxvZycsXG4gICAgfSApXG5cblxuXG59XG5cbi8vIHRydWU9c2hvd21lbnUsIGZhbHNlPWhpZGVtZW51XG5jb25zdCBtZW51X3Nob3cgPSB0cnVlO1xuY29uc3QgbWVudV9oaWRlID0gZmFsc2U7XG52YXIgbWVudV9zdGF0ZSA9IG1lbnVfaGlkZTtcblxuZnVuY3Rpb24gdG9nZ2xlTWVudUJ1dHRvbigpIHtcbiAgICBpZiAoIG1lbnVfc3RhdGUgPT0gbWVudV9zaG93ICkge1xuICAgICAgICBoaWRlTWVudSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dNZW51KCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaG93TWVudSgpIHtcbiAgICBjb25zb2xlLmxvZyggJ3Nob3dNZW51JyApO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuaGFtYnVyZ2VyJyApLmNsYXNzTGlzdC5hZGQoICdpcy1hY3RpdmUnICk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5uYXYtbWVudScgKS5jbGFzc0xpc3QuYWRkKCAnbmF2LW1lbnUtYWN0aXZlJyApO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcubmF2LWVtcHR5JyApLmNsYXNzTGlzdC5hZGQoICduYXYtZW1wdHktYWN0aXZlJyApO1xuICAgIG1lbnVfc3RhdGUgPSBtZW51X3Nob3c7XG59XG5cblxuZnVuY3Rpb24gaGlkZU1lbnUoKSB7XG4gICAgY29uc29sZS5sb2coICdoaWRlTWVudScgKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmhhbWJ1cmdlcicgKS5jbGFzc0xpc3QucmVtb3ZlKCAnaXMtYWN0aXZlJyApO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcubmF2LW1lbnUnICkuY2xhc3NMaXN0LnJlbW92ZSggJ25hdi1tZW51LWFjdGl2ZScgKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLm5hdi1lbXB0eScgKS5jbGFzc0xpc3QucmVtb3ZlKCAnbmF2LWVtcHR5LWFjdGl2ZScgKTtcbiAgICBtZW51X3N0YXRlID0gbWVudV9oaWRlO1xufVxuXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2hvd0Fib3V0KCk7XG59O1xuIl0sImZpbGUiOiJ0ZXN0LmpzIn0=
