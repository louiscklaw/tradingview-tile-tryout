
var stock_list = await (await fetch(url)).json();

var stock_tvid = {};

stock_list.forEach( x => {
    stock_tvid[x] = 'tv_'+makeid( 10 );
});

var stock_cell_table = {};

var cell_template = `
<div id="$tv_id$_cell" class="element">
    <div class="test_container">
        <div class="link_container">
            <a href="www.google.com" class="stock_link">$stock_name$</a>
            <a href="www.google.com" class="stock_link">google</a>
            <a href="www.yahoo.com" class="stock_link">yahoo</a>
            <a href="www.aastocks.com" class="stock_link">aastocks</a>
            <div class="tradingview-widget-container">
                <div id="$tv_id$"></div>
            </div>
        </div>
    </div>
</div>`;

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }


function stock_code_for_link ( str_in ) {
    return str_in.replace( ":", '-' );
}

function gen_tradingview_html ( colon_stock_code ) {
    return '123';
}

function render_html ( colon_stock_code, tv_id ) {
    console.log( tv_id );
    return cell_template
        .replace( /\$stock_name\$/g, colon_stock_code)
        .replace( /\$id\$/g, tv_id )
        .replace( /\$tv_id\$/g, tv_id );
}

function render_tv_script (colon_stock_code, tv_id) {
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

function gen_table () {

    return stock_list.map( x => {
        return render_html(x, stock_tvid[x] )
    });
}

function render_table () {
    return gen_table().join( '' );
}

window.onload = function () {
    this.document.querySelector( '#stock_table' ).innerHTML = render_table();
    this.stock_list.forEach( x => {
        this.render_tv_script( x, this.stock_tvid[x] );
    } );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgc3RvY2tfbGlzdCA9IGF3YWl0IChhd2FpdCBmZXRjaCh1cmwpKS5qc29uKCk7XG5cbnZhciBzdG9ja190dmlkID0ge307XG5cbnN0b2NrX2xpc3QuZm9yRWFjaCggeCA9PiB7XG4gICAgc3RvY2tfdHZpZFt4XSA9ICd0dl8nK21ha2VpZCggMTAgKTtcbn0pO1xuXG52YXIgc3RvY2tfY2VsbF90YWJsZSA9IHt9O1xuXG52YXIgY2VsbF90ZW1wbGF0ZSA9IGBcbjxkaXYgaWQ9XCIkdHZfaWQkX2NlbGxcIiBjbGFzcz1cImVsZW1lbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGVzdF9jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxpbmtfY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwid3d3Lmdvb2dsZS5jb21cIiBjbGFzcz1cInN0b2NrX2xpbmtcIj4kc3RvY2tfbmFtZSQ8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwid3d3Lmdvb2dsZS5jb21cIiBjbGFzcz1cInN0b2NrX2xpbmtcIj5nb29nbGU8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwid3d3LnlhaG9vLmNvbVwiIGNsYXNzPVwic3RvY2tfbGlua1wiPnlhaG9vPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cInd3dy5hYXN0b2Nrcy5jb21cIiBjbGFzcz1cInN0b2NrX2xpbmtcIj5hYXN0b2NrczwvYT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cmFkaW5ndmlldy13aWRnZXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIiR0dl9pZCRcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PmA7XG5cbmZ1bmN0aW9uIG1ha2VpZChsZW5ndGgpIHtcbiAgICB2YXIgcmVzdWx0ICAgICAgICAgICA9ICcnO1xuICAgIHZhciBjaGFyYWN0ZXJzICAgICAgID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcbiAgICB2YXIgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xuICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrICkge1xuICAgICAgIHJlc3VsdCArPSBjaGFyYWN0ZXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzTGVuZ3RoKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gfVxuXG5cbmZ1bmN0aW9uIHN0b2NrX2NvZGVfZm9yX2xpbmsgKCBzdHJfaW4gKSB7XG4gICAgcmV0dXJuIHN0cl9pbi5yZXBsYWNlKCBcIjpcIiwgJy0nICk7XG59XG5cbmZ1bmN0aW9uIGdlbl90cmFkaW5ndmlld19odG1sICggY29sb25fc3RvY2tfY29kZSApIHtcbiAgICByZXR1cm4gJzEyMyc7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcl9odG1sICggY29sb25fc3RvY2tfY29kZSwgdHZfaWQgKSB7XG4gICAgY29uc29sZS5sb2coIHR2X2lkICk7XG4gICAgcmV0dXJuIGNlbGxfdGVtcGxhdGVcbiAgICAgICAgLnJlcGxhY2UoIC9cXCRzdG9ja19uYW1lXFwkL2csIGNvbG9uX3N0b2NrX2NvZGUpXG4gICAgICAgIC5yZXBsYWNlKCAvXFwkaWRcXCQvZywgdHZfaWQgKVxuICAgICAgICAucmVwbGFjZSggL1xcJHR2X2lkXFwkL2csIHR2X2lkICk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcl90dl9zY3JpcHQgKGNvbG9uX3N0b2NrX2NvZGUsIHR2X2lkKSB7XG4gICAgcmV0dXJuIG5ldyBUcmFkaW5nVmlldy53aWRnZXQoIHtcbiAgICAgICAgXCJ3aWR0aFwiOiAzMDAsXG4gICAgICAgIFwiaGVpZ2h0XCI6IDIwMCxcbiAgICAgICAgXCJzeW1ib2xcIjogY29sb25fc3RvY2tfY29kZSxcbiAgICAgICAgXCJpbnRlcnZhbFwiOiBcIkRcIixcbiAgICAgICAgXCJ0aW1lem9uZVwiOiBcIkFzaWEvSG9uZ19Lb25nXCIsXG4gICAgICAgIFwidGhlbWVcIjogXCJEYXJrXCIsXG4gICAgICAgIFwic3R5bGVcIjogXCIyXCIsXG4gICAgICAgIFwibG9jYWxlXCI6IFwiZW5cIixcbiAgICAgICAgXCJ0b29sYmFyX2JnXCI6IFwiI2YxZjNmNlwiLFxuICAgICAgICBcImVuYWJsZV9wdWJsaXNoaW5nXCI6IGZhbHNlLFxuICAgICAgICBcImhpZGVfdG9wX3Rvb2xiYXJcIjogdHJ1ZSxcbiAgICAgICAgXCJoaWRlX2xlZ2VuZFwiOiB0cnVlLFxuICAgICAgICBcInNhdmVfaW1hZ2VcIjogdHJ1ZSxcbiAgICAgICAgXCJjb250YWluZXJfaWRcIjogdHZfaWRcbiAgICB9ICk7XG59XG5cbmZ1bmN0aW9uIGdlbl90YWJsZSAoKSB7XG5cbiAgICByZXR1cm4gc3RvY2tfbGlzdC5tYXAoIHggPT4ge1xuICAgICAgICByZXR1cm4gcmVuZGVyX2h0bWwoeCwgc3RvY2tfdHZpZFt4XSApXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcl90YWJsZSAoKSB7XG4gICAgcmV0dXJuIGdlbl90YWJsZSgpLmpvaW4oICcnICk7XG59XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnI3N0b2NrX3RhYmxlJyApLmlubmVySFRNTCA9IHJlbmRlcl90YWJsZSgpO1xuICAgIHRoaXMuc3RvY2tfbGlzdC5mb3JFYWNoKCB4ID0+IHtcbiAgICAgICAgdGhpcy5yZW5kZXJfdHZfc2NyaXB0KCB4LCB0aGlzLnN0b2NrX3R2aWRbeF0gKTtcbiAgICB9ICk7XG59XG4iXSwiZmlsZSI6ImFwcC5qcyJ9
