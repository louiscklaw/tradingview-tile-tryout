let xhr = new XMLHttpRequest();

var url = 'https://raw.githubusercontent.com/louiscklaw/tradingview-tile-tryout/master/docs/settings.json';

var stock_list = [];
var stock_tvid = {};


var stock_cell_table = {};

var cell_template = `
<div id="$tv_id$_cell" class="element">
    <div class="test_container">
        <div class="link_container">
        <div class="stock_link">
            <a href="www.google.com">$stock_name$</a>
            <a href="www.google.com">google</a>
            <a href="www.yahoo.com">yahoo</a>
            <a href="www.aastocks.com">aastocks</a>
        </div>
        <div class="tradingview-widget-container">
            <div id="$tv_id$"></div>
        </div>
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
        "width": '100%',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG52YXIgdXJsID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sb3Vpc2NrbGF3L3RyYWRpbmd2aWV3LXRpbGUtdHJ5b3V0L21hc3Rlci9kb2NzL3NldHRpbmdzLmpzb24nO1xuXG52YXIgc3RvY2tfbGlzdCA9IFtdO1xudmFyIHN0b2NrX3R2aWQgPSB7fTtcblxuXG52YXIgc3RvY2tfY2VsbF90YWJsZSA9IHt9O1xuXG52YXIgY2VsbF90ZW1wbGF0ZSA9IGBcbjxkaXYgaWQ9XCIkdHZfaWQkX2NlbGxcIiBjbGFzcz1cImVsZW1lbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGVzdF9jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxpbmtfY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdG9ja19saW5rXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwid3d3Lmdvb2dsZS5jb21cIj4kc3RvY2tfbmFtZSQ8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwid3d3Lmdvb2dsZS5jb21cIj5nb29nbGU8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwid3d3LnlhaG9vLmNvbVwiPnlhaG9vPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cInd3dy5hYXN0b2Nrcy5jb21cIj5hYXN0b2NrczwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0cmFkaW5ndmlldy13aWRnZXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHR2X2lkJFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5gO1xuXG5mdW5jdGlvbiBtYWtlaWQoIGxlbmd0aCApIHtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGNoYXJhY3RlcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODknO1xuICAgIHZhciBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XG4gICAgZm9yICggdmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG4gICAgICAgIHJlc3VsdCArPSBjaGFyYWN0ZXJzLmNoYXJBdCggTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGggKSApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbmZ1bmN0aW9uIHN0b2NrX2NvZGVfZm9yX2xpbmsoIHN0cl9pbiApIHtcbiAgICByZXR1cm4gc3RyX2luLnJlcGxhY2UoIFwiOlwiLCAnLScgKTtcbn1cblxuZnVuY3Rpb24gZ2VuX3RyYWRpbmd2aWV3X2h0bWwoIGNvbG9uX3N0b2NrX2NvZGUgKSB7XG4gICAgcmV0dXJuICcxMjMnO1xufVxuXG5mdW5jdGlvbiByZW5kZXJfaHRtbCggY29sb25fc3RvY2tfY29kZSwgdHZfaWQgKSB7XG4gICAgY29uc29sZS5sb2coIHR2X2lkICk7XG4gICAgcmV0dXJuIGNlbGxfdGVtcGxhdGVcbiAgICAgICAgLnJlcGxhY2UoIC9cXCRzdG9ja19uYW1lXFwkL2csIGNvbG9uX3N0b2NrX2NvZGUgKVxuICAgICAgICAucmVwbGFjZSggL1xcJGlkXFwkL2csIHR2X2lkIClcbiAgICAgICAgLnJlcGxhY2UoIC9cXCR0dl9pZFxcJC9nLCB0dl9pZCApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJfdHZfc2NyaXB0KCBjb2xvbl9zdG9ja19jb2RlLCB0dl9pZCApIHtcbiAgICByZXR1cm4gbmV3IFRyYWRpbmdWaWV3LndpZGdldCgge1xuICAgICAgICBcIndpZHRoXCI6ICcxMDAlJyxcbiAgICAgICAgXCJoZWlnaHRcIjogMjAwLFxuICAgICAgICBcInN5bWJvbFwiOiBjb2xvbl9zdG9ja19jb2RlLFxuICAgICAgICBcImludGVydmFsXCI6IFwiRFwiLFxuICAgICAgICBcInRpbWV6b25lXCI6IFwiQXNpYS9Ib25nX0tvbmdcIixcbiAgICAgICAgXCJ0aGVtZVwiOiBcIkRhcmtcIixcbiAgICAgICAgXCJzdHlsZVwiOiBcIjJcIixcbiAgICAgICAgXCJsb2NhbGVcIjogXCJlblwiLFxuICAgICAgICBcInRvb2xiYXJfYmdcIjogXCIjZjFmM2Y2XCIsXG4gICAgICAgIFwiZW5hYmxlX3B1Ymxpc2hpbmdcIjogZmFsc2UsXG4gICAgICAgIFwiaGlkZV90b3BfdG9vbGJhclwiOiB0cnVlLFxuICAgICAgICBcImhpZGVfbGVnZW5kXCI6IHRydWUsXG4gICAgICAgIFwic2F2ZV9pbWFnZVwiOiB0cnVlLFxuICAgICAgICBcImNvbnRhaW5lcl9pZFwiOiB0dl9pZFxuICAgIH0gKTtcbn1cblxuZnVuY3Rpb24gZ2VuX3RhYmxlKCkge1xuXG4gICAgcmV0dXJuIHN0b2NrX2xpc3QubWFwKCB4ID0+IHtcbiAgICAgICAgcmV0dXJuIHJlbmRlcl9odG1sKCB4LCBzdG9ja190dmlkWyB4IF0gKVxuICAgIH0gKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyX3RhYmxlKCkge1xuICAgIHJldHVybiBnZW5fdGFibGUoKS5qb2luKCAnJyApO1xufVxuXG5mdW5jdGlvbiBzdGFydF9yZW5kZXJfdGFibGUgKHN0b2NrX2xpc3QpIHtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcjc3RvY2tfdGFibGUnICkuaW5uZXJIVE1MID0gcmVuZGVyX3RhYmxlKCk7XG4gICAgc3RvY2tfbGlzdC5mb3JFYWNoKCB4ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coIHggKTtcbiAgICAgICAgcmVuZGVyX3R2X3NjcmlwdCggeCwgc3RvY2tfdHZpZFt4XSApO1xuICAgIH0gKTtcblxufVxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIHhodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIHRoaXMucmVhZHlTdGF0ZSA9PSA0ICYmIHRoaXMuc3RhdHVzID09IDIwMCApIHtcbiAgICAgICAgICAgIHN0b2NrX2xpc3QgPSBKU09OLnBhcnNlKCB4aHR0cC5yZXNwb25zZVRleHQgKTtcblxuICAgICAgICAgICAgc3RvY2tfbGlzdC5mb3JFYWNoKCB4ID0+IHtcbiAgICAgICAgICAgICAgICBzdG9ja190dmlkWyB4IF0gPSAndHZfJyArIG1ha2VpZCggMTAgKTtcbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCAneGhyIGRvbmUnICk7XG5cbiAgICAgICAgICAgIHN0YXJ0X3JlbmRlcl90YWJsZShzdG9ja19saXN0KTtcblxuICAgICAgICB9XG4gICAgfTtcbiAgICB4aHR0cC5vcGVuKCBcIkdFVFwiLCB1cmwsIHRydWUgKTtcbiAgICB4aHR0cC5zZW5kKCk7XG5cbn1cbiJdLCJmaWxlIjoiYXBwLmpzIn0=
