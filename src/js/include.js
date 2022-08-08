$(function(){

    // load include html components
    var includes = $('[data-include]');
    $.each(includes, function(){
        
        var file = 'src/html/' + $(this).data('include') + '.html';

        $(this).load(file);
    });

    // reload from DOM and unwrap the div
    var includes = $('[data-include]');
    $.each(includes, $(this).html().unwrap())
});