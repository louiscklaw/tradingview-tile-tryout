
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
            <a href="https://github.com/louiscklaw/tradingview-tile-tryout" target="_blank">source on GitHub</a><br><br>
            <a href="http://louiscklaw.github.io" target="_blank"> My homepage </a>
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

window.onload = function () {
    showChangeLog();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJkaWFsb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgc3dhbF9hYm91dF9jb25maWcgPSAge1xuICAgIHRpdGxlOiBgPGRpdiBzdHlsZT1cImNvbG9yOiBibGFjaztcIj5BYm91dCBtZTwvZGl2PmAsXG4gICAgdHlwZTogJ2luZm8nLFxuICAgIGh0bWw6IGBcbjxkaXYgY2xhc3M9XCJzd2FsLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJzd2FsLXN1YmplY3RcIj5cbiAgICAgICAgdGhpcyBpcyBhIHBldCBwcm9qZWN0IG9mIGxvdWlzY2tsYXc8YnI+XG4gICAgICAgIGZvciBkZXRhaWxzIHBsZWFzZSByZWZlciB0bzpcbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzd2FsLWNvbnRlbnQ+XG4gICAgICAgIDxkaXYgc3R5bGU9XCIgcGFkZGluZy10b3A6IDMwcHg7IHBhZGRpbmctYm90dG9tOiAzMHB4O1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9sb3Vpc2NrbGF3L3RyYWRpbmd2aWV3LXRpbGUtdHJ5b3V0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+c291cmNlIG9uIEdpdEh1YjwvYT48YnI+PGJyPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9sb3Vpc2NrbGF3LmdpdGh1Yi5pb1wiIHRhcmdldD1cIl9ibGFua1wiPiBNeSBob21lcGFnZSA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+YCxcbiAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXG4gICAgZm9jdXNDb25maXJtOiBmYWxzZSxcbiAgICBjb25maXJtQnV0dG9uVGV4dDogJ0Nsb3NlJyxcbiAgICBjb25maXJtQnV0dG9uQXJpYUxhYmVsOiAnQ2xvc2UgZGlhbG9nJyxcbn07XG5cbnZhciBzd2FsX2NoYW5nZWxvZ19jb25maWcgPSB7XG4gICAgdGl0bGU6IGA8ZGl2IHN0eWxlPVwiY29sb3I6IGJsYWNrO1wiPmNoYW5nZSBsb2c8L2Rpdj5gLFxuICAgIHR5cGU6ICdpbmZvJyxcbiAgICBodG1sOiBgXG48ZGl2IGNsYXNzPVwic3dhbC1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwic3dhbC1zdWJqZWN0XCI+XG4gICAgICAgIGhpc3Rvcnk6PGJyPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInN3YWwtY29udGVudFwiPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+MjAxOS1TZXAtMTc6IHByb2dyYW1taW5nPC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbjwvZGl2PmAsXG4gICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxuICAgIGZvY3VzQ29uZmlybTogZmFsc2UsXG4gICAgY29uZmlybUJ1dHRvblRleHQ6ICdDbG9zZScsXG4gICAgY29uZmlybUJ1dHRvbkFyaWFMYWJlbDogJ0Nsb3NlIGRpYWxvZycsXG59O1xuXG5mdW5jdGlvbiBzaG93U3dhbCAoIGNvbmZpZ19pbiApIHtcbiAgICBoaWRlTWVudSgpO1xuICAgIGNvbnNvbGUubG9nKCAnc2hvd1N3YWwnICk7XG4gICAgU3dhbC5maXJlKCBjb25maWdfaW4gKTtcbn1cblxuZnVuY3Rpb24gc2hvd0Fib3V0KCkge1xuICAgIHNob3dTd2FsKCBzd2FsX2Fib3V0X2NvbmZpZyApO1xufVxuXG5mdW5jdGlvbiBzaG93Q2hhbmdlTG9nKCkge1xuICAgIHNob3dTd2FsKCBzd2FsX2NoYW5nZWxvZ19jb25maWcgKTtcbn1cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzaG93Q2hhbmdlTG9nKCk7XG59XG4iXSwiZmlsZSI6ImRpYWxvZy5qcyJ9
