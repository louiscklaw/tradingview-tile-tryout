let xhr = new XMLHttpRequest();

var url = 'https://raw.githubusercontent.com/louiscklaw/tradingview-tile-tryout/master/docs/settings.json';

var stock_list = [];
var stock_tvid = {};


var stock_cell_table = {};

var cell_template = `
<div id="$tv_id$_cell" class="element">
    <div class="test_container">
        <a href="www.google.com">$stock_name$</a>
        <a href="www.google.com">google</a>
        <a href="www.yahoo.com">yahoo</a>
        <a href="www.aastocks.com">aastocks</a>
        <div class="tradingview-widget-container">
            <div id="$tv_id$"></div>
        </div>
    </div>
</div>`;

function makeid( length ) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt( Math.floor( Math.random() * charactersLength ) );
    }
    return result;
}


function stock_code_for_link( str_in ) {
    return str_in.replace( ":", '-' );
}

function gen_tradingview_html( colon_stock_code ) {
    return '123';
}

function render_html( colon_stock_code, tv_id ) {
    console.log( tv_id );
    return cell_template
        .replace( /\$stock_name\$/g, colon_stock_code )
        .replace( /\$id\$/g, tv_id )
        .replace( /\$tv_id\$/g, tv_id );
}

function render_tv_script( colon_stock_code, tv_id ) {
    return new TradingView.widget( {
        "width": 300,
        "height": 200,
        "symbol": colon_stock_code,
        "interval": "D",
        "timezone": "Asia/Hong_Kong",
        "theme": "Dark",
        "style": "2",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "hide_top_toolbar": true,
        "hide_legend": true,
        "save_image": true,
        "container_id": tv_id
    } );
}

function gen_table() {

    return stock_list.map( x => {
        return render_html( x, stock_tvid[ x ] )
    } );
}

function render_table() {
    return gen_table().join( '' );
}

function start_render_table (stock_list) {

    document.querySelector( '#stock_table' ).innerHTML = render_table();
    stock_list.forEach( x => {
        console.log( x );
        render_tv_script( x, stock_tvid[x] );
    } );

}

