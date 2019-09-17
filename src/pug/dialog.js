
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

function showChangeLog() {
    hideMenu();
    console.log( "show change log" );

    // document.querySelector( '.dialog-about-container' ).classList.add("show-dialog");
    Swal.fire( {
        title: `<div style="color: black;">change log</div>`,
        type: 'info',
        html: `
    <div class="swal-container">
        <div class="swal-subject">
            history:<br>
        </div>

        <div class="swal-content">
            <ul>
                <li>2019-Sep-17: programming</li>
            </ul>
        </div>
    </div>
        `,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: 'Close',
        confirmButtonAriaLabel: 'Close dialog',
    } )
}

window.onload = function () {
    showChangeLog();
}
