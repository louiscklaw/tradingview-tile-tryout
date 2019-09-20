let xhr = new XMLHttpRequest();

var url = 'https://raw.githubusercontent.com/louiscklaw/tradingview-tile-tryout/master/docs/settings.json';

var url = 'settings.json';

var stock_list = [];
var stock_tvid = {};

var queue_to_render_script = [];

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

var topic_group_template = `    <div class="topic_group">
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

function init_draggable () {
    console.log( 'init_draggable' );

    const draggable = new Draggable.Sortable( document.querySelector( '.stock_group' ), {
        draggable: '.element'
    } );

}

window.onload = function () {
    load_tv()
        .then( ()=>{
            init_draggable ();
        })
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG52YXIgdXJsID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sb3Vpc2NrbGF3L3RyYWRpbmd2aWV3LXRpbGUtdHJ5b3V0L21hc3Rlci9kb2NzL3NldHRpbmdzLmpzb24nO1xuXG52YXIgdXJsID0gJ3NldHRpbmdzLmpzb24nO1xuXG52YXIgc3RvY2tfbGlzdCA9IFtdO1xudmFyIHN0b2NrX3R2aWQgPSB7fTtcblxudmFyIHF1ZXVlX3RvX3JlbmRlcl9zY3JpcHQgPSBbXTtcblxudmFyIHN0b2NrX2NlbGxfdGFibGUgPSB7fTtcblxudmFyIGNlbGxfdGVtcGxhdGUgPSBgXG48ZGl2IGlkPVwiJHR2X2lkJF9jZWxsXCIgY2xhc3M9XCJlbGVtZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInRlc3RfY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaW5rX2NvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3RvY2tfbGlua1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cInd3dy5nb29nbGUuY29tXCI+JHN0b2NrX25hbWUkPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cInd3dy5nb29nbGUuY29tXCI+Z29vZ2xlPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cInd3dy55YWhvby5jb21cIj55YWhvbzwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJ3d3cuYWFzdG9ja3MuY29tXCI+YWFzdG9ja3M8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHJhZGluZ3ZpZXctd2lkZ2V0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cIiR0dl9pZCRcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+YDtcblxudmFyIHRvcGljX2dyb3VwX3RlbXBsYXRlID0gYCAgICA8ZGl2IGNsYXNzPVwidG9waWNfZ3JvdXBcIj5cbjxkaXYgY2xhc3M9XCJ0b3BpY19jZWxsXCI+XG4gICAgJHRvcGljX25hbWUkXG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJzdG9ja19ncm91cFwiPlxuICAgICRzdG9ja19saXN0JFxuPC9kaXY+XG48L2Rpdj5cbmA7XG5cbmZ1bmN0aW9uIG1ha2VpZCggbGVuZ3RoICkge1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgY2hhcmFjdGVycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XG4gICAgdmFyIGNoYXJhY3RlcnNMZW5ndGggPSBjaGFyYWN0ZXJzLmxlbmd0aDtcbiAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyApIHtcbiAgICAgICAgcmVzdWx0ICs9IGNoYXJhY3RlcnMuY2hhckF0KCBNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVyc0xlbmd0aCApICk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuZnVuY3Rpb24gcmVuZGVyX3RvcGljX2dyb3VwICggdG9waWNfbmFtZSwgc3RvY2tfbGlzdF9odG1sICkge1xuICAgIHJldHVybiB0b3BpY19ncm91cF90ZW1wbGF0ZVxuICAgICAgICAucmVwbGFjZSggJyR0b3BpY19uYW1lJCcsIHRvcGljX25hbWUgKVxuICAgICAgICAucmVwbGFjZSggJyRzdG9ja19saXN0JCcsIHN0b2NrX2xpc3RfaHRtbCApO1xufVxuXG5mdW5jdGlvbiBzdG9ja19jb2RlX2Zvcl9saW5rKCBzdHJfaW4gKSB7XG4gICAgcmV0dXJuIHN0cl9pbi5yZXBsYWNlKCBcIjpcIiwgJy0nICk7XG59XG5cbmZ1bmN0aW9uIGdlbl90cmFkaW5ndmlld19odG1sKCBjb2xvbl9zdG9ja19jb2RlICkge1xuICAgIHJldHVybiAnMTIzJztcbn1cblxuZnVuY3Rpb24gcmVuZGVyX2h0bWwoIGNvbG9uX3N0b2NrX2NvZGUsIHR2X2lkICkge1xuICAgIGNvbnNvbGUubG9nKCB0dl9pZCApO1xuICAgIHJldHVybiBjZWxsX3RlbXBsYXRlXG4gICAgICAgIC5yZXBsYWNlKCAvXFwkc3RvY2tfbmFtZVxcJC9nLCBjb2xvbl9zdG9ja19jb2RlIClcbiAgICAgICAgLnJlcGxhY2UoIC9cXCRpZFxcJC9nLCB0dl9pZCApXG4gICAgICAgIC5yZXBsYWNlKCAvXFwkdHZfaWRcXCQvZywgdHZfaWQgKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyX3R2X3NjcmlwdF9vbGQoIGNvbG9uX3N0b2NrX2NvZGUsIHR2X2lkICkge1xuICAgIHJldHVybiBuZXcgVHJhZGluZ1ZpZXcud2lkZ2V0KCB7XG4gICAgICAgIFwid2lkdGhcIjogJzEwMCUnLFxuICAgICAgICBcImhlaWdodFwiOiAyMDAsXG4gICAgICAgIFwic3ltYm9sXCI6IGNvbG9uX3N0b2NrX2NvZGUsXG4gICAgICAgIFwiaW50ZXJ2YWxcIjogXCJEXCIsXG4gICAgICAgIFwidGltZXpvbmVcIjogXCJBc2lhL0hvbmdfS29uZ1wiLFxuICAgICAgICBcInRoZW1lXCI6IFwiRGFya1wiLFxuICAgICAgICBcInN0eWxlXCI6IFwiMlwiLFxuICAgICAgICBcImxvY2FsZVwiOiBcImVuXCIsXG4gICAgICAgIFwidG9vbGJhcl9iZ1wiOiBcIiNmMWYzZjZcIixcbiAgICAgICAgXCJlbmFibGVfcHVibGlzaGluZ1wiOiBmYWxzZSxcbiAgICAgICAgXCJoaWRlX3RvcF90b29sYmFyXCI6IHRydWUsXG4gICAgICAgIFwiaGlkZV9sZWdlbmRcIjogdHJ1ZSxcbiAgICAgICAgXCJzYXZlX2ltYWdlXCI6IHRydWUsXG4gICAgICAgIFwiY29udGFpbmVyX2lkXCI6IHR2X2lkXG4gICAgfSApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJfdHZfc2NyaXB0KCBjb2xvbl9zdG9ja19jb2RlLCB0dl9pZCApIHtcbiAgICByZXR1cm4gbmV3IFRyYWRpbmdWaWV3LndpZGdldCgge1xuICAgICAgICBcIndpZHRoXCI6ICcxMDAlJyxcbiAgICAgICAgXCJoZWlnaHRcIjogMjAwLFxuICAgICAgICBcInN5bWJvbFwiOiBjb2xvbl9zdG9ja19jb2RlLFxuICAgICAgICBcImludGVydmFsXCI6IFwiRFwiLFxuICAgICAgICBcInRpbWV6b25lXCI6IFwiQXNpYS9Ib25nX0tvbmdcIixcbiAgICAgICAgXCJ0aGVtZVwiOiBcIkRhcmtcIixcbiAgICAgICAgXCJzdHlsZVwiOiBcIjJcIixcbiAgICAgICAgXCJsb2NhbGVcIjogXCJlblwiLFxuICAgICAgICBcInRvb2xiYXJfYmdcIjogXCIjZjFmM2Y2XCIsXG4gICAgICAgIFwiZW5hYmxlX3B1Ymxpc2hpbmdcIjogZmFsc2UsXG4gICAgICAgIFwiaGlkZV90b3BfdG9vbGJhclwiOiB0cnVlLFxuICAgICAgICBcImhpZGVfbGVnZW5kXCI6IHRydWUsXG4gICAgICAgIFwic2F2ZV9pbWFnZVwiOiB0cnVlLFxuICAgICAgICBcImNvbnRhaW5lcl9pZFwiOiB0dl9pZFxuICAgIH0gKTtcbn1cbmZ1bmN0aW9uIGdlbl90YWJsZShzdG9ja19saXN0KSB7XG4gICAgY29uc29sZS5sb2coICdjYWxsaW5nIGdlbl90YWJsZScgKTtcbiAgICByZXR1cm4gc3RvY2tfbGlzdC5tYXAoIHggPT4ge1xuICAgICAgICByZXR1cm4gcmVuZGVyX2h0bWwoIHgsIHN0b2NrX3R2aWRbIHggXSApXG4gICAgfSApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJfdGFibGUgKCBzdG9ja19saXN0ICkge1xuICAgIGNvbnNvbGUubG9nKCBcImNhbGxpbmcgcmVuZGVyX3RhYmxlXCIgKTtcbiAgICByZXR1cm4gZ2VuX3RhYmxlKHN0b2NrX2xpc3QpLmpvaW4oICcnICk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcl9zdG9ja190YWJsZV9odG1sICggc3RvY2tfbGlzdCApIHtcbiAgICBjb25zb2xlLmxvZyggJ2NhbGxpbmcgcmVuZGVyX3N0b2NrX3RhYmxlX2h0bWwnICk7XG4gICAgcmV0dXJuICByZW5kZXJfdGFibGUoc3RvY2tfbGlzdCk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0X3JlbmRlcl90YWJsZSggc3RvY2tfbGlzdCApIHtcblxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcjc3RvY2tfdGFibGUnICkuaW5uZXJIVE1MID1cbiAgICBzdG9ja19saXN0LmZvckVhY2goIHggPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyggeCApO1xuICAgICAgICByZW5kZXJfdHZfc2NyaXB0X29sZCggeCwgc3RvY2tfdHZpZFsgeCBdICk7XG4gICAgfSApO1xuXG59XG5cblxuYXN5bmMgZnVuY3Rpb24gbG9hZF90diAoKSB7XG4gICAgY29uc29sZS5sb2coIHVybCApO1xuICAgIGF3YWl0IGZldGNoKCB1cmwgKVxuICAgICAgICAudGhlbiggcmVzID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9IClcbiAgICAgICAgLnRoZW4oIHJlc19qc29uID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCByZXNfanNvbiApO1xuXG4gICAgICAgICAgICB0b3BpY19odG1sID0gJyc7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKCByZXNfanNvbiApLmZvckVhY2goIHRvcGljX25hbWUgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGZvciB0b3BpY19uYW1lXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coIHRvcGljX25hbWUgKTtcblxuICAgICAgICAgICAgICAgIHN0b2NrX2xpc3RfaHRtbCA9ICcnO1xuICAgICAgICAgICAgICAgIC8vIGdlbiBodG1sIGluc2lkZVxuICAgICAgICAgICAgICAgIHJlc19qc29uW3RvcGljX25hbWVdLmZvckVhY2goIHN0b2NrX2NvZGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggc3RvY2tfY29kZSApO1xuICAgICAgICAgICAgICAgICAgICBzdG9ja190dmlkW3N0b2NrX2NvZGVdID0gJ3R2XycgKyBtYWtlaWQoIDEwICk7XG5cbiAgICAgICAgICAgICAgICAgICAgc3RvY2tfbGlzdF9odG1sID0gc3RvY2tfbGlzdF9odG1sICsgcmVuZGVyX2h0bWwoIHN0b2NrX2NvZGUsIHN0b2NrX3R2aWRbc3RvY2tfY29kZV0gKTtcblxuICAgICAgICAgICAgICAgICAgICBxdWV1ZV90b19yZW5kZXJfc2NyaXB0LnB1c2goIFsgc3RvY2tfY29kZSwgc3RvY2tfdHZpZFsgc3RvY2tfY29kZSBdIF0gKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRvcGljX2h0bWwgPSB0b3BpY19odG1sICsgcmVuZGVyX3RvcGljX2dyb3VwKCB0b3BpY19uYW1lLCBzdG9ja19saXN0X2h0bWwgKTtcblxuICAgICAgICAgICAgICAgIC8vIGpvaW4gaHRtbCBpbnNpZGVcbiAgICAgICAgICAgICAgICAvLyBlbmNhcGUgYnkgdG9waWMgbmFtZVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5hcHAnICkuaW5uZXJIVE1MID0gdG9waWNfaHRtbDtcblxuICAgICAgICAgICAgcXVldWVfdG9fcmVuZGVyX3NjcmlwdC5mb3JFYWNoKCB4ID0+IHtcbiAgICAgICAgICAgICAgICByZW5kZXJfdHZfc2NyaXB0KCB4WyAwIF0sIHhbIDEgXSApO1xuICAgICAgICAgICAgfSApO1xuXG4gICAgICAgIH0gKTtcblxuXG59XG5cbmZ1bmN0aW9uIGluaXRfZHJhZ2dhYmxlICgpIHtcbiAgICBjb25zb2xlLmxvZyggJ2luaXRfZHJhZ2dhYmxlJyApO1xuXG4gICAgY29uc3QgZHJhZ2dhYmxlID0gbmV3IERyYWdnYWJsZS5Tb3J0YWJsZSggZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5zdG9ja19ncm91cCcgKSwge1xuICAgICAgICBkcmFnZ2FibGU6ICcuZWxlbWVudCdcbiAgICB9ICk7XG5cbn1cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsb2FkX3R2KClcbiAgICAgICAgLnRoZW4oICgpPT57XG4gICAgICAgICAgICBpbml0X2RyYWdnYWJsZSAoKTtcbiAgICAgICAgfSlcbn1cbiJdLCJmaWxlIjoiYXBwLmpzIn0=
