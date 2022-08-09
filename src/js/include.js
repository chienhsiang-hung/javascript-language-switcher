$(function(){

    // load include html components
    var includes = $('[data-include]');
    $.each(includes, function() {
        
        var file = 'src/html/' + $(this).data('include') + '.html';

        $(this).load(file, function() {
            $(this).contents().unwrap();
        });
    });
});