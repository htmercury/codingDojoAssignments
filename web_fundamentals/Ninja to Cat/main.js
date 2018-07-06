$('img').click(function() {
    let idx = $(this).attr('idx');
    let obj = $(this).attr('obj');
    if (obj == 'ninja') {
        $(this).attr('obj', 'cat');
        $(this).attr('src', './images/cat' + idx + '.png');
    }
    else {
        $(this).attr('obj', 'ninja');
        $(this).attr('src', './images/ninja' + idx + '.png');
    }
  });