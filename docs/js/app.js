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
            <a href="www.google.com">$stock_name$</a><br>
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

    document.querySelectorAll( '.stock_group' ).forEach( ele_stock_group => {
        new Draggable.Sortable( ele_stock_group, { draggable: '.element' } );
    })

    // const draggable = new Draggable.Sortable( document.querySelector( '.stock_group' ), {
    //     draggable: '.element'
    // } );

}

window.onload = function () {
    load_tv()
        .then( ()=>{
            init_draggable ();
        })
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG52YXIgdXJsID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sb3Vpc2NrbGF3L3RyYWRpbmd2aWV3LXRpbGUtdHJ5b3V0L21hc3Rlci9kb2NzL3NldHRpbmdzLmpzb24nO1xuXG52YXIgdXJsID0gJ3NldHRpbmdzLmpzb24nO1xuXG52YXIgc3RvY2tfbGlzdCA9IFtdO1xudmFyIHN0b2NrX3R2aWQgPSB7fTtcblxudmFyIHF1ZXVlX3RvX3JlbmRlcl9zY3JpcHQgPSBbXTtcblxudmFyIHN0b2NrX2NlbGxfdGFibGUgPSB7fTtcblxudmFyIGNlbGxfdGVtcGxhdGUgPSBgXG48ZGl2IGlkPVwiJHR2X2lkJF9jZWxsXCIgY2xhc3M9XCJlbGVtZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInRlc3RfY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaW5rX2NvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3RvY2tfbGlua1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cInd3dy5nb29nbGUuY29tXCI+JHN0b2NrX25hbWUkPC9hPjxicj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJ3d3cuZ29vZ2xlLmNvbVwiPmdvb2dsZTwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJ3d3cueWFob28uY29tXCI+eWFob288L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwid3d3LmFhc3RvY2tzLmNvbVwiPmFhc3RvY2tzPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRyYWRpbmd2aWV3LXdpZGdldC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCIkdHZfaWQkXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PmA7XG5cbnZhciB0b3BpY19ncm91cF90ZW1wbGF0ZSA9IGAgICAgPGRpdiBjbGFzcz1cInRvcGljX2dyb3VwXCI+XG48ZGl2IGNsYXNzPVwidG9waWNfY2VsbFwiPlxuICAgICR0b3BpY19uYW1lJFxuPC9kaXY+XG48ZGl2IGNsYXNzPVwic3RvY2tfZ3JvdXBcIj5cbiAgICAkc3RvY2tfbGlzdCRcbjwvZGl2PlxuPC9kaXY+XG5gO1xuXG5mdW5jdGlvbiBtYWtlaWQoIGxlbmd0aCApIHtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGNoYXJhY3RlcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODknO1xuICAgIHZhciBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XG4gICAgZm9yICggdmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG4gICAgICAgIHJlc3VsdCArPSBjaGFyYWN0ZXJzLmNoYXJBdCggTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGggKSApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbmZ1bmN0aW9uIHJlbmRlcl90b3BpY19ncm91cCAoIHRvcGljX25hbWUsIHN0b2NrX2xpc3RfaHRtbCApIHtcbiAgICByZXR1cm4gdG9waWNfZ3JvdXBfdGVtcGxhdGVcbiAgICAgICAgLnJlcGxhY2UoICckdG9waWNfbmFtZSQnLCB0b3BpY19uYW1lIClcbiAgICAgICAgLnJlcGxhY2UoICckc3RvY2tfbGlzdCQnLCBzdG9ja19saXN0X2h0bWwgKTtcbn1cblxuZnVuY3Rpb24gc3RvY2tfY29kZV9mb3JfbGluayggc3RyX2luICkge1xuICAgIHJldHVybiBzdHJfaW4ucmVwbGFjZSggXCI6XCIsICctJyApO1xufVxuXG5mdW5jdGlvbiBnZW5fdHJhZGluZ3ZpZXdfaHRtbCggY29sb25fc3RvY2tfY29kZSApIHtcbiAgICByZXR1cm4gJzEyMyc7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcl9odG1sKCBjb2xvbl9zdG9ja19jb2RlLCB0dl9pZCApIHtcbiAgICBjb25zb2xlLmxvZyggdHZfaWQgKTtcbiAgICByZXR1cm4gY2VsbF90ZW1wbGF0ZVxuICAgICAgICAucmVwbGFjZSggL1xcJHN0b2NrX25hbWVcXCQvZywgY29sb25fc3RvY2tfY29kZSApXG4gICAgICAgIC5yZXBsYWNlKCAvXFwkaWRcXCQvZywgdHZfaWQgKVxuICAgICAgICAucmVwbGFjZSggL1xcJHR2X2lkXFwkL2csIHR2X2lkICk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcl90dl9zY3JpcHRfb2xkKCBjb2xvbl9zdG9ja19jb2RlLCB0dl9pZCApIHtcbiAgICByZXR1cm4gbmV3IFRyYWRpbmdWaWV3LndpZGdldCgge1xuICAgICAgICBcIndpZHRoXCI6ICcxMDAlJyxcbiAgICAgICAgXCJoZWlnaHRcIjogMjAwLFxuICAgICAgICBcInN5bWJvbFwiOiBjb2xvbl9zdG9ja19jb2RlLFxuICAgICAgICBcImludGVydmFsXCI6IFwiRFwiLFxuICAgICAgICBcInRpbWV6b25lXCI6IFwiQXNpYS9Ib25nX0tvbmdcIixcbiAgICAgICAgXCJ0aGVtZVwiOiBcIkRhcmtcIixcbiAgICAgICAgXCJzdHlsZVwiOiBcIjJcIixcbiAgICAgICAgXCJsb2NhbGVcIjogXCJlblwiLFxuICAgICAgICBcInRvb2xiYXJfYmdcIjogXCIjZjFmM2Y2XCIsXG4gICAgICAgIFwiZW5hYmxlX3B1Ymxpc2hpbmdcIjogZmFsc2UsXG4gICAgICAgIFwiaGlkZV90b3BfdG9vbGJhclwiOiB0cnVlLFxuICAgICAgICBcImhpZGVfbGVnZW5kXCI6IHRydWUsXG4gICAgICAgIFwic2F2ZV9pbWFnZVwiOiB0cnVlLFxuICAgICAgICBcImNvbnRhaW5lcl9pZFwiOiB0dl9pZFxuICAgIH0gKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyX3R2X3NjcmlwdCggY29sb25fc3RvY2tfY29kZSwgdHZfaWQgKSB7XG4gICAgcmV0dXJuIG5ldyBUcmFkaW5nVmlldy53aWRnZXQoIHtcbiAgICAgICAgXCJ3aWR0aFwiOiAnMTAwJScsXG4gICAgICAgIFwiaGVpZ2h0XCI6IDIwMCxcbiAgICAgICAgXCJzeW1ib2xcIjogY29sb25fc3RvY2tfY29kZSxcbiAgICAgICAgXCJpbnRlcnZhbFwiOiBcIkRcIixcbiAgICAgICAgXCJ0aW1lem9uZVwiOiBcIkFzaWEvSG9uZ19Lb25nXCIsXG4gICAgICAgIFwidGhlbWVcIjogXCJEYXJrXCIsXG4gICAgICAgIFwic3R5bGVcIjogXCIyXCIsXG4gICAgICAgIFwibG9jYWxlXCI6IFwiZW5cIixcbiAgICAgICAgXCJ0b29sYmFyX2JnXCI6IFwiI2YxZjNmNlwiLFxuICAgICAgICBcImVuYWJsZV9wdWJsaXNoaW5nXCI6IGZhbHNlLFxuICAgICAgICBcImhpZGVfdG9wX3Rvb2xiYXJcIjogdHJ1ZSxcbiAgICAgICAgXCJoaWRlX2xlZ2VuZFwiOiB0cnVlLFxuICAgICAgICBcInNhdmVfaW1hZ2VcIjogdHJ1ZSxcbiAgICAgICAgXCJjb250YWluZXJfaWRcIjogdHZfaWRcbiAgICB9ICk7XG59XG5mdW5jdGlvbiBnZW5fdGFibGUoc3RvY2tfbGlzdCkge1xuICAgIGNvbnNvbGUubG9nKCAnY2FsbGluZyBnZW5fdGFibGUnICk7XG4gICAgcmV0dXJuIHN0b2NrX2xpc3QubWFwKCB4ID0+IHtcbiAgICAgICAgcmV0dXJuIHJlbmRlcl9odG1sKCB4LCBzdG9ja190dmlkWyB4IF0gKVxuICAgIH0gKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyX3RhYmxlICggc3RvY2tfbGlzdCApIHtcbiAgICBjb25zb2xlLmxvZyggXCJjYWxsaW5nIHJlbmRlcl90YWJsZVwiICk7XG4gICAgcmV0dXJuIGdlbl90YWJsZShzdG9ja19saXN0KS5qb2luKCAnJyApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJfc3RvY2tfdGFibGVfaHRtbCAoIHN0b2NrX2xpc3QgKSB7XG4gICAgY29uc29sZS5sb2coICdjYWxsaW5nIHJlbmRlcl9zdG9ja190YWJsZV9odG1sJyApO1xuICAgIHJldHVybiAgcmVuZGVyX3RhYmxlKHN0b2NrX2xpc3QpO1xufVxuXG5mdW5jdGlvbiBzdGFydF9yZW5kZXJfdGFibGUoIHN0b2NrX2xpc3QgKSB7XG5cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnI3N0b2NrX3RhYmxlJyApLmlubmVySFRNTCA9XG4gICAgc3RvY2tfbGlzdC5mb3JFYWNoKCB4ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coIHggKTtcbiAgICAgICAgcmVuZGVyX3R2X3NjcmlwdF9vbGQoIHgsIHN0b2NrX3R2aWRbIHggXSApO1xuICAgIH0gKTtcblxufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRfdHYgKCkge1xuICAgIGNvbnNvbGUubG9nKCB1cmwgKTtcbiAgICBhd2FpdCBmZXRjaCggdXJsIClcbiAgICAgICAgLnRoZW4oIHJlcyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSApXG4gICAgICAgIC50aGVuKCByZXNfanNvbiA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyggcmVzX2pzb24gKTtcblxuICAgICAgICAgICAgdG9waWNfaHRtbCA9ICcnO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyggcmVzX2pzb24gKS5mb3JFYWNoKCB0b3BpY19uYW1lID0+IHtcbiAgICAgICAgICAgICAgICAvLyBmb3IgdG9waWNfbmFtZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCB0b3BpY19uYW1lICk7XG5cbiAgICAgICAgICAgICAgICBzdG9ja19saXN0X2h0bWwgPSAnJztcbiAgICAgICAgICAgICAgICAvLyBnZW4gaHRtbCBpbnNpZGVcbiAgICAgICAgICAgICAgICByZXNfanNvblt0b3BpY19uYW1lXS5mb3JFYWNoKCBzdG9ja19jb2RlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coIHN0b2NrX2NvZGUgKTtcbiAgICAgICAgICAgICAgICAgICAgc3RvY2tfdHZpZFtzdG9ja19jb2RlXSA9ICd0dl8nICsgbWFrZWlkKCAxMCApO1xuXG4gICAgICAgICAgICAgICAgICAgIHN0b2NrX2xpc3RfaHRtbCA9IHN0b2NrX2xpc3RfaHRtbCArIHJlbmRlcl9odG1sKCBzdG9ja19jb2RlLCBzdG9ja190dmlkW3N0b2NrX2NvZGVdICk7XG5cbiAgICAgICAgICAgICAgICAgICAgcXVldWVfdG9fcmVuZGVyX3NjcmlwdC5wdXNoKCBbIHN0b2NrX2NvZGUsIHN0b2NrX3R2aWRbIHN0b2NrX2NvZGUgXSBdICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0b3BpY19odG1sID0gdG9waWNfaHRtbCArIHJlbmRlcl90b3BpY19ncm91cCggdG9waWNfbmFtZSwgc3RvY2tfbGlzdF9odG1sICk7XG5cbiAgICAgICAgICAgICAgICAvLyBqb2luIGh0bWwgaW5zaWRlXG4gICAgICAgICAgICAgICAgLy8gZW5jYXBlIGJ5IHRvcGljIG5hbWVcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuYXBwJyApLmlubmVySFRNTCA9IHRvcGljX2h0bWw7XG5cbiAgICAgICAgICAgIHF1ZXVlX3RvX3JlbmRlcl9zY3JpcHQuZm9yRWFjaCggeCA9PiB7XG4gICAgICAgICAgICAgICAgcmVuZGVyX3R2X3NjcmlwdCggeFsgMCBdLCB4WyAxIF0gKTtcbiAgICAgICAgICAgIH0gKTtcblxuICAgICAgICB9ICk7XG5cblxufVxuXG5mdW5jdGlvbiBpbml0X2RyYWdnYWJsZSAoKSB7XG4gICAgY29uc29sZS5sb2coICdpbml0X2RyYWdnYWJsZScgKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuc3RvY2tfZ3JvdXAnICkuZm9yRWFjaCggZWxlX3N0b2NrX2dyb3VwID0+IHtcbiAgICAgICAgbmV3IERyYWdnYWJsZS5Tb3J0YWJsZSggZWxlX3N0b2NrX2dyb3VwLCB7IGRyYWdnYWJsZTogJy5lbGVtZW50JyB9ICk7XG4gICAgfSlcblxuICAgIC8vIGNvbnN0IGRyYWdnYWJsZSA9IG5ldyBEcmFnZ2FibGUuU29ydGFibGUoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuc3RvY2tfZ3JvdXAnICksIHtcbiAgICAvLyAgICAgZHJhZ2dhYmxlOiAnLmVsZW1lbnQnXG4gICAgLy8gfSApO1xuXG59XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgbG9hZF90digpXG4gICAgICAgIC50aGVuKCAoKT0+e1xuICAgICAgICAgICAgaW5pdF9kcmFnZ2FibGUgKCk7XG4gICAgICAgIH0pXG59XG4iXSwiZmlsZSI6ImFwcC5qcyJ9
