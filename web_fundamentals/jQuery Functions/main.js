$('#hide button').click(function() {
    $('#hide p').hide();
});

$('#show button').click(function() {
    $('#show .hidden').show();
});

$('#toggle button').click(function() {
    $('#toggle .hidden').toggle();
});

$('#slideDown button').click(function() {
    $('#slideDown .hidden').slideDown();
});

$('#slideUp button').click(function() {
    $('#slideUp img').slideUp();
});

$('#slideToggle button').click(function() {
    $('#slideToggle img').slideToggle();
});

$('#fadeIn button').click(function() {
    $('#fadeIn .hidden').fadeIn();
});

$('#fadeOut button').click(function() {
    $('#fadeOut p').fadeOut();
});

$('#addClass button').click(function() {
    $('#addClass p').addClass("red");
});

$('#before button').click(function() {
    $('#before p').before("<p>some text</p>");
});

$('#after button').click(function() {
    $('#after p').after("<p>some text</p>");
});

$('#append button').click(function() {
    $('#append .col-9').append("<img src='./images/globe.png' alt='glove'>");
});

$('#html button').click(function() {
    $('#html .col-9').html("<p>hello world</p>");
});

$('#attr button').click(function() {
    $('#attr img').attr("src", "./images/github.png");
});

$('#val button').click(function() {
    let data = $(this).text();
    $('#val input').val(data);
});

$('#text button').click(function() {
    let data = $('#text p').text();
    $('#text p').html(data);
});