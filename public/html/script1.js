
$(function () {
    var mdwBtn = $('.modal-btn'),
        overlayOpacity = .7,        // 背景透明變數
        fadeTime = 500;        // 漸進時間變數
    mdwBtn.on('click', function (e) {
        console.log('hit')
        e.preventDefault();
        var setMdw = $(this),
            setHref = setMdw.attr('href'),
            setSource = $(setHref).html(),
            wdHeight = $(window).height();
        $('body').append('<div id="mdOverlay">    <div id="mdWindow">        <div class="mdClose">X</div>' + setSource + '</div></div>     ')
        $('#mdOverlay,#mdWindow').css({ display: 'blick', opacity: '0' });
        $('#mdOverlay').css({ height: wdHeight }).stop().animate({ opacity: overlayOpacity }, fadeTime);
        $('#mdWindow').stop().animate({ opacity: '1' }, fadeTime);
        
        // $(window).on('resize', function () {
        //     var adjHeight = $(window).height();
        //     $('#mdOverlay').css({ height: adjHeight });
        // });
    })
})