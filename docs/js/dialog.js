
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJkaWFsb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgc3dhbF9hYm91dF9jb25maWcgPSAge1xuICAgIHRpdGxlOiBgPGRpdiBzdHlsZT1cImNvbG9yOiBibGFjaztcIj5BYm91dCBtZTwvZGl2PmAsXG4gICAgdHlwZTogJ2luZm8nLFxuICAgIGh0bWw6IGBcbjxkaXYgY2xhc3M9XCJzd2FsLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJzd2FsLXN1YmplY3RcIj5cbiAgICAgICAgdGhpcyBpcyBhIHBldCBwcm9qZWN0IG9mIGxvdWlzY2tsYXc8YnI+XG4gICAgICAgIGZvciBkZXRhaWxzIHBsZWFzZSByZWZlciB0bzpcbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzd2FsLWNvbnRlbnQ+XG4gICAgICAgIDxkaXYgc3R5bGU9XCIgcGFkZGluZy10b3A6IDMwcHg7IHBhZGRpbmctYm90dG9tOiAzMHB4O1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9sb3Vpc2NrbGF3L3RyYWRpbmd2aWV3LXRpbGUtdHJ5b3V0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3M9XCJmYXMgZmEtY29kZS1icmFuY2hcIj48L2k+c291cmNlIG9uIEdpdEh1YjwvYT48YnI+PGJyPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9sb3Vpc2NrbGF3LmdpdGh1Yi5pb1wiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzPVwiZmFzIGZhLWhvbWVcIj48L2k+TXkgaG9tZXBhZ2UgPC9hPjxicj48YnI+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2xvdWlzY2tsYXcvdHJhZGluZ3ZpZXctdGlsZS10cnlvdXQvaXNzdWVzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3M9XCJmYXMgZmEtYnVnXCI+PC9pPmJ1Z3MgcmVwb3J0IC8gZmVhdHVyZSByZXF1ZXN0PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PmAsXG4gICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxuICAgIGZvY3VzQ29uZmlybTogZmFsc2UsXG4gICAgY29uZmlybUJ1dHRvblRleHQ6ICdDbG9zZScsXG4gICAgY29uZmlybUJ1dHRvbkFyaWFMYWJlbDogJ0Nsb3NlIGRpYWxvZycsXG59O1xuXG52YXIgc3dhbF9jaGFuZ2Vsb2dfY29uZmlnID0ge1xuICAgIHRpdGxlOiBgPGRpdiBzdHlsZT1cImNvbG9yOiBibGFjaztcIj5jaGFuZ2UgbG9nPC9kaXY+YCxcbiAgICB0eXBlOiAnaW5mbycsXG4gICAgaHRtbDogYFxuPGRpdiBjbGFzcz1cInN3YWwtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInN3YWwtc3ViamVjdFwiPlxuICAgICAgICBoaXN0b3J5Ojxicj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzd2FsLWNvbnRlbnRcIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPjIwMTktU2VwLTE3OiBwcm9ncmFtbWluZzwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG48L2Rpdj5gLFxuICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcbiAgICBmb2N1c0NvbmZpcm06IGZhbHNlLFxuICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnQ2xvc2UnLFxuICAgIGNvbmZpcm1CdXR0b25BcmlhTGFiZWw6ICdDbG9zZSBkaWFsb2cnLFxufTtcblxudmFyIHN3YWxfaW1wb3J0X2NvbmZpZyA9IHtcbiAgICB0aXRsZTogYDxkaXYgc3R5bGU9XCJjb2xvcjogYmxhY2s7XCI+Y2hhbmdlIGxvZzwvZGl2PmAsXG4gICAgdHlwZTogJ2luZm8nLFxuICAgIGh0bWw6IGBcbjxkaXYgY2xhc3M9XCJzd2FsLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJzd2FsLXN1YmplY3RcIj5cbiAgICAgICAgaGlzdG9yeTo8YnI+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3dhbC1jb250ZW50XCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT4yMDE5LVNlcC0xNzogcHJvZ3JhbW1pbmc8L2xpPlxuICAgICAgICA8L3VsPlxuICAgIDwvZGl2PlxuPC9kaXY+YCxcbiAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXG4gICAgZm9jdXNDb25maXJtOiBmYWxzZSxcbiAgICBjb25maXJtQnV0dG9uVGV4dDogJ0Nsb3NlJyxcbiAgICBjb25maXJtQnV0dG9uQXJpYUxhYmVsOiAnQ2xvc2UgZGlhbG9nJyxcbn07XG5cbmZ1bmN0aW9uIHNob3dTd2FsICggY29uZmlnX2luICkge1xuICAgIGhpZGVNZW51KCk7XG4gICAgY29uc29sZS5sb2coICdzaG93U3dhbCcgKTtcbiAgICBTd2FsLmZpcmUoIGNvbmZpZ19pbiApO1xufVxuXG5mdW5jdGlvbiBzaG93QWJvdXQoKSB7XG4gICAgc2hvd1N3YWwoIHN3YWxfYWJvdXRfY29uZmlnICk7XG59XG5cbmZ1bmN0aW9uIHNob3dDaGFuZ2VMb2coKSB7XG4gICAgc2hvd1N3YWwoIHN3YWxfY2hhbmdlbG9nX2NvbmZpZyApO1xufVxuXG5mdW5jdGlvbiBzaG93SW1wb3J0ICgpIHtcbiAgICBzaG93U3dhbCggc3dhbF9pbXBvcnRfY29uZmlnICk7XG59XG5cbi8vIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4vLyAgICAgc2hvd0NoYW5nZUxvZygpO1xuLy8gfVxuIl0sImZpbGUiOiJkaWFsb2cuanMifQ==
