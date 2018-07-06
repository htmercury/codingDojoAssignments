  $('img').hover(
    function() {
        let idx = $(this).attr('idx');
        $(this).attr('src', './images/cat' + idx + '.png');
    },
    function() {
        let idx = $(this).attr('idx');
        $(this).attr('src', './images/ninja' + idx + '.png');
    });