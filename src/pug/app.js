let xhr = new XMLHttpRequest();

var url = 'https://raw.githubusercontent.com/louiscklaw/tradingview-tile-tryout/master/docs/settings.json';

var url = 'settings.json';

var stock_list = [];
var stock_tvid = {};

var queue_to_render_script = [];

var stock_cell_table = {};

var cell_template = `
<div class="tv_draggable">
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
    </div>
</div>
`;

var topic_group_template = `<div class="topic_group">
<div class="topic_cell">
    $topic_name$
</div>
<div class="stock_group">
    $stock_list$
</div>
</div>
`;

function makeid( length ) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt( Math.floor( Math.random() * charactersLength ) );
    }
    return result;
}


function render_topic_group ( topic_name, stock_list_html ) {
    return topic_group_template
        .replace( '$topic_name$', topic_name )
        .replace( '$stock_list$', stock_list_html );
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

function render_tv_script_old( colon_stock_code, tv_id ) {
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
function gen_table(stock_list) {
    console.log( 'calling gen_table' );
    return stock_list.map( x => {
        return render_html( x, stock_tvid[ x ] )
    } );
}

function render_table ( stock_list ) {
    console.log( "calling render_table" );
    return gen_table(stock_list).join( '' );
}

function render_stock_table_html ( stock_list ) {
    console.log( 'calling render_stock_table_html' );
    return  render_table(stock_list);
}

function start_render_table( stock_list ) {

    // document.querySelector( '#stock_table' ).innerHTML =
    stock_list.forEach( x => {
        console.log( x );
        render_tv_script_old( x, stock_tvid[ x ] );
    } );

}

function load_tv () {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if ( this.readyState == 4 && this.status == 200 ) {
            stock_list = JSON.parse( xhttp.responseText );

            // for each topic group
            topic_name = '';
            topic_html = '';

            Object.keys(stock_list).forEach( topic_name => {
                console.log( topic_name );

                stock_list_html = '';

                // render tv_graph
                // render html
                stock_list[topic_name].forEach( stock_code => {
                    // init tvid
                    stock_tvid[stock_code] = 'tv_' + makeid( 10 );

                    stock_list_html = stock_list_html + render_html(stock_code, stock_tvid[stock_code] );


                    // // render javascript
                    queue_to_render_script.push( [stock_code, stock_tvid[stock_code]] );

                })

                // render topic_group
                // glue tv_graph into topic_group
                topic_html = topic_html+ render_topic_group( topic_name, stock_list_html );

            })
            // output
            document.querySelector( '#stock_table' ).innerHTML = topic_html;

            queue_to_render_script.forEach( x => {
                render_tv_script( x[0], x[1] );
            } );
            // start_render_table( stock_list );
        }
    };
    xhttp.open( "GET", url, true );
    xhttp.send();

}

function init_draggable () {
    const draggable = new Draggable.Sortable( document.querySelector( '.stock_group' ), {
        draggable: '.tv_graph'
    } );
}

window.onload = function () {
    // load_tv();
    init_draggable();
}
