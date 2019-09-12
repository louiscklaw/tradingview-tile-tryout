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
