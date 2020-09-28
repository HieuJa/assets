jQuery(document).ready(function ($) {

    // Move Compare Button & Wishlist Button & Countdown

    $('ul.products.woovina-row.grid li.product, div.wew-woo-slider ul.products li.product').each(function(index, item) {
        var wishlist   = $(item).find('div.tinv-wraper.tinv-wishlist');
        var compare    = $(item).find('a.compare.button');
        var addtocart  = $(item).find('li.btn-wrap a.button');
        var wrapper    = $(item).find('li.btn-wrap');
        var quickview  = $(item).find('li.image-wrap a.wvn-quick-view');
        var imgwrap    = $(item).find('li.image-wrap');
        var entryimage = $(item).find('div.woo-entry-image');
        var newbadge   = $(item).find('.product-inner span.new-badge')
        var salebadge  = $(item).find('.product-inner span.onsale')

        var atctext = $(addtocart).html();
        var cptext  = $(compare).html();
        var qvtext  = $(quickview).text();

        // Add wrapper for the Add to cart & Compare

        $(addtocart).wrap('<div class="btn-inner btn-addtocart"></div>');
        $(compare).wrap('<div class="btn-inner btn-compare"></div>');
        $(quickview).wrap('<div class="btn-inner btn-quickview"></div>');

        addtocart = $(item).find('div.btn-inner.btn-addtocart');
        compare   = $(item).find('div.btn-inner.btn-compare');
        quickview = $(item).find('div.btn-inner.btn-quickview');

        var pach    = $('<div class="btn-positions"></div>');
        var badge   = $('<div class="prd-badge"></div>')

        // Add tooltip for buttons

        $("<div class='tooltip for-addtocart'>" + atctext + "</div>").appendTo($(addtocart));
        $("<div class='tooltip for-compare'>" + cptext + "</div>").appendTo($(compare));
        $("<div class='tooltip for-quickview'>" + qvtext + "</div>").appendTo($(quickview));

        // Add class for button Wishlist
        $(wishlist).addClass('btn-inner btn-wishlist');
        $(wishlist).find('div.tinvwl-tooltip').attr('class', 'tooltip for-wishlist');
        
        $(wishlist).appendTo($(pach));
        $(addtocart).appendTo($(pach));
        $(compare).appendTo($(pach));
        $(pach).appendTo($(wrapper));
        $(pach).clone().appendTo($(imgwrap));
        $(newbadge).appendTo($(badge));
        $(salebadge).appendTo($(badge));
        $(badge).prependTo($(imgwrap));

        // Move Countdown
        var countdown = $(item).find('div.jquery-countdown');

        if ($(countdown).length) {
            $(countdown).removeClass('is-countdown');
            $(countdown).appendTo($(imgwrap));
            $(item).find('div.jquery-countdown').each(function (index) {
                $(this).countdown({until: new Date($(this).attr('data-timer')), format: 'DHMS', padZeroes: true});
            });
        }
    });

    //
    $('.wew-woo-slider li.product').each(function(index, item) {
        var flwooentryinner    = $(item).find('ul.woo-entry-inner');
        var fljquerycountdown   = $(item).find('div.jquery-countdown');
        var fltitle      =  $(item).find('li.title');
        var flinner      =  $(item).find('li.inner');
        var flwoodesc    =  $(item).find('li.woo-desc');
        var flbtnwrap    =  $(item).find('li.btn-wrap');

        var flcontent    = $('<div class="fl-content"></div>');
        $(fltitle).appendTo($(flcontent));
        $(flinner).appendTo($(flcontent));
        $(fljquerycountdown).appendTo($(flcontent));
        $(flwoodesc).appendTo($(flcontent));
        $(flbtnwrap).appendTo($(flcontent));
        $(flcontent).appendTo($(flwooentryinner));
     });

    // For single product page

    if($('body.single-product').length) {
        var wishlist = $('body.single-product div.entry-summary').find('div.tinv-wraper');
        var compare  = $('body.single-product div.entry-summary').find('a.compare.button');
        var formcart = $('body.single-product div.entry-summary').find('form.cart');
        var sale     = $('body.single-product div.product').find('.onsale');    
        var imagewrap= $('body.single-product div.product').find('.flex-viewport');
        var customwidget = $('body.single-product div.product').find('.single-product-custom-widget');
        var cptext   = $(compare).html();

        // Add wrapper for the Compare

        $(compare).wrap('<div class="btn-inner btn-compare"></div>');
        compare = $('body.single-product div.entry-summary').find('div.btn-inner.btn-compare');
        $("<div class='tooltip for-compare'>" + cptext + "</div>").appendTo($(compare));
        $('<div class="btn-single-page"></div>').appendTo($(formcart));
        var wrapper = $('body.single-product div.entry-summary').find('.btn-single-page');

        // Add class for button Wishlist

        $(wishlist).addClass('btn-inner btn-wishlist');
        $(wishlist).find('div.tinvwl-tooltip').attr('class', 'tooltip for-wishlist');
        $(wishlist).appendTo($(wrapper));
        $(compare).appendTo($(wrapper));
        $(customwidget).insertAfter($(wrapper));
        $(sale).appendTo($(imagewrap));

        //Custom Page Content

        var yithwfbt = $('body.single-product div.entry div.yith-wfbt-section');
        var upsells = $('body.single-product div.entry .up-sells');
        var related = $('body.single-product div.entry .related');
        var tabproduct = $('body.single-product div.entry .wc-tabs-wrapper');
        var singlecontent  = $('<div class="page-content-r1"></div>');

        $(yithwfbt).appendTo($(singlecontent));
        $(tabproduct).appendTo($(singlecontent));
        $(upsells).appendTo($(singlecontent));
        $(related).appendTo($(singlecontent));

        var pagecontent = $('body.single-product .sidebar-container');
        $(singlecontent).insertAfter($(pagecontent));
    }

    // After added to cart

    $(document.body).on('added_to_cart', function(){
        $('.btn-addtocart .added_to_cart').each(function(index, item) {
            var txtAdded = $(item).text();
            $(item).next().text(txtAdded);
        });
    });

    $(document).on("ready", function () {
        "use strict";
        $j('.select-categories h5').on('click', function (event) {
            event.preventDefault();
            $j('.select-categories .product-categories').slideToggle("fast");
        });

        $(document).on('click', '.wew-tabs-wrap', function () {
            $(this).addClass('open-show');
        }).on('click', '.wew-tab-title', function (e) {
            e.stopPropagation();
            $(this).closest('.wew-tabs-wrap').removeClass('open-show');
        });

        $('body').delegate('.elementor-menu-cart__close-button', 'click', function(e){
            e.preventDefault();
            $('body').removeClass('show-cart');
            $('.wvn-cart-overlay').hide();
        });
    });

   $('.single-product .product.wvn-thumbs-layout-horizontal .woocommerce-product-gallery .flex-control-thumbs').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 959,
                settings: {
                    slidesToShow:4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 414,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });



    // Move Count Of Category

    $('ul.products .product-category .woo-entry-inner').each(function(index, item){

        var count   = $(item).find('mark.count');
        var woodesc = $(item).find('div.woo-desc');
        $(count).prependTo($(woodesc));
        
    });

    // Move Wrap PageContent
    $('.single-product .site-content .entry-content').each(function(index, item){
        var entry   = $(item).find('div.entry');
        var navwrap = $(item).find('div.wvn-product-nav-wrap');
        var productgallery  = $(item).find('div.woocommerce-product-gallery');
        var summary         = $(item).find('div.summary');
        var woocommercetabs = $(item).find('div.woocommerce-tabs');
        var productshare    = $(item).find('div.product-share');

        var pagecontent    = $('<div class="page-content"></div>');

        $(productshare).appendTo($(summary));
        $(pagecontent).prependTo($(entry));
        $(navwrap).appendTo($(pagecontent));
        $(productgallery).appendTo($(pagecontent));
        $(summary).appendTo($(pagecontent));
    });
});
