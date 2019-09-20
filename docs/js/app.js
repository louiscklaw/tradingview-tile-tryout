let xhr = new XMLHttpRequest();

var url = 'https://raw.githubusercontent.com/louiscklaw/tradingview-tile-tryout/master/docs/settings.json';

var url = 'settings.json';

var stock_list = [];
var stock_tvid = {};

var queue_to_render_script = [];

var stock_cell_table = {};

var cell_template = `
<div class="tv_graph">
    <div id="$tv_id$_cell" class="element">
        <div class="test_container">
            <div class="link_container">
            <div class="stock_link" style="display: none;">
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


function render_topic_group( topic_name, stock_list_html ) {
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

function gen_table( stock_list ) {
    console.log( 'calling gen_table' );
    return stock_list.map( x => {
        return render_html( x, stock_tvid[ x ] )
    } );
}

function render_table( stock_list ) {
    console.log( "calling render_table" );
    return gen_table( stock_list ).join( '' );
}

function render_stock_table_html( stock_list ) {
    console.log( 'calling render_stock_table_html' );
    return render_table( stock_list );
}

function start_render_table( stock_list ) {

    // document.querySelector( '#stock_table' ).innerHTML =
    stock_list.forEach( x => {
        console.log( x );
        render_tv_script_old( x, stock_tvid[ x ] );
    } );

}

function load_tv () {
    console.log( url );
    fetch( url )
        .then( res => {
            return res.json();
        } )
        .then( res_json => {
            console.log( res_json );

            topic_html = '';

            Object.keys( res_json ).forEach( topic_name => {
                // for topic_name
                console.log( topic_name );

                stock_list_html = '';
                // gen html inside
                res_json[topic_name].forEach( stock_code => {
                    console.log( stock_code );
                    stock_tvid[stock_code] = 'tv_' + makeid( 10 );

                    stock_list_html = stock_list_html + render_html( stock_code, stock_tvid[stock_code] );

                    queue_to_render_script.push( [ stock_code, stock_tvid[ stock_code ] ] );
                })
                topic_html = topic_html + render_topic_group( topic_name, stock_list_html );

                // join html inside
                // encape by topic name
            })

            document.querySelector( '.app' ).innerHTML = topic_html;

            queue_to_render_script.forEach( x => {
                render_tv_script( x[ 0 ], x[ 1 ] );
            } );

        } );
}

function load_tv_to_delete() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if ( this.readyState == 4 && this.status == 200 ) {
            stock_list = JSON.parse( xhttp.responseText );

            // for each topic group
            topic_name = '';
            topic_html = '';

            Object.keys( stock_list ).forEach( topic_name => {
                console.log( topic_name );

                stock_list_html = '';

                // render tv_graph
                // render html
                stock_list[ topic_name ].forEach( stock_code => {
                    // init tvid
                    stock_tvid[ stock_code ] = 'tv_' + makeid( 10 );

                    stock_list_html = stock_list_html + render_html( stock_code, stock_tvid[ stock_code ] );


                    // // render javascript
                    queue_to_render_script.push( [ stock_code, stock_tvid[ stock_code ] ] );

                } )

                // render topic_group
                // glue tv_graph into topic_group
                topic_html = topic_html + render_topic_group( topic_name, stock_list_html );

            } )
            // output
            document.querySelector( '.app' ).innerHTML = topic_html;

            queue_to_render_script.forEach( x => {
                render_tv_script( x[ 0 ], x[ 1 ] );
            } );
            // start_render_table( stock_list );
        }
    };
    xhttp.open( "GET", url, true );
    xhttp.send();

}

function init_draggable() {
    const draggable = new Draggable.Sortable( document.querySelector( '.stock_group' ), {
        draggable: '.tv_graph'
    } );
}

function gen_tv_graph() {
    var test_content = `<div class="topic_group">
    <div class="topic_cell">
        xxx
    </div>
    <div class="stock_group">
        <div class="tv_graph" style="background-color: red;">
            <!-- TradingView Widget BEGIN -->
            <div class="tradingview-widget-container">
              <div id="tradingview_dff8a"></div>
              <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/NASDAQ-GOOG/" rel="noopener" target="_blank"><span class="blue-text">GOOG Chart</span></a> by TradingView</div>

            </div>
            <!-- TradingView Widget END --></div>
        <div class="tv_graph">2</div>
        <div class="tv_graph">3</div>
        <div class="tv_graph">4</div>
        <div class="tv_graph"></div>
        <div class="tv_graph"></div>
        <div class="tv_graph"></div>
        <div class="tv_graph"></div>
        <div class="tv_graph"></div>
    </div>
