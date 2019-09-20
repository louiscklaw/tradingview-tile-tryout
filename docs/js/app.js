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

async function load_tv () {
    console.log( url );
    await fetch( url )
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
    load_tv().then( res => {
        init_draggable();
    });

}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG52YXIgdXJsID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sb3Vpc2NrbGF3L3RyYWRpbmd2aWV3LXRpbGUtdHJ5b3V0L21hc3Rlci9kb2NzL3NldHRpbmdzLmpzb24nO1xuXG52YXIgdXJsID0gJ3NldHRpbmdzLmpzb24nO1xuXG52YXIgc3RvY2tfbGlzdCA9IFtdO1xudmFyIHN0b2NrX3R2aWQgPSB7fTtcblxudmFyIHF1ZXVlX3RvX3JlbmRlcl9zY3JpcHQgPSBbXTtcblxudmFyIHN0b2NrX2NlbGxfdGFibGUgPSB7fTtcblxudmFyIGNlbGxfdGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwidHZfZ3JhcGhcIj5cbiAgICA8ZGl2IGlkPVwiJHR2X2lkJF9jZWxsXCIgY2xhc3M9XCJlbGVtZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXN0X2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmtfY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RvY2tfbGlua1wiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ3d3cuZ29vZ2xlLmNvbVwiPiRzdG9ja19uYW1lJDwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwid3d3Lmdvb2dsZS5jb21cIj5nb29nbGU8L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cInd3dy55YWhvby5jb21cIj55YWhvbzwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwid3d3LmFhc3RvY2tzLmNvbVwiPmFhc3RvY2tzPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHJhZGluZ3ZpZXctd2lkZ2V0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIkdHZfaWQkXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYDtcblxudmFyIHRvcGljX2dyb3VwX3RlbXBsYXRlID0gYDxkaXYgY2xhc3M9XCJ0b3BpY19ncm91cFwiPlxuPGRpdiBjbGFzcz1cInRvcGljX2NlbGxcIj5cbiAgICAkdG9waWNfbmFtZSRcbjwvZGl2PlxuPGRpdiBjbGFzcz1cInN0b2NrX2dyb3VwXCI+XG4gICAgJHN0b2NrX2xpc3QkXG48L2Rpdj5cbjwvZGl2PlxuYDtcblxuZnVuY3Rpb24gbWFrZWlkKCBsZW5ndGggKSB7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBjaGFyYWN0ZXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcbiAgICB2YXIgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xuICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrICkge1xuICAgICAgICByZXN1bHQgKz0gY2hhcmFjdGVycy5jaGFyQXQoIE1hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzTGVuZ3RoICkgKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG5mdW5jdGlvbiByZW5kZXJfdG9waWNfZ3JvdXAoIHRvcGljX25hbWUsIHN0b2NrX2xpc3RfaHRtbCApIHtcbiAgICByZXR1cm4gdG9waWNfZ3JvdXBfdGVtcGxhdGVcbiAgICAgICAgLnJlcGxhY2UoICckdG9waWNfbmFtZSQnLCB0b3BpY19uYW1lIClcbiAgICAgICAgLnJlcGxhY2UoICckc3RvY2tfbGlzdCQnLCBzdG9ja19saXN0X2h0bWwgKTtcbn1cblxuZnVuY3Rpb24gc3RvY2tfY29kZV9mb3JfbGluayggc3RyX2luICkge1xuICAgIHJldHVybiBzdHJfaW4ucmVwbGFjZSggXCI6XCIsICctJyApO1xufVxuXG5mdW5jdGlvbiBnZW5fdHJhZGluZ3ZpZXdfaHRtbCggY29sb25fc3RvY2tfY29kZSApIHtcbiAgICByZXR1cm4gJzEyMyc7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcl9odG1sKCBjb2xvbl9zdG9ja19jb2RlLCB0dl9pZCApIHtcbiAgICBjb25zb2xlLmxvZyggdHZfaWQgKTtcbiAgICByZXR1cm4gY2VsbF90ZW1wbGF0ZVxuICAgICAgICAucmVwbGFjZSggL1xcJHN0b2NrX25hbWVcXCQvZywgY29sb25fc3RvY2tfY29kZSApXG4gICAgICAgIC5yZXBsYWNlKCAvXFwkaWRcXCQvZywgdHZfaWQgKVxuICAgICAgICAucmVwbGFjZSggL1xcJHR2X2lkXFwkL2csIHR2X2lkICk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcl90dl9zY3JpcHRfb2xkKCBjb2xvbl9zdG9ja19jb2RlLCB0dl9pZCApIHtcbiAgICByZXR1cm4gbmV3IFRyYWRpbmdWaWV3LndpZGdldCgge1xuICAgICAgICBcIndpZHRoXCI6ICcxMDAlJyxcbiAgICAgICAgXCJoZWlnaHRcIjogMjAwLFxuICAgICAgICBcInN5bWJvbFwiOiBjb2xvbl9zdG9ja19jb2RlLFxuICAgICAgICBcImludGVydmFsXCI6IFwiRFwiLFxuICAgICAgICBcInRpbWV6b25lXCI6IFwiQXNpYS9Ib25nX0tvbmdcIixcbiAgICAgICAgXCJ0aGVtZVwiOiBcIkRhcmtcIixcbiAgICAgICAgXCJzdHlsZVwiOiBcIjJcIixcbiAgICAgICAgXCJsb2NhbGVcIjogXCJlblwiLFxuICAgICAgICBcInRvb2xiYXJfYmdcIjogXCIjZjFmM2Y2XCIsXG4gICAgICAgIFwiZW5hYmxlX3B1Ymxpc2hpbmdcIjogZmFsc2UsXG4gICAgICAgIFwiaGlkZV90b3BfdG9vbGJhclwiOiB0cnVlLFxuICAgICAgICBcImhpZGVfbGVnZW5kXCI6IHRydWUsXG4gICAgICAgIFwic2F2ZV9pbWFnZVwiOiB0cnVlLFxuICAgICAgICBcImNvbnRhaW5lcl9pZFwiOiB0dl9pZFxuICAgIH0gKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyX3R2X3NjcmlwdCggY29sb25fc3RvY2tfY29kZSwgdHZfaWQgKSB7XG4gICAgcmV0dXJuIG5ldyBUcmFkaW5nVmlldy53aWRnZXQoIHtcbiAgICAgICAgXCJ3aWR0aFwiOiAnMTAwJScsXG4gICAgICAgIFwiaGVpZ2h0XCI6IDIwMCxcbiAgICAgICAgXCJzeW1ib2xcIjogY29sb25fc3RvY2tfY29kZSxcbiAgICAgICAgXCJpbnRlcnZhbFwiOiBcIkRcIixcbiAgICAgICAgXCJ0aW1lem9uZVwiOiBcIkFzaWEvSG9uZ19Lb25nXCIsXG4gICAgICAgIFwidGhlbWVcIjogXCJEYXJrXCIsXG4gICAgICAgIFwic3R5bGVcIjogXCIyXCIsXG4gICAgICAgIFwibG9jYWxlXCI6IFwiZW5cIixcbiAgICAgICAgXCJ0b29sYmFyX2JnXCI6IFwiI2YxZjNmNlwiLFxuICAgICAgICBcImVuYWJsZV9wdWJsaXNoaW5nXCI6IGZhbHNlLFxuICAgICAgICBcImhpZGVfdG9wX3Rvb2xiYXJcIjogdHJ1ZSxcbiAgICAgICAgXCJoaWRlX2xlZ2VuZFwiOiB0cnVlLFxuICAgICAgICBcInNhdmVfaW1hZ2VcIjogdHJ1ZSxcbiAgICAgICAgXCJjb250YWluZXJfaWRcIjogdHZfaWRcbiAgICB9ICk7XG59XG5cbmZ1bmN0aW9uIGdlbl90YWJsZSggc3RvY2tfbGlzdCApIHtcbiAgICBjb25zb2xlLmxvZyggJ2NhbGxpbmcgZ2VuX3RhYmxlJyApO1xuICAgIHJldHVybiBzdG9ja19saXN0Lm1hcCggeCA9PiB7XG4gICAgICAgIHJldHVybiByZW5kZXJfaHRtbCggeCwgc3RvY2tfdHZpZFsgeCBdIClcbiAgICB9ICk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcl90YWJsZSggc3RvY2tfbGlzdCApIHtcbiAgICBjb25zb2xlLmxvZyggXCJjYWxsaW5nIHJlbmRlcl90YWJsZVwiICk7XG4gICAgcmV0dXJuIGdlbl90YWJsZSggc3RvY2tfbGlzdCApLmpvaW4oICcnICk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcl9zdG9ja190YWJsZV9odG1sKCBzdG9ja19saXN0ICkge1xuICAgIGNvbnNvbGUubG9nKCAnY2FsbGluZyByZW5kZXJfc3RvY2tfdGFibGVfaHRtbCcgKTtcbiAgICByZXR1cm4gcmVuZGVyX3RhYmxlKCBzdG9ja19saXN0ICk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0X3JlbmRlcl90YWJsZSggc3RvY2tfbGlzdCApIHtcblxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcjc3RvY2tfdGFibGUnICkuaW5uZXJIVE1MID1cbiAgICBzdG9ja19saXN0LmZvckVhY2goIHggPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyggeCApO1xuICAgICAgICByZW5kZXJfdHZfc2NyaXB0X29sZCggeCwgc3RvY2tfdHZpZFsgeCBdICk7XG4gICAgfSApO1xuXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRfdHYgKCkge1xuICAgIGNvbnNvbGUubG9nKCB1cmwgKTtcbiAgICBhd2FpdCBmZXRjaCggdXJsIClcbiAgICAgICAgLnRoZW4oIHJlcyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSApXG4gICAgICAgIC50aGVuKCByZXNfanNvbiA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyggcmVzX2pzb24gKTtcblxuICAgICAgICAgICAgdG9waWNfaHRtbCA9ICcnO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyggcmVzX2pzb24gKS5mb3JFYWNoKCB0b3BpY19uYW1lID0+IHtcbiAgICAgICAgICAgICAgICAvLyBmb3IgdG9waWNfbmFtZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCB0b3BpY19uYW1lICk7XG5cbiAgICAgICAgICAgICAgICBzdG9ja19saXN0X2h0bWwgPSAnJztcbiAgICAgICAgICAgICAgICAvLyBnZW4gaHRtbCBpbnNpZGVcbiAgICAgICAgICAgICAgICByZXNfanNvblt0b3BpY19uYW1lXS5mb3JFYWNoKCBzdG9ja19jb2RlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coIHN0b2NrX2NvZGUgKTtcbiAgICAgICAgICAgICAgICAgICAgc3RvY2tfdHZpZFtzdG9ja19jb2RlXSA9ICd0dl8nICsgbWFrZWlkKCAxMCApO1xuXG4gICAgICAgICAgICAgICAgICAgIHN0b2NrX2xpc3RfaHRtbCA9IHN0b2NrX2xpc3RfaHRtbCArIHJlbmRlcl9odG1sKCBzdG9ja19jb2RlLCBzdG9ja190dmlkW3N0b2NrX2NvZGVdICk7XG5cbiAgICAgICAgICAgICAgICAgICAgcXVldWVfdG9fcmVuZGVyX3NjcmlwdC5wdXNoKCBbIHN0b2NrX2NvZGUsIHN0b2NrX3R2aWRbIHN0b2NrX2NvZGUgXSBdICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0b3BpY19odG1sID0gdG9waWNfaHRtbCArIHJlbmRlcl90b3BpY19ncm91cCggdG9waWNfbmFtZSwgc3RvY2tfbGlzdF9odG1sICk7XG5cbiAgICAgICAgICAgICAgICAvLyBqb2luIGh0bWwgaW5zaWRlXG4gICAgICAgICAgICAgICAgLy8gZW5jYXBlIGJ5IHRvcGljIG5hbWVcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuYXBwJyApLmlubmVySFRNTCA9IHRvcGljX2h0bWw7XG5cbiAgICAgICAgICAgIHF1ZXVlX3RvX3JlbmRlcl9zY3JpcHQuZm9yRWFjaCggeCA9PiB7XG4gICAgICAgICAgICAgICAgcmVuZGVyX3R2X3NjcmlwdCggeFsgMCBdLCB4WyAxIF0gKTtcbiAgICAgICAgICAgIH0gKTtcblxuICAgICAgICB9ICk7XG5cblxufVxuXG5mdW5jdGlvbiBsb2FkX3R2X3RvX2RlbGV0ZSgpIHtcblxuICAgIHZhciB4aHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCB0aGlzLnJlYWR5U3RhdGUgPT0gNCAmJiB0aGlzLnN0YXR1cyA9PSAyMDAgKSB7XG4gICAgICAgICAgICBzdG9ja19saXN0ID0gSlNPTi5wYXJzZSggeGh0dHAucmVzcG9uc2VUZXh0ICk7XG5cbiAgICAgICAgICAgIC8vIGZvciBlYWNoIHRvcGljIGdyb3VwXG4gICAgICAgICAgICB0b3BpY19uYW1lID0gJyc7XG4gICAgICAgICAgICB0b3BpY19odG1sID0gJyc7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKCBzdG9ja19saXN0ICkuZm9yRWFjaCggdG9waWNfbmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coIHRvcGljX25hbWUgKTtcblxuICAgICAgICAgICAgICAgIHN0b2NrX2xpc3RfaHRtbCA9ICcnO1xuXG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyIHR2X2dyYXBoXG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyIGh0bWxcbiAgICAgICAgICAgICAgICBzdG9ja19saXN0WyB0b3BpY19uYW1lIF0uZm9yRWFjaCggc3RvY2tfY29kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGluaXQgdHZpZFxuICAgICAgICAgICAgICAgICAgICBzdG9ja190dmlkWyBzdG9ja19jb2RlIF0gPSAndHZfJyArIG1ha2VpZCggMTAgKTtcblxuICAgICAgICAgICAgICAgICAgICBzdG9ja19saXN0X2h0bWwgPSBzdG9ja19saXN0X2h0bWwgKyByZW5kZXJfaHRtbCggc3RvY2tfY29kZSwgc3RvY2tfdHZpZFsgc3RvY2tfY29kZSBdICk7XG5cblxuICAgICAgICAgICAgICAgICAgICAvLyAvLyByZW5kZXIgamF2YXNjcmlwdFxuICAgICAgICAgICAgICAgICAgICBxdWV1ZV90b19yZW5kZXJfc2NyaXB0LnB1c2goIFsgc3RvY2tfY29kZSwgc3RvY2tfdHZpZFsgc3RvY2tfY29kZSBdIF0gKTtcblxuICAgICAgICAgICAgICAgIH0gKVxuXG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyIHRvcGljX2dyb3VwXG4gICAgICAgICAgICAgICAgLy8gZ2x1ZSB0dl9ncmFwaCBpbnRvIHRvcGljX2dyb3VwXG4gICAgICAgICAgICAgICAgdG9waWNfaHRtbCA9IHRvcGljX2h0bWwgKyByZW5kZXJfdG9waWNfZ3JvdXAoIHRvcGljX25hbWUsIHN0b2NrX2xpc3RfaHRtbCApO1xuXG4gICAgICAgICAgICB9IClcbiAgICAgICAgICAgIC8vIG91dHB1dFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5hcHAnICkuaW5uZXJIVE1MID0gdG9waWNfaHRtbDtcblxuICAgICAgICAgICAgcXVldWVfdG9fcmVuZGVyX3NjcmlwdC5mb3JFYWNoKCB4ID0+IHtcbiAgICAgICAgICAgICAgICByZW5kZXJfdHZfc2NyaXB0KCB4WyAwIF0sIHhbIDEgXSApO1xuICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgLy8gc3RhcnRfcmVuZGVyX3RhYmxlKCBzdG9ja19saXN0ICk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHhodHRwLm9wZW4oIFwiR0VUXCIsIHVybCwgdHJ1ZSApO1xuICAgIHhodHRwLnNlbmQoKTtcblxufVxuXG5mdW5jdGlvbiBpbml0X2RyYWdnYWJsZSgpIHtcbiAgICBjb25zdCBkcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlLlNvcnRhYmxlKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnN0b2NrX2dyb3VwJyApLCB7XG4gICAgICAgIGRyYWdnYWJsZTogJy50dl9ncmFwaCdcbiAgICB9ICk7XG59XG5cbmZ1bmN0aW9uIGdlbl90dl9ncmFwaCgpIHtcbiAgICB2YXIgdGVzdF9jb250ZW50ID0gYDxkaXYgY2xhc3M9XCJ0b3BpY19ncm91cFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0b3BpY19jZWxsXCI+XG4gICAgICAgIHh4eFxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzdG9ja19ncm91cFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHZfZ3JhcGhcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHJlZDtcIj5cbiAgICAgICAgICAgIDwhLS0gVHJhZGluZ1ZpZXcgV2lkZ2V0IEJFR0lOIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRyYWRpbmd2aWV3LXdpZGdldC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInRyYWRpbmd2aWV3X2RmZjhhXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cmFkaW5ndmlldy13aWRnZXQtY29weXJpZ2h0XCI+PGEgaHJlZj1cImh0dHBzOi8vd3d3LnRyYWRpbmd2aWV3LmNvbS9zeW1ib2xzL05BU0RBUS1HT09HL1wiIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PHNwYW4gY2xhc3M9XCJibHVlLXRleHRcIj5HT09HIENoYXJ0PC9zcGFuPjwvYT4gYnkgVHJhZGluZ1ZpZXc8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8IS0tIFRyYWRpbmdWaWV3IFdpZGdldCBFTkQgLS0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0dl9ncmFwaFwiPjI8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInR2X2dyYXBoXCI+MzwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHZfZ3JhcGhcIj40PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0dl9ncmFwaFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHZfZ3JhcGhcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInR2X2dyYXBoXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0dl9ncmFwaFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHZfZ3JhcGhcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInRvcGljX2dyb3VwXCI+XG4gICAgPGRpdiBjbGFzcz1cInRvcGljX2NlbGxcIj5cbiAgICAgICAgeHh4XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInN0b2NrX2dyb3VwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0dl9ncmFwaFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHZfZ3JhcGhcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInR2X2dyYXBoXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0dl9ncmFwaFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHZfZ3JhcGhcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuYDtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuYXBwJyApLmlubmVySFRNTCA9IHRlc3RfY29udGVudDtcbn1cblxuZnVuY3Rpb24gZ2VuX3R2X3NjcmlwdCgpIHtcblxuICAgIG5ldyBUcmFkaW5nVmlldy53aWRnZXQoIHtcbiAgICAgICAgXCJ3aWR0aFwiOiAyMDAsXG4gICAgICAgIFwiaGVpZ2h0XCI6IDIwMCxcbiAgICAgICAgXCJzeW1ib2xcIjogXCJOQVNEQVE6R09PR1wiLFxuICAgICAgICBcImludGVydmFsXCI6IFwiRFwiLFxuICAgICAgICBcInRpbWV6b25lXCI6IFwiRXRjL1VUQ1wiLFxuICAgICAgICBcInRoZW1lXCI6IFwiTGlnaHRcIixcbiAgICAgICAgXCJzdHlsZVwiOiBcIjFcIixcbiAgICAgICAgXCJsb2NhbGVcIjogXCJlblwiLFxuICAgICAgICBcInRvb2xiYXJfYmdcIjogXCIjZjFmM2Y2XCIsXG4gICAgICAgIFwiZW5hYmxlX3B1Ymxpc2hpbmdcIjogZmFsc2UsXG4gICAgICAgIFwiaGlkZV90b3BfdG9vbGJhclwiOiB0cnVlLFxuICAgICAgICBcImhpZGVfbGVnZW5kXCI6IHRydWUsXG4gICAgICAgIFwic2F2ZV9pbWFnZVwiOiBmYWxzZSxcbiAgICAgICAgXCJjb250YWluZXJfaWRcIjogXCJ0cmFkaW5ndmlld19kZmY4YVwiXG4gICAgfSApO1xufVxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGxvYWRfdHYoKS50aGVuKCByZXMgPT4ge1xuICAgICAgICBpbml0X2RyYWdnYWJsZSgpO1xuICAgIH0pO1xuXG59XG4iXSwiZmlsZSI6ImFwcC5qcyJ9