window.onload = function () {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if ( this.readyState == 4 && this.status == 200 ) {
            stock_list = JSON.parse( xhttp.responseText );

            stock_list.forEach( x => {
                stock_tvid[ x ] = 'tv_' + makeid( 10 );
            } );
            console.log( 'xhr done' );

            start_render_table(stock_list);

        }
    };
    xhttp.open( "GET", url, true );
    xhttp.send();

}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG52YXIgdXJsID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sb3Vpc2NrbGF3L3RyYWRpbmd2aWV3LXRpbGUtdHJ5b3V0L21hc3Rlci9kb2NzL3NldHRpbmdzLmpzb24nO1xuXG52YXIgc3RvY2tfbGlzdCA9IFtdO1xudmFyIHN0b2NrX3R2aWQgPSB7fTtcblxuXG52YXIgc3RvY2tfY2VsbF90YWJsZSA9IHt9O1xuXG52YXIgY2VsbF90ZW1wbGF0ZSA9IGBcbjxkaXYgaWQ9XCIkdHZfaWQkX2NlbGxcIiBjbGFzcz1cImVsZW1lbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGVzdF9jb250YWluZXJcIj5cbiAgICAgICAgPGEgaHJlZj1cInd3dy5nb29nbGUuY29tXCI+JHN0b2NrX25hbWUkPC9hPlxuICAgICAgICA8YSBocmVmPVwid3d3Lmdvb2dsZS5jb21cIj5nb29nbGU8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJ3d3cueWFob28uY29tXCI+eWFob288L2E+XG4gICAgICAgIDxhIGhyZWY9XCJ3d3cuYWFzdG9ja3MuY29tXCI+YWFzdG9ja3M8L2E+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0cmFkaW5ndmlldy13aWRnZXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHR2X2lkJFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PmA7XG5cbmZ1bmN0aW9uIG1ha2VpZCggbGVuZ3RoICkge1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgY2hhcmFjdGVycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XG4gICAgdmFyIGNoYXJhY3RlcnNMZW5ndGggPSBjaGFyYWN0ZXJzLmxlbmd0aDtcbiAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyApIHtcbiAgICAgICAgcmVzdWx0ICs9IGNoYXJhY3RlcnMuY2hhckF0KCBNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVyc0xlbmd0aCApICk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuZnVuY3Rpb24gc3RvY2tfY29kZV9mb3JfbGluayggc3RyX2luICkge1xuICAgIHJldHVybiBzdHJfaW4ucmVwbGFjZSggXCI6XCIsICctJyApO1xufVxuXG5mdW5jdGlvbiBnZW5fdHJhZGluZ3ZpZXdfaHRtbCggY29sb25fc3RvY2tfY29kZSApIHtcbiAgICByZXR1cm4gJzEyMyc7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcl9odG1sKCBjb2xvbl9zdG9ja19jb2RlLCB0dl9pZCApIHtcbiAgICBjb25zb2xlLmxvZyggdHZfaWQgKTtcbiAgICByZXR1cm4gY2VsbF90ZW1wbGF0ZVxuICAgICAgICAucmVwbGFjZSggL1xcJHN0b2NrX25hbWVcXCQvZywgY29sb25fc3RvY2tfY29kZSApXG4gICAgICAgIC5yZXBsYWNlKCAvXFwkaWRcXCQvZywgdHZfaWQgKVxuICAgICAgICAucmVwbGFjZSggL1xcJHR2X2lkXFwkL2csIHR2X2lkICk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcl90dl9zY3JpcHQoIGNvbG9uX3N0b2NrX2NvZGUsIHR2X2lkICkge1xuICAgIHJldHVybiBuZXcgVHJhZGluZ1ZpZXcud2lkZ2V0KCB7XG4gICAgICAgIFwid2lkdGhcIjogMzAwLFxuICAgICAgICBcImhlaWdodFwiOiAyMDAsXG4gICAgICAgIFwic3ltYm9sXCI6IGNvbG9uX3N0b2NrX2NvZGUsXG4gICAgICAgIFwiaW50ZXJ2YWxcIjogXCJEXCIsXG4gICAgICAgIFwidGltZXpvbmVcIjogXCJBc2lhL0hvbmdfS29uZ1wiLFxuICAgICAgICBcInRoZW1lXCI6IFwiRGFya1wiLFxuICAgICAgICBcInN0eWxlXCI6IFwiMlwiLFxuICAgICAgICBcImxvY2FsZVwiOiBcImVuXCIsXG4gICAgICAgIFwidG9vbGJhcl9iZ1wiOiBcIiNmMWYzZjZcIixcbiAgICAgICAgXCJlbmFibGVfcHVibGlzaGluZ1wiOiBmYWxzZSxcbiAgICAgICAgXCJoaWRlX3RvcF90b29sYmFyXCI6IHRydWUsXG4gICAgICAgIFwiaGlkZV9sZWdlbmRcIjogdHJ1ZSxcbiAgICAgICAgXCJzYXZlX2ltYWdlXCI6IHRydWUsXG4gICAgICAgIFwiY29udGFpbmVyX2lkXCI6IHR2X2lkXG4gICAgfSApO1xufVxuXG5mdW5jdGlvbiBnZW5fdGFibGUoKSB7XG5cbiAgICByZXR1cm4gc3RvY2tfbGlzdC5tYXAoIHggPT4ge1xuICAgICAgICByZXR1cm4gcmVuZGVyX2h0bWwoIHgsIHN0b2NrX3R2aWRbIHggXSApXG4gICAgfSApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJfdGFibGUoKSB7XG4gICAgcmV0dXJuIGdlbl90YWJsZSgpLmpvaW4oICcnICk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0X3JlbmRlcl90YWJsZSAoc3RvY2tfbGlzdCkge1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyNzdG9ja190YWJsZScgKS5pbm5lckhUTUwgPSByZW5kZXJfdGFibGUoKTtcbiAgICBzdG9ja19saXN0LmZvckVhY2goIHggPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyggeCApO1xuICAgICAgICByZW5kZXJfdHZfc2NyaXB0KCB4LCBzdG9ja190dmlkW3hdICk7XG4gICAgfSApO1xuXG59XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgeGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICggdGhpcy5yZWFkeVN0YXRlID09IDQgJiYgdGhpcy5zdGF0dXMgPT0gMjAwICkge1xuICAgICAgICAgICAgc3RvY2tfbGlzdCA9IEpTT04ucGFyc2UoIHhodHRwLnJlc3BvbnNlVGV4dCApO1xuXG4gICAgICAgICAgICBzdG9ja19saXN0LmZvckVhY2goIHggPT4ge1xuICAgICAgICAgICAgICAgIHN0b2NrX3R2aWRbIHggXSA9ICd0dl8nICsgbWFrZWlkKCAxMCApO1xuICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coICd4aHIgZG9uZScgKTtcblxuICAgICAgICAgICAgc3RhcnRfcmVuZGVyX3RhYmxlKHN0b2NrX2xpc3QpO1xuXG4gICAgICAgIH1cbiAgICB9O1xuICAgIHhodHRwLm9wZW4oIFwiR0VUXCIsIHVybCwgdHJ1ZSApO1xuICAgIHhodHRwLnNlbmQoKTtcblxufVxuIl0sImZpbGUiOiJhcHAuanMifQ==