</div>
<div class="topic_group">
    <div class="topic_cell">
        xxx
    </div>
    <div class="stock_group">
        <div class="tv_graph"></div>
        <div class="tv_graph"></div>
        <div class="tv_graph"></div>
        <div class="tv_graph"></div>
        <div class="tv_graph"></div>
    </div>
</div>
`;

    document.querySelector( '.app' ).innerHTML = test_content;
}

function gen_tv_script() {

    new TradingView.widget( {
        "width": 200,
        "height": 200,
        "symbol": "NASDAQ:GOOG",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "Light",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "hide_top_toolbar": true,
        "hide_legend": true,
        "save_image": false,
        "container_id": "tradingview_dff8a"
    } );
}

window.onload = function () {
    load_tv();
    // gen_tv_graph();
    // gen_tv_script();

    // init_draggable();

}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG52YXIgdXJsID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sb3Vpc2NrbGF3L3RyYWRpbmd2aWV3LXRpbGUtdHJ5b3V0L21hc3Rlci9kb2NzL3NldHRpbmdzLmpzb24nO1xuXG52YXIgdXJsID0gJ3NldHRpbmdzLmpzb24nO1xuXG52YXIgc3RvY2tfbGlzdCA9IFtdO1xudmFyIHN0b2NrX3R2aWQgPSB7fTtcblxudmFyIHF1ZXVlX3RvX3JlbmRlcl9zY3JpcHQgPSBbXTtcblxudmFyIHN0b2NrX2NlbGxfdGFibGUgPSB7fTtcblxudmFyIGNlbGxfdGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwidHZfZ3JhcGhcIj5cbiAgICA8ZGl2IGlkPVwiJHR2X2lkJF9jZWxsXCIgY2xhc3M9XCJlbGVtZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXN0X2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmtfY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RvY2tfbGlua1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwid3d3Lmdvb2dsZS5jb21cIj4kc3RvY2tfbmFtZSQ8L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cInd3dy5nb29nbGUuY29tXCI+Z29vZ2xlPC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ3d3cueWFob28uY29tXCI+eWFob288L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cInd3dy5hYXN0b2Nrcy5jb21cIj5hYXN0b2NrczwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRyYWRpbmd2aWV3LXdpZGdldC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiJHR2X2lkJFwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbmA7XG5cbnZhciB0b3BpY19ncm91cF90ZW1wbGF0ZSA9IGA8ZGl2IGNsYXNzPVwidG9waWNfZ3JvdXBcIj5cbjxkaXYgY2xhc3M9XCJ0b3BpY19jZWxsXCI+XG4gICAgJHRvcGljX25hbWUkXG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJzdG9ja19ncm91cFwiPlxuICAgICRzdG9ja19saXN0JFxuPC9kaXY+XG48L2Rpdj5cbmA7XG5cbmZ1bmN0aW9uIG1ha2VpZCggbGVuZ3RoICkge1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgY2hhcmFjdGVycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XG4gICAgdmFyIGNoYXJhY3RlcnNMZW5ndGggPSBjaGFyYWN0ZXJzLmxlbmd0aDtcbiAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyApIHtcbiAgICAgICAgcmVzdWx0ICs9IGNoYXJhY3RlcnMuY2hhckF0KCBNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVyc0xlbmd0aCApICk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuZnVuY3Rpb24gcmVuZGVyX3RvcGljX2dyb3VwKCB0b3BpY19uYW1lLCBzdG9ja19saXN0X2h0bWwgKSB7XG4gICAgcmV0dXJuIHRvcGljX2dyb3VwX3RlbXBsYXRlXG4gICAgICAgIC5yZXBsYWNlKCAnJHRvcGljX25hbWUkJywgdG9waWNfbmFtZSApXG4gICAgICAgIC5yZXBsYWNlKCAnJHN0b2NrX2xpc3QkJywgc3RvY2tfbGlzdF9odG1sICk7XG59XG5cbmZ1bmN0aW9uIHN0b2NrX2NvZGVfZm9yX2xpbmsoIHN0cl9pbiApIHtcbiAgICByZXR1cm4gc3RyX2luLnJlcGxhY2UoIFwiOlwiLCAnLScgKTtcbn1cblxuZnVuY3Rpb24gZ2VuX3RyYWRpbmd2aWV3X2h0bWwoIGNvbG9uX3N0b2NrX2NvZGUgKSB7XG4gICAgcmV0dXJuICcxMjMnO1xufVxuXG5mdW5jdGlvbiByZW5kZXJfaHRtbCggY29sb25fc3RvY2tfY29kZSwgdHZfaWQgKSB7XG4gICAgY29uc29sZS5sb2coIHR2X2lkICk7XG4gICAgcmV0dXJuIGNlbGxfdGVtcGxhdGVcbiAgICAgICAgLnJlcGxhY2UoIC9cXCRzdG9ja19uYW1lXFwkL2csIGNvbG9uX3N0b2NrX2NvZGUgKVxuICAgICAgICAucmVwbGFjZSggL1xcJGlkXFwkL2csIHR2X2lkIClcbiAgICAgICAgLnJlcGxhY2UoIC9cXCR0dl9pZFxcJC9nLCB0dl9pZCApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJfdHZfc2NyaXB0X29sZCggY29sb25fc3RvY2tfY29kZSwgdHZfaWQgKSB7XG4gICAgcmV0dXJuIG5ldyBUcmFkaW5nVmlldy53aWRnZXQoIHtcbiAgICAgICAgXCJ3aWR0aFwiOiAnMTAwJScsXG4gICAgICAgIFwiaGVpZ2h0XCI6IDIwMCxcbiAgICAgICAgXCJzeW1ib2xcIjogY29sb25fc3RvY2tfY29kZSxcbiAgICAgICAgXCJpbnRlcnZhbFwiOiBcIkRcIixcbiAgICAgICAgXCJ0aW1lem9uZVwiOiBcIkFzaWEvSG9uZ19Lb25nXCIsXG4gICAgICAgIFwidGhlbWVcIjogXCJEYXJrXCIsXG4gICAgICAgIFwic3R5bGVcIjogXCIyXCIsXG4gICAgICAgIFwibG9jYWxlXCI6IFwiZW5cIixcbiAgICAgICAgXCJ0b29sYmFyX2JnXCI6IFwiI2YxZjNmNlwiLFxuICAgICAgICBcImVuYWJsZV9wdWJsaXNoaW5nXCI6IGZhbHNlLFxuICAgICAgICBcImhpZGVfdG9wX3Rvb2xiYXJcIjogdHJ1ZSxcbiAgICAgICAgXCJoaWRlX2xlZ2VuZFwiOiB0cnVlLFxuICAgICAgICBcInNhdmVfaW1hZ2VcIjogdHJ1ZSxcbiAgICAgICAgXCJjb250YWluZXJfaWRcIjogdHZfaWRcbiAgICB9ICk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcl90dl9zY3JpcHQoIGNvbG9uX3N0b2NrX2NvZGUsIHR2X2lkICkge1xuICAgIHJldHVybiBuZXcgVHJhZGluZ1ZpZXcud2lkZ2V0KCB7XG4gICAgICAgIFwid2lkdGhcIjogJzEwMCUnLFxuICAgICAgICBcImhlaWdodFwiOiAyMDAsXG4gICAgICAgIFwic3ltYm9sXCI6IGNvbG9uX3N0b2NrX2NvZGUsXG4gICAgICAgIFwiaW50ZXJ2YWxcIjogXCJEXCIsXG4gICAgICAgIFwidGltZXpvbmVcIjogXCJBc2lhL0hvbmdfS29uZ1wiLFxuICAgICAgICBcInRoZW1lXCI6IFwiRGFya1wiLFxuICAgICAgICBcInN0eWxlXCI6IFwiMlwiLFxuICAgICAgICBcImxvY2FsZVwiOiBcImVuXCIsXG4gICAgICAgIFwidG9vbGJhcl9iZ1wiOiBcIiNmMWYzZjZcIixcbiAgICAgICAgXCJlbmFibGVfcHVibGlzaGluZ1wiOiBmYWxzZSxcbiAgICAgICAgXCJoaWRlX3RvcF90b29sYmFyXCI6IHRydWUsXG4gICAgICAgIFwiaGlkZV9sZWdlbmRcIjogdHJ1ZSxcbiAgICAgICAgXCJzYXZlX2ltYWdlXCI6IHRydWUsXG4gICAgICAgIFwiY29udGFpbmVyX2lkXCI6IHR2X2lkXG4gICAgfSApO1xufVxuXG5mdW5jdGlvbiBnZW5fdGFibGUoIHN0b2NrX2xpc3QgKSB7XG4gICAgY29uc29sZS5sb2coICdjYWxsaW5nIGdlbl90YWJsZScgKTtcbiAgICByZXR1cm4gc3RvY2tfbGlzdC5tYXAoIHggPT4ge1xuICAgICAgICByZXR1cm4gcmVuZGVyX2h0bWwoIHgsIHN0b2NrX3R2aWRbIHggXSApXG4gICAgfSApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJfdGFibGUoIHN0b2NrX2xpc3QgKSB7XG4gICAgY29uc29sZS5sb2coIFwiY2FsbGluZyByZW5kZXJfdGFibGVcIiApO1xuICAgIHJldHVybiBnZW5fdGFibGUoIHN0b2NrX2xpc3QgKS5qb2luKCAnJyApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJfc3RvY2tfdGFibGVfaHRtbCggc3RvY2tfbGlzdCApIHtcbiAgICBjb25zb2xlLmxvZyggJ2NhbGxpbmcgcmVuZGVyX3N0b2NrX3RhYmxlX2h0bWwnICk7XG4gICAgcmV0dXJuIHJlbmRlcl90YWJsZSggc3RvY2tfbGlzdCApO1xufVxuXG5mdW5jdGlvbiBzdGFydF9yZW5kZXJfdGFibGUoIHN0b2NrX2xpc3QgKSB7XG5cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnI3N0b2NrX3RhYmxlJyApLmlubmVySFRNTCA9XG4gICAgc3RvY2tfbGlzdC5mb3JFYWNoKCB4ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coIHggKTtcbiAgICAgICAgcmVuZGVyX3R2X3NjcmlwdF9vbGQoIHgsIHN0b2NrX3R2aWRbIHggXSApO1xuICAgIH0gKTtcblxufVxuXG5mdW5jdGlvbiBsb2FkX3R2ICgpIHtcbiAgICBjb25zb2xlLmxvZyggdXJsICk7XG4gICAgZmV0Y2goIHVybCApXG4gICAgICAgIC50aGVuKCByZXMgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgIH0gKVxuICAgICAgICAudGhlbiggcmVzX2pzb24gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coIHJlc19qc29uICk7XG5cbiAgICAgICAgICAgIHRvcGljX2h0bWwgPSAnJztcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMoIHJlc19qc29uICkuZm9yRWFjaCggdG9waWNfbmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gZm9yIHRvcGljX25hbWVcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggdG9waWNfbmFtZSApO1xuXG4gICAgICAgICAgICAgICAgc3RvY2tfbGlzdF9odG1sID0gJyc7XG4gICAgICAgICAgICAgICAgLy8gZ2VuIGh0bWwgaW5zaWRlXG4gICAgICAgICAgICAgICAgcmVzX2pzb25bdG9waWNfbmFtZV0uZm9yRWFjaCggc3RvY2tfY29kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBzdG9ja19jb2RlICk7XG4gICAgICAgICAgICAgICAgICAgIHN0b2NrX3R2aWRbc3RvY2tfY29kZV0gPSAndHZfJyArIG1ha2VpZCggMTAgKTtcblxuICAgICAgICAgICAgICAgICAgICBzdG9ja19saXN0X2h0bWwgPSBzdG9ja19saXN0X2h0bWwgKyByZW5kZXJfaHRtbCggc3RvY2tfY29kZSwgc3RvY2tfdHZpZFtzdG9ja19jb2RlXSApO1xuXG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlX3RvX3JlbmRlcl9zY3JpcHQucHVzaCggWyBzdG9ja19jb2RlLCBzdG9ja190dmlkWyBzdG9ja19jb2RlIF0gXSApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdG9waWNfaHRtbCA9IHRvcGljX2h0bWwgKyByZW5kZXJfdG9waWNfZ3JvdXAoIHRvcGljX25hbWUsIHN0b2NrX2xpc3RfaHRtbCApO1xuXG4gICAgICAgICAgICAgICAgLy8gam9pbiBodG1sIGluc2lkZVxuICAgICAgICAgICAgICAgIC8vIGVuY2FwZSBieSB0b3BpYyBuYW1lXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmFwcCcgKS5pbm5lckhUTUwgPSB0b3BpY19odG1sO1xuXG4gICAgICAgICAgICBxdWV1ZV90b19yZW5kZXJfc2NyaXB0LmZvckVhY2goIHggPT4ge1xuICAgICAgICAgICAgICAgIHJlbmRlcl90dl9zY3JpcHQoIHhbIDAgXSwgeFsgMSBdICk7XG4gICAgICAgICAgICB9ICk7XG5cbiAgICAgICAgfSApO1xufVxuXG5mdW5jdGlvbiBsb2FkX3R2X3RvX2RlbGV0ZSgpIHtcblxuICAgIHZhciB4aHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCB0aGlzLnJlYWR5U3RhdGUgPT0gNCAmJiB0aGlzLnN0YXR1cyA9PSAyMDAgKSB7XG4gICAgICAgICAgICBzdG9ja19saXN0ID0gSlNPTi5wYXJzZSggeGh0dHAucmVzcG9uc2VUZXh0ICk7XG5cbiAgICAgICAgICAgIC8vIGZvciBlYWNoIHRvcGljIGdyb3VwXG4gICAgICAgICAgICB0b3BpY19uYW1lID0gJyc7XG4gICAgICAgICAgICB0b3BpY19odG1sID0gJyc7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKCBzdG9ja19saXN0ICkuZm9yRWFjaCggdG9waWNfbmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coIHRvcGljX25hbWUgKTtcblxuICAgICAgICAgICAgICAgIHN0b2NrX2xpc3RfaHRtbCA9ICcnO1xuXG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyIHR2X2dyYXBoXG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyIGh0bWxcbiAgICAgICAgICAgICAgICBzdG9ja19saXN0WyB0b3BpY19uYW1lIF0uZm9yRWFjaCggc3RvY2tfY29kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGluaXQgdHZpZFxuICAgICAgICAgICAgICAgICAgICBzdG9ja190dmlkWyBzdG9ja19jb2RlIF0gPSAndHZfJyArIG1ha2VpZCggMTAgKTtcblxuICAgICAgICAgICAgICAgICAgICBzdG9ja19saXN0X2h0bWwgPSBzdG9ja19saXN0X2h0bWwgKyByZW5kZXJfaHRtbCggc3RvY2tfY29kZSwgc3RvY2tfdHZpZFsgc3RvY2tfY29kZSBdICk7XG5cblxuICAgICAgICAgICAgICAgICAgICAvLyAvLyByZW5kZXIgamF2YXNjcmlwdFxuICAgICAgICAgICAgICAgICAgICBxdWV1ZV90b19yZW5kZXJfc2NyaXB0LnB1c2goIFsgc3RvY2tfY29kZSwgc3RvY2tfdHZpZFsgc3RvY2tfY29kZSBdIF0gKTtcblxuICAgICAgICAgICAgICAgIH0gKVxuXG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyIHRvcGljX2dyb3VwXG4gICAgICAgICAgICAgICAgLy8gZ2x1ZSB0dl9ncmFwaCBpbnRvIHRvcGljX2dyb3VwXG4gICAgICAgICAgICAgICAgdG9waWNfaHRtbCA9IHRvcGljX2h0bWwgKyByZW5kZXJfdG9waWNfZ3JvdXAoIHRvcGljX25hbWUsIHN0b2NrX2xpc3RfaHRtbCApO1xuXG4gICAgICAgICAgICB9IClcbiAgICAgICAgICAgIC8vIG91dHB1dFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5hcHAnICkuaW5uZXJIVE1MID0gdG9waWNfaHRtbDtcblxuICAgICAgICAgICAgcXVldWVfdG9fcmVuZGVyX3NjcmlwdC5mb3JFYWNoKCB4ID0+IHtcbiAgICAgICAgICAgICAgICByZW5kZXJfdHZfc2NyaXB0KCB4WyAwIF0sIHhbIDEgXSApO1xuICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgLy8gc3RhcnRfcmVuZGVyX3RhYmxlKCBzdG9ja19saXN0ICk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHhodHRwLm9wZW4oIFwiR0VUXCIsIHVybCwgdHJ1ZSApO1xuICAgIHhodHRwLnNlbmQoKTtcblxufVxuXG5mdW5jdGlvbiBpbml0X2RyYWdnYWJsZSgpIHtcbiAgICBjb25zdCBkcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlLlNvcnRhYmxlKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnN0b2NrX2dyb3VwJyApLCB7XG4gICAgICAgIGRyYWdnYWJsZTogJy50dl9ncmFwaCdcbiAgICB9ICk7XG59XG5cbmZ1bmN0aW9uIGdlbl90dl9ncmFwaCgpIHtcbiAgICB2YXIgdGVzdF9jb250ZW50ID0gYDxkaXYgY2xhc3M9XCJ0b3BpY19ncm91cFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0b3BpY19jZWxsXCI+XG4gICAgICAgIHh4eFxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzdG9ja19ncm91cFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHZfZ3JhcGhcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHJlZDtcIj5cbiAgICAgICAgICAgIDwhLS0gVHJhZGluZ1ZpZXcgV2lkZ2V0IEJFR0lOIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRyYWRpbmd2aWV3LXdpZGdldC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInRyYWRpbmd2aWV3X2RmZjhhXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cmFkaW5ndmlldy13aWRnZXQtY29weXJpZ2h0XCI+PGEgaHJlZj1cImh0dHBzOi8vd3d3LnRyYWRpbmd2aWV3LmNvbS9zeW1ib2xzL05BU0RBUS1HT09HL1wiIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PHNwYW4gY2xhc3M9XCJibHVlLXRleHRcIj5HT09HIENoYXJ0PC9zcGFuPjwvYT4gYnkgVHJhZGluZ1ZpZXc8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8IS0tIFRyYWRpbmdWaWV3IFdpZGdldCBFTkQgLS0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0dl9ncmFwaFwiPjI8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInR2X2dyYXBoXCI+MzwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHZfZ3JhcGhcIj40PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0dl9ncmFwaFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHZfZ3JhcGhcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInR2X2dyYXBoXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0dl9ncmFwaFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHZfZ3JhcGhcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInRvcGljX2dyb3VwXCI+XG4gICAgPGRpdiBjbGFzcz1cInRvcGljX2NlbGxcIj5cbiAgICAgICAgeHh4XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInN0b2NrX2dyb3VwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0dl9ncmFwaFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHZfZ3JhcGhcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInR2X2dyYXBoXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0dl9ncmFwaFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHZfZ3JhcGhcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYDtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuYXBwJyApLmlubmVySFRNTCA9IHRlc3RfY29udGVudDtcbn1cblxuZnVuY3Rpb24gZ2VuX3R2X3NjcmlwdCgpIHtcblxuICAgIG5ldyBUcmFkaW5nVmlldy53aWRnZXQoIHtcbiAgICAgICAgXCJ3aWR0aFwiOiAyMDAsXG4gICAgICAgIFwiaGVpZ2h0XCI6IDIwMCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJOQVNEQVE6R09PR1wiLFxuICAgICAgICBcImludGVydmFsXCI6IFwiRFwiLFxuICAgICAgICBcInRpbWV6b25lXCI6IFwiRXRjL1VUQ1wiLFxuICAgICAgICBcInRoZW1lXCI6IFwiTGlnaHRcIixcbiAgICAgICAgXCJzdHlsZVwiOiBcIjFcIixcbiAgICAgICAgXCJsb2NhbGVcIjogXCJlblwiLFxuICAgICAgICBcInRvb2xiYXJfYmdcIjogXCIjZjFmM2Y2XCIsXG4gICAgICAgIFwiZW5hYmxlX3B1Ymxpc2hpbmdcIjogZmFsc2UsXG4gICAgICAgIFwiaGlkZV90b3BfdG9vbGJhclwiOiB0cnVlLFxuICAgICAgICBcImhpZGVfbGVnZW5kXCI6IHRydWUsXG4gICAgICAgIFwic2F2ZV9pbWFnZVwiOiBmYWxzZSxcbiAgICAgICAgXCJjb250YWluZXJfaWRcIjogXCJ0cmFkaW5ndmlld19kZmY4YVwiXG4gICAgfSApO1xufVxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGxvYWRfdHYoKTtcbiAgICAvLyBnZW5fdHZfZ3JhcGgoKTtcbiAgICAvLyBnZW5fdHZfc2NyaXB0KCk7XG5cbiAgICAvLyBpbml0X2RyYWdnYWJsZSgpO1xuXG59XG4iXSwiZmlsZSI6ImFwcC5qcyJ9
