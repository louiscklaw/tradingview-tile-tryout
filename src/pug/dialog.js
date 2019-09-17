
var swal_about_config =  {
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
            <a href="https://github.com/louiscklaw/tradingview-tile-tryout" target="_blank"><i class="fas fa-code-branch"></i>source on GitHub</a><br><br>
            <a href="http://louiscklaw.github.io" target="_blank"><i class="fas fa-home"></i>My homepage </a><br><br>
            <a href="https://github.com/louiscklaw/tradingview-tile-tryout/issues" target="_blank"><i class="fas fa-bug"></i>bugs report / feature request</a>
        </div>
    </div>
</div>`,
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: 'Close',
    confirmButtonAriaLabel: 'Close dialog',
};

var swal_changelog_config = {
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
</div>`,
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: 'Close',
    confirmButtonAriaLabel: 'Close dialog',
};

var swal_import_config = {
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
</div>`,
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: 'Close',
    confirmButtonAriaLabel: 'Close dialog',
};

function showSwal ( config_in ) {
    hideMenu();
    console.log( 'showSwal' );
    Swal.fire( config_in );
}

function showAbout() {
    showSwal( swal_about_config );
}

function showChangeLog() {
    showSwal( swal_changelog_config );
}

function showImport () {
    showSwal( swal_import_config );
}

// window.onload = function () {
//     showChangeLog();
// }
