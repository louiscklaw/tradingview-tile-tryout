
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJkaWFsb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5mdW5jdGlvbiBzaG93QWJvdXQoKSB7XG4gICAgaGlkZU1lbnUoKTtcbiAgICBjb25zb2xlLmxvZyggXCJzaG93IGFib3V0XCIgKTtcblxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuZGlhbG9nLWFib3V0LWNvbnRhaW5lcicgKS5jbGFzc0xpc3QuYWRkKFwic2hvdy1kaWFsb2dcIik7XG4gICAgU3dhbC5maXJlKCB7XG4gICAgICAgIHRpdGxlOiBgPGRpdiBzdHlsZT1cImNvbG9yOiBibGFjaztcIj5BYm91dCBtZTwvZGl2PmAsXG4gICAgICAgIHR5cGU6ICdpbmZvJyxcbiAgICAgICAgaHRtbDogYFxuICAgIDxkaXYgY2xhc3M9XCJzd2FsLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3dhbC1zdWJqZWN0XCI+XG4gICAgICAgICAgICB0aGlzIGlzIGEgcGV0IHByb2plY3Qgb2YgbG91aXNja2xhdzxicj5cbiAgICAgICAgICAgIGZvciBkZXRhaWxzIHBsZWFzZSByZWZlciB0bzpcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN3YWwtY29udGVudD5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCIgcGFkZGluZy10b3A6IDMwcHg7IHBhZGRpbmctYm90dG9tOiAzMHB4O1wiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbG91aXNja2xhdy90cmFkaW5ndmlldy10aWxlLXRyeW91dFwiIHRhcmdldD1cIl9ibGFua1wiPnNvdXJjZSBvbiBHaXRIdWI8L2E+PGJyPjxicj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL2xvdWlzY2tsYXcuZ2l0aHViLmlvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+IE15IGhvbWVwYWdlIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAgICAgYCxcbiAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxuICAgICAgICBmb2N1c0NvbmZpcm06IGZhbHNlLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ0Nsb3NlJyxcbiAgICAgICAgY29uZmlybUJ1dHRvbkFyaWFMYWJlbDogJ0Nsb3NlIGRpYWxvZycsXG4gICAgfSApXG59XG5cbmZ1bmN0aW9uIHNob3dDaGFuZ2VMb2coKSB7XG4gICAgaGlkZU1lbnUoKTtcbiAgICBjb25zb2xlLmxvZyggXCJzaG93IGNoYW5nZSBsb2dcIiApO1xuXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5kaWFsb2ctYWJvdXQtY29udGFpbmVyJyApLmNsYXNzTGlzdC5hZGQoXCJzaG93LWRpYWxvZ1wiKTtcbiAgICBTd2FsLmZpcmUoIHtcbiAgICAgICAgdGl0bGU6IGA8ZGl2IHN0eWxlPVwiY29sb3I6IGJsYWNrO1wiPmNoYW5nZSBsb2c8L2Rpdj5gLFxuICAgICAgICB0eXBlOiAnaW5mbycsXG4gICAgICAgIGh0bWw6IGBcbiAgICA8ZGl2IGNsYXNzPVwic3dhbC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN3YWwtc3ViamVjdFwiPlxuICAgICAgICAgICAgaGlzdG9yeTo8YnI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzd2FsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+MjAxOS1TZXAtMTc6IHByb2dyYW1taW5nPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICAgICBgLFxuICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXG4gICAgICAgIGZvY3VzQ29uZmlybTogZmFsc2UsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnQ2xvc2UnLFxuICAgICAgICBjb25maXJtQnV0dG9uQXJpYUxhYmVsOiAnQ2xvc2UgZGlhbG9nJyxcbiAgICB9IClcbn1cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzaG93Q2hhbmdlTG9nKCk7XG59XG4iXSwiZmlsZSI6ImRpYWxvZy5qcyJ9
